import { useTranslation } from 'react-i18next'
import { BiCopyright } from 'react-icons/bi'
import './style.css'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <section className='footer'>
      <div>
        <span>{t('createdBy')} Luan da Silva Ramalho | </span>
        <BiCopyright />
        <span> 2022 {t('rights')}.</span>
      </div>
    </section>
  )
}
