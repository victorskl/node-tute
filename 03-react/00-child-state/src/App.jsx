import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './component/Landing';

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo'/>
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo'/>
        </a>
      </div>

      <h1>Child State Demo</h1>
      <div className='card'>
        <Landing/>
      </div>
    </>
  )
}

export default App
