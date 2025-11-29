import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Repo from './Repo';
import { getUserRepos } from '../api/getUserRepos'
import type { Repository } from '../types/repository';
import Loading from './Loading';

function Repos() {
  const [username, setUsername] = useState('findross');
  const [inputValue, setInputValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [perPage] = useState(6);

  const sortByOptions = [
    { 'value': 'pushed', 'label': 'Pushed at' },
    { 'value': 'created', 'label': 'Created at' },
    { 'value': 'updated', 'label': 'Updated at' },
    { 'value': 'full_name', 'label': 'Full name' },
  ]

  const { data, isLoading, error } = useQuery<Repository[]>({
    queryKey: ['repos', username, sortValue],
    queryFn: () => getUserRepos(username, sortValue, perPage)
  });

  if (error) return <div>An error has occurred: {error.message}</div>

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue === "") return;
    setUsername(inputValue)
  }

  return (
    <section className="mt-8">

      <form className="flex gap-2 mt-2" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Search for your own repository on Github.com"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Search
        </button>
      </form>

      <div className="mt-2">
        <select
          id="repo-selector"
          required
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          className="appearance-none text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent cursor-pointer"
        >
          <option value={sortByOptions[0].value} className="text-gray-400">{sortByOptions[0].label}</option>
          {sortByOptions.slice(1).map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          id="repo-selector"
          required
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          className="appearance-none text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent cursor-pointer"
        >
          <option value={sortByOptions[0].value} className="text-gray-400">{sortByOptions[0].label}</option>
          {sortByOptions.slice(1).map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>



      {isLoading ?? <Loading />}

      <div className="flex flex-col lg:grid grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {
          data?.map(repo => <Repo repo={repo} key={repo.html_url} />)
        }
      </div>
    </section>
  )
};

export default Repos
