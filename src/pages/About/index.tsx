import { useTranslation } from 'react-i18next'
import photo from '../../assets/images/photo-perfil.png'
import github from '../../assets/images/logos/GitHub-Logo2.png'
import linkedin from '../../assets/images/logos/linkedin.png'
import './style.css'

export const About = () => {
  const { t } = useTranslation()
  return (
    <section className='about' id='about'>
      <div className='left-container'>
        <h1>{t('about')}</h1>
        <p className='about-text'>{t('textAbout')}</p>
        <div className='networks'>
          <a href='https://www.linkedin.com/in/luan-ramalholsr/' target='__blank'>
            <img src={linkedin} alt='github' className='networks-btn' />
          </a>
          <a href='https://github.com/luanlsr' target='__blank'>
            <img src={github} alt='linkedin' className='networks-btn' />
          </a>
        </div>
      </div>
      <div className='photo-container'>
        <img className='photo' src={photo} alt='photo' />
      </div>
    </section>
  )
}
