const fs = require('fs');
const dateformat = require('dateformat');
const { concatJsonFiles, resolveRepos } = require('./utilities');

const execute = async () => {
    console.log('Building docs...');
    const configs = await concatJsonFiles('libraries');
    const data = await resolveRepos(configs);
    const reposByLanguage = extractGroups(data);
    const languageNames = Object.keys(reposByLanguage).sort();

    let libraryString = `Riot API Libraries
==========================

`;

    if (!languageNames) {
        console.log('Cannot find language names');
        return;
    }

    for (const name of languageNames) {
        const index = languageNames.indexOf(name);
        const reposInLanguage = reposByLanguage[name];
        const repos = reposInLanguage.sort((a, b) => {
            return +b.remote.updated_at - +a.remote.updated_at;
        });

        if (!containsValidLibrary(repos)) {
            // console.log(`${name} does not have any v4-supported repos`);
            continue;
        }

        libraryString += `${name}
------------------------------------------

`;

        if (!repos) {
            console.log(`${name} contains no repos`);
            continue;
        }

        for (const repo of repos) {
            if (!repo.config.tags || repo.config.tags.indexOf('v4') < 0) {
                // console.log(`${repo.remote.owner}/${repo.remote.name} does not support v4`);
                continue;
            }

            libraryString += `\`${repo.remote.name} <${repo.remote.url}>\`_ (☆ ${repo.remote.star_count})
${"~".repeat(100)}

${repo.config.description || repo.remote.description}

`;

            if (repo.config.links) {
                libraryString += `Links
::::::::::::::::
`;
                for (const link of repo.config.links) {
                    const linkIndex = repo.config.links.indexOf(link);
                    libraryString += `
- \`${link.name} <${link.url}>\`_`;
                }

                libraryString += `
`;
            }

            if (repo.remote.license) {
                libraryString += `| License: \`${repo.remote.license.spdx_id} <http://choosealicense.com/licenses/${repo.remote.license.key}>\`_
`;
            } else {
                libraryString += `| License: None
`;
            }

            if (repo.config.tags) {
                libraryString += `| Tags: `;
                for (const tag of repo.config.tags) {
                    const tagIndex = repo.config.tags.indexOf(tag);
                    libraryString += tag;
                    if (tagIndex !== repo.config.tags.length - 1) {
                        libraryString += ', ';
                    }
                }
                libraryString += `
`;
            }
            libraryString += `| Last Updated: ${dateformat(repo.remote.updated_at, 'mmm d, yyyy')}

-----------------

`;
        }
    }

    writeToFile(libraryString);
    console.log('Successfully built libraries.rst');
}

const writeToFile = (text) => {
    fs.writeFileSync('docs/libraries.rst', text);
}

const containsValidLibrary = (repos) => {
    for (const repo of repos) {
        if (repo.config.tags && repo.config.tags.indexOf('v3') > -1) {
            return true;
        }
    }

    return false;
};

const extractGroups = (data) => {
    const groupToValues = data.reduce((obj, library) => {
        obj[library.config.language] = obj[library.config.language] || [];
        obj[library.config.language].push(library);
        return obj;
    }, {});

    return groupToValues;
};

execute();