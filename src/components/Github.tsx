import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

interface Repo {
  name: string;
  language: string | null;
  pushed_at: string;
  html_url: string;
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

  console.log('sortedRepos', sortedRepos);

  return (
    <section className="mt-8">
      <div className="grid grid-cols-3 gap-4">
        {
          sortedRepos?.map(repo => {
            const { language, name, pushed_at, html_url } = repo;

            return (
              <div className="border-gray-300 p-2 border-2 rounded-md" key={name}>
                <h3 className="text-lg font-bold">{name}</h3>
                <div className="mt-1">
                  <div className="text-gray-600">Language</div>
                  <div className="font-bold text-indigo-600">{language}</div>
                </div>
                <div className="mt-1">
                  <div className="text-gray-600">Pushed at</div>
                  <div className="font-bold text-indigo-600">{new Date(pushed_at).toLocaleDateString()}</div>
                </div>
                {html_url && <a href={html_url} target="_blank" rel="noopener noreferrer">Repo</a>}
              </div>
            );
          })
        }
      </div>
    </section>
  )
};

export default Github
