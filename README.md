## The repo of  [www.victorcojocaru.com](https://www.victorcojocaru.com).

### Use node 10.

Installation steps:
1. npm install
2. npm run start

### Development & Deployment:

Source is the default and live branch (better CI/CD comming soon..)
1. Make sure you are running on the latest version of source! (Editing `Custom Domain` field in github will create a commit to source, so make sure you have it locally before starting work. Otherwise see Note 3.)
2. Add your code changes
3. run `npm run predeploy` - this will generate a new `docs` folder with the new build. (`/docs` must be named docs because gh-pages serves the build out of either root or /docs. November 2022.)
4. add, commit and push.
5. Once commit is in github, go to `Settings` > `Pages` and populate the `Custom Domain` field with `https://www.victorcojocaru.com`.
Note: at this stage also verify that the `Branch` setting is still configured to `source/docs`;
Note 2: Confirm that `Enforce HTTPS` is turned ON otherwise google domains will fail to point to git.
Note 3: if you run into source branch divergent issues you can always rebase by using the `git rebase origin/source` command.

Usefull docs:
https://medium.com/@taya.ugay/deploying-react-app-with-github-pages-and-google-domains-in-10-minutes-c3820eba5207

