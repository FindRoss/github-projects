
import './App.css'
import Github from './components/Github'
import Hero from './components/Hero'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <main className="App mx-auto container px-4">
        <Hero />
        <Github />
      </main>
    </>
  )
}

export default App
