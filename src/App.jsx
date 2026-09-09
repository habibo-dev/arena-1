import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import OmraPage from './pages/OmraPage'
import HajjPage from './pages/HajjPage'
import VoyagesPage from './pages/VoyagesPage'
import PackageDetailPage from './pages/PackageDetailPage'
import AboutPage from './pages/AboutPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="omra" element={<OmraPage />} />
        <Route path="omra/:slug" element={<PackageDetailPage type="omra" />} />
        <Route path="hajj" element={<HajjPage />} />
        <Route path="hajj/:slug" element={<PackageDetailPage type="hajj" />} />
        <Route path="voyages" element={<VoyagesPage />} />
        <Route path="voyages/:slug" element={<PackageDetailPage type="voyage" />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
