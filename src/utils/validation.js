export function validateBookingForm(values, t) {
  const errors = {}
  const e = t.form.errors

  if (!values.fullName?.trim()) errors.fullName = e.required
  if (!values.phone?.trim()) errors.phone = e.required
  else if (!isValidPhone(values.phone)) errors.phone = e.phone

  if (values.email?.trim() && !isValidEmail(values.email)) {
    errors.email = e.email
  }

  if (!values.service) errors.service = e.required

  const travelers = Number(values.travelers)
  if (!values.travelers || Number.isNaN(travelers) || travelers < 1) {
    errors.travelers = e.travelers
  }

  return errors
}

export function isValidPhone(phone) {
  const digits = String(phone).replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())
}

export const emptyBookingForm = {
  fullName: '',
  phone: '',
  whatsapp: '',
  email: '',
  service: '',
  destination: '',
  travelers: '1',
  date: '',
  message: '',
}
