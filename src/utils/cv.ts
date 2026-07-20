import nadaCv from '@/assets/cv/Nada_Essam_Resume..pdf'

export const downloadCV = () => {
  const link = document.createElement('a')
  link.href = nadaCv
  link.download = 'Nada_Essam_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default downloadCV
