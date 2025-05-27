import './app.css'
import Gallary from './Components/Gallary/Gallary.jsx'
import LeftBar from './Components/LeftBar/LeftBar.jsx'
import TopBar from './Components/TopBar/TopBar.jsx'

const App = () => {
  return (
    <>
    <div className='app'>
    {/* <div className='appContainer'> */}
       <LeftBar/>
       {/* </div> */}
    <div className='content'>
      <TopBar/>
      <Gallary/>
    </div>
   
    </div>
    </>
  )
}

export default App