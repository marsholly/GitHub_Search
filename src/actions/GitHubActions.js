import API from '../API';

const GitHubActions = {
  searchByLanguage(languages) {
    API.searchByLanguage(languages)
  },
  searchByUser(langlib) {
    API.searchByUser(langlib)
  },
}

export default GitHubActions;
