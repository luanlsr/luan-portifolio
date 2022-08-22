import { useTranslation } from 'react-i18next'
import './style.css'

export const Projects = () => {
  const { t } = useTranslation()
  return (
    <section className='projects' id='projects'>
      <div>
        <h1>{t('projects')}</h1>
      </div>
    </section>
  )
}
