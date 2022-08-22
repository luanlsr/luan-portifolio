import { useTranslation } from 'react-i18next'
import { Forms } from '../../components/Form'
import './style.css'

export const Contacts = () => {
  const { t } = useTranslation()
  return (
    <section className="contact" id="contact">
      <div>
        <h1>{t('contact')}</h1>
        <Forms />
      </div>
    </section>
  )
}
