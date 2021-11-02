import { setFailed } from '@actions/core';
// import { context, getOctokit } from '@actions/github';

// const tokenInput = 'repo-token';

(() => {
	try {
		// const token = getInput(tokenInput);
		// const octokit = getOctokit(token);
		console.log('Hello I am a Github action');
	} catch (e) {
		setFailed((e as Error).message);
	}
})();
