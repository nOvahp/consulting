import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <NavBar />
    <div id="main">
        <Outlet />
    </div>
    <Footer />
    </>


  )
}

export default Layout