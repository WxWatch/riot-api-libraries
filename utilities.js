const glob = require('glob');

const { GetInfoForRepo } = require('./github');

module.exports = {
    concatJsonFiles: (dir) => {
        return new Promise((resolve, reject) => {
            const fileData = [];
            const globPath = `./${dir}/**/*.json`;
            glob(globPath, (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    if (!files) {
                        reject(`No files found in ${dir}`);
                    } else {
                        files.forEach((file) => {
                            const data = require(`${file}`);
                            fileData.push(data);
                        });
                        resolve(fileData);
                    }
                }
            });
        });
    },
    resolveRepos: async (configs) => {
        console.log(`Resolving ${configs.length} repos`);
        const repoData = [];
        for (const config of configs) {
            let data;
            try {
                data = await GetInfoForRepo(config.owner, config.repo);
            } catch (err) {
                if (err.headers && err.headers['x-ratelimit-remaining'] === '0') {
                    console.log('Rate Limit Exceeded...now exiting');
                    process.exit();
                } else {
                    console.log('Unknown error', err);
                }
            } finally {
                if (data && data.message && data.message === 'Moved Permanently') {
                    console.log('Repo has moved permanently', { config, data });
                } else if (data) {
                    const remote = {
                        name: data.name,
                        updated_at: new Date(data.pushed_at),
                        star_count: data.stargazers_count,
                        description: data.description,
                        owner: data.owner.login,
                        license: data.license,
                        url: data.html_url
                    };

                    repoData.push({
                        config,
                        remote
                    });
                } else {
                    console.log('No repo found for', { config });
                }
            }
        }

        return repoData;
    }
}

const arrayIncludes = (array, item) => {
    if (!array) {
        return false;
    }
    return array.indexOf(item) > -1;
};

const getTagsForRepo = (repo) => {
    const tags = [];
    if (arrayIncludes(repo.tags, 'v3')) {
        tags.push('v3');
    }

    if (arrayIncludes(repo.tags, 'rate-limiting')) {
        tags.push('rate-limiting');
    }

    if (tags.length > 0) {
        return tags;
    }

    return null;
};