import BootNavBar from './BootNavBar.js'
import Footer from './Footer.js'
/* import pageBackground from '../src/pageImages/pagebackground.jpg' */
export default function Layout({ children }) {
  return (
    <>
{/*     <div style={{backgroundImage}}> */}
<div className= "background-lay">
      <BootNavBar />
      {children}
      <Footer />
      </div>
{/*       </div> */}
    </>
  )
}