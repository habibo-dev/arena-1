import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import SkipLink from './SkipLink'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="flex-1 pb-safe-whatsapp">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default Layout
