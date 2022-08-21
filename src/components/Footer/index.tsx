import './style.css'
import { BiCopyright } from 'react-icons/bi'

export const Footer = () => {
  return (
    <section className='footer'>
      <div>
        <span>Created By Luan da Silva Ramalho | </span>
        <BiCopyright />
        <span> 2022 All rights Reserved.</span>
      </div>
    </section>
  )
}
