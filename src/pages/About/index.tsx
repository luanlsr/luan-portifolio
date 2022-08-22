import { useTranslation } from 'react-i18next'
import photo from '../../assets/images/photo-perfil.png'
import './style.css'

export const About = () => {
  const { t } = useTranslation()
  return (
    <section className='about' id='about'>
      <div>
        <h1>{t('about')}</h1>
        <p className='about-text'>{t('textAbout')}</p>
        <a href='https://www.linkedin.com/in/luan-ramalholsr/' target='__blank'>
          <button className='linkedin-btn'>Linkedin</button>
        </a>
      </div>
      <div className='photo-container'>
        <img className='photo' src={photo} alt='photo' />
      </div>
    </section>
  )
}
