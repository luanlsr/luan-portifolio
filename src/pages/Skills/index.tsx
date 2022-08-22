import { useTranslation } from 'react-i18next'
import { Cards } from '../../components/Cards'
import './style.css'

export const Skills = () => {
  const { t } = useTranslation()
  return (
    <section className='skills' id='skills'>
      <div>
        <h1>{t('skills')}</h1>
        <article>
          <Cards />
        </article>
      </div>
    </section>
  )
}
