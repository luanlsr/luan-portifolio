import React, { useState } from 'react'
import { ListMenu } from '../../molecules'
import classes from './Header.module.scss'
import { FaBars } from 'react-icons/fa'
import logoName from '../../../assets/images/logoN.png'
import logoType from '../../../assets/images/logotype.png'
import './Header.css'
// import { AiOutlineClose } from 'react-icons/ai'

export const Header: React.FunctionComponent = () => {
  const [showHeader, setShowHeader] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setShowHeader(true)
    } else {
      setShowHeader(false)
    }
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
          <img className='logoName' src={logoName} alt='logoName' />
          <img className='logoType' src={logoType} alt='logoType' />
        </div>
        <nav className={classes.header__content__nav}>
          <ListMenu />
        </nav>
        <div className={classes.header__content__toggle}>
          <FaBars />
        </div>
        {/* <div>
          <AiOutlineClose />
        </div> */}
      </div>
    </header>
  )
}
