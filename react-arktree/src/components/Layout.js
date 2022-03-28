import BootNavBar from './BootNavBar.js'
import Footer from './Footer.js'
import imageBackground from "../pageImages/pagebackground.jpg"
/* import pageBackground from '../src/pageImages/pagebackground.jpg' */
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