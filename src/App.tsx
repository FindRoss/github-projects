
import './App.css'
import Repos from './components/Repos'
import Hero from './components/Hero'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="mx-auto container px-4">
        <Repos />
      </main>
    </>
  )
}

export default App
