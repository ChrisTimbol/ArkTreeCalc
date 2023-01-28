import BootNavBar from './BootNavBar.js'
import Footer from './Footer.js'
export default function Layout({ children }) {
  return (
    <>
      <BootNavBar />
      <div className= "backgroundImage" >
      {children}
      <Footer />
      </div>
    </>
  )
}