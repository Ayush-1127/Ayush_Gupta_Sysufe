
import Navbar from "./Navbar"
import Popular from "./Popular"
import Story from "./Story"
import {ToastContainer} from 'react-toastify'
//import 'react-toastify/dist/ReactTostify.css'
import 'react-toastify/dist/ReactToastify.min.css';
function App(){
  return (
    <div className="header">
      <Navbar/>
      {/* <Popular /> */}
      <Story />
      <ToastContainer/>
    </div>
  )
}

export default App



