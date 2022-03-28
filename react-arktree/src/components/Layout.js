import BootNavBar from './BootNavBar.js'
import Footer from './Footer.js'
export default function Layout({ children }) {
  return (
    <>
    <div>
      <BootNavBar />
      {children}
      <Footer />
      </div>
    </>
  )
}