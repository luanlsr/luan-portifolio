import { useTranslation } from 'react-i18next'
import './style.css'

export const Card = ({ title, thumb, link, tec }: any) => {
  const { t } = useTranslation()

  return (
    <div className='card'>
      <h3 className='title'>{title}</h3>
      <span>{tec}</span>
      <img src={thumb} alt={title} />
      <a href={link} target='__blank'>
        <button>{t('access')}</button>
      </a>
    </div>
  )
}
