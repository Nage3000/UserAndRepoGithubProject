class GitHub {
  constructor() {
    this.client_id = '977058fd01a96c685fed';
    // this.client_secret = 'be38377aeec886d5ef2eb8c09481a4cb27afe3b3';
    this.client_secret = 'c487857f6a4795403dc67e77502048611c9a2d76';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}