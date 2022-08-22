import { useEffect, useState } from 'react'
import logoName from '../../assets/images/logoN.png'
import logoType from '../../assets/images/logotype.png'
import { useTranslation } from 'react-i18next'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import ReactCountryFlag from 'react-country-flag'
import classes from './Header.module.scss'
import './Header.css'

export const Header = (): JSX.Element => {
  const [showHeader, setShowHeader] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [ukFlag, setUkFlag] = useState(true)
  const [brFlag, setBrFlag] = useState(false)
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setShowHeader(true)
    } else {
      setShowHeader(false)
    }
  }

  const handleTranslate = ({ target }: any) => {
    if (
      target.classList.contains('grayFlag') &&
      target.classList.contains('ukFlag')
    ) {
      setUkFlag(false)
      setBrFlag(true)
      i18n.changeLanguage('en')
    }
    if (
      target.classList.contains('grayFlag') &&
      target.classList.contains('brFlag')
    ) {
      setBrFlag(false)
      setUkFlag(true)
      i18n.changeLanguage('ptBR')
    }
  }

  const menuToggleHandler = () => {
    setMenuOpen(p => !p)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header
      className={
        showHeader
          ? `${classes.header} header-container active`
          : `${classes.header} header-container`
      }
    >
      <div className={classes.header__content}>
        <div className="logoContainer">
          <a href="#home">
            <img className="logoName" src={logoName} alt="logoName" />
            <img className="logoType" src={logoType} alt="logoType" />
          </a>
        </div>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <a onClick={() => setMenuOpen(false)} href="#home">
                {t('home')}
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="#about">
                {t('about')}
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="#skills">
                {t('skills')}
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="#projects">
                {t('projects')}
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href="#contact">
                {t('contact')}
              </a>
            </li>
            <li className="flags">
              <ReactCountryFlag
                onClick={handleTranslate}
                className={`flag brFlag ${brFlag ? 'grayFlag' : ''}`}
                countryCode="BR"
                svg
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                }}
                aria-label="Brazil"
              />
              <ReactCountryFlag
                onClick={handleTranslate}
                className={`flag ukFlag ${ukFlag ? 'grayFlag' : ''}`}
                countryCode="GB"
                svg
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                }}
                aria-label="GB"
              />
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <FaBars onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  )
}
