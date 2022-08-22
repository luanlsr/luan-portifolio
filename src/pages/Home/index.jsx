import { useTranslation } from 'react-i18next'
import './style.css'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <section className='home' id='home'>
      <div className='meeting'>
        <p>{t('iAm')}</p>
        <ul className='dynamic-text'>
          <li>
            <h1>Luan da Silva Ramalho</h1>
          </li>
          <li>
            <h1>{t('frontend')}</h1>
          </li>
          <li>
            <h1>{t('backend')}</h1>
          </li>
          <li>
            <h1>{t('fullstack')}</h1>
          </li>
        </ul>
      </div>
    </section>
  )
}
