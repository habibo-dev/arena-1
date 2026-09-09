import { createContext, useContext, useMemo } from 'react'
import { company as companyData } from '../data/company'
import {
  umrahPackages,
  hajjPackages,
  destinations,
  faqs,
  testimonials,
  whyTawars,
  hajjServices,
  bookingProcess,
} from '../data/packages'

const CompanyContext = createContext(null)

export function CompanyProvider({ children }) {
  const value = useMemo(
    () => ({
      company: companyData,
      umrahPackages,
      hajjPackages,
      destinations,
      faqs,
      testimonials,
      whyTawars,
      hajjServices,
      bookingProcess,
    }),
    [],
  )

  return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
}

export function useCompany() {
  const ctx = useContext(CompanyContext)
  if (!ctx) throw new Error('useCompany must be used within CompanyProvider')
  return ctx
}
