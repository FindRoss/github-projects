import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

interface Repo {
  name: string;
  language: string | null;
  pushed_at: string;
  url: string;
}

function Github() {
  const [username] = useState('findross');
  const { isLoading, error, data } = useQuery<Repo[]>({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred: {error.message}</div>

  // Sort by recently updated (pushed_at date)
  const sortedRepos = [...(data ?? [])].sort((a, b) => {
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  });

  return (
    <section>
      <div>
        <h2>Github</h2>
        <div className="grid grid-cols-3 gap-4">

          {
            sortedRepos?.map(repo => {
              const { language, name, pushed_at, url } = repo;

              return (
                <div className="border-gray-300 p-2 border-2 rounded-md" key={name}>
                  <h3 className="text-xl">{name}</h3>
                  <p>Language: {language}</p>
                  <p>Updated at: {new Date(pushed_at).toLocaleDateString()}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer">Repository Link</a>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  )
};

export default Github
