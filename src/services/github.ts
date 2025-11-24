export const fetchGithubRepos = async (username: string, perPage: number) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}&sort=updated&direction=desc`
  );
  return response.json();
};
