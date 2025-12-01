export async function getUserRepos(
  username: string = "",
  sortValue: string = "",
  order: string = "desc",
  perPage: number = 6
) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}&sort=${sortValue}&direction=${order}`
  );

  if (!res.ok) {
    throw new Error(`GitHub request failed: ${res.status}`);
  }

  return res.json();
}
