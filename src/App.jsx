import Spinner from './components/Spinner'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='flex justify-between'>
        <img className='mx-auto h-40 animate-pulse rounded-full' src="https://avatars.githubusercontent.com/u/24458834?v=4" />
      </div>
      <div className='animate-land pb-10 pt-8'>
        <h1 className=" font-bold text-7xl font-mono">
          Felipe Aguilar
        </h1>
        <h2 className='font-bold text-3xl items-center justify-center'>Engineering student @ UC | Chile</h2>
      </div>
      <div className='animate-land text-xl text-justify mx-60'>
        Hey gamers! I'm an enthusiastic programmer interested in computer science, web development and physics, astronomy. I love exploring new technologies and finding creative solutions to complex problems. I'm excited to be a part of the constantly evolving world of technology and look forward to continuing to learn and grow as a programmer and web developer.
      </div>
      <div>
        <div className='animate-land pt-12 pb-10'>
          <h1 className=" font-bold text-6xl font-mono">
            Goals
          </h1>
        </div>
        <div className='animate-land text-xl text-justify mx-60'>
          <ul className='list-disc'>
            <li>Learn Machine Learning</li>
            <li>Learn C++</li>
            <li>Learn Quantum computing</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='animate-land pt-12 pb-10'>
          <h1 className=" font-bold text-6xl font-mono">
            Projects
          </h1>
        </div>
        <div className='animate-land text-xl text-justify mx-60'>
          (wip) 
        </div>
      </div>
      
    </div>
    
  )
}

export default App
