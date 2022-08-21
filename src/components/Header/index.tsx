import React, { useEffect, useState } from 'react'
import logoName from '../../assets/images/logoN.png'
import logoType from '../../assets/images/logotype.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import classes from './Header.module.scss'
import './Header.css'

export const Header: React.FunctionComponent = () => {
  const [showHeader, setShowHeader] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

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

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
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
        {/* <h2 className={classes.header__content__logo}>navbar</h2> */}
        <div className='logoContainer'>
          <a href='#home'>
            <img className='logoName' src={logoName} alt='logoName' />
            <img className='logoType' src={logoType} alt='logoType' />
          </a>
        </div>
        <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ''}`}>
          <ul>
            <li>
              <a onClick={() => setMenuOpen(false)} href='#home'>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href='#about'>
                About
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href='#skills'>
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => setMenuOpen(false)} href='#contact'>
                Contact
              </a>
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
