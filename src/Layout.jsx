import { Outlet } from 'react-router-dom'
import {Footer, Header} from './components/Index/Index.jsx' 

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
