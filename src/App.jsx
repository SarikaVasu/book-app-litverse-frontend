
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { AuthProvide } from './context/AuthContext.jsx'

function App() {


  return (
    <>
    <AuthProvide>
      <Navbar/>
        <main className='min-h-screen max-w-screen-2xl mx-auto px-20 py-6 font-montserrat'>
          <Outlet/>
        </main>
      <Footer />
    </AuthProvide>
      
    </>
  )
}

export default App
