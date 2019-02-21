const GithubAPI = require('@octokit/rest');

const github = new GithubAPI({
    userAgent: 'riot-api-libraries-updater',
    baseUrl: 'https://api.github.com',
    auth: `token ${process.env.GITHUB_TOKEN}`
});

module.exports = {
    GetInfoForRepo: (owner, repo) => {
        return github.repos.get({
            owner,
            repo
        }).then(data => {
            return data.data;
        });
    }
}
