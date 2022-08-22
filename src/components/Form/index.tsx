import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import './style.css'

const Result = () => {
  const { t } = useTranslation()
  return <p>{t('sentMessage')}</p>
}

export const Forms = () => {
  const [sentEmail, setSendEmail] = useState(false)
  const form = useRef<HTMLFormElement>(null)
  const { t } = useTranslation()

  function handleSubmit(e: any) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_wtqpwv7',
        'template_osl335c',
        e.target,
        'gCWrsg0UyOJucnHKv',
      )

      .then(
        result => {
          console.log(result.text, 'mensagem enviada!')
          setTimeout(() => {
            setSendEmail(false)
          }, 2000)
          setSendEmail(true)
        },
        error => console.log(error.text),
      )
    e.target.reset()
  }

  return (
    <section className="form-container">
      <form ref={form} onSubmit={handleSubmit} className="form">
        <h3>{t('writeMe')}</h3>
        <div className="container">
          <label htmlFor="name">{t('yourName')}</label>
          <input required name="user_name" type="text" id="name" />
        </div>
        <div className="container">
          <label htmlFor="email">{t('yourEmail')}</label>
          <input required name="user_email" type="email" id="email" />
        </div>
        <div className="container">
          <label htmlFor="subject">{t('yourSubject')}</label>
          <input required name="user_subject" type="text" id="subject" />
        </div>
        <div className="container">
          <label htmlFor="message">{t('message')}</label>
          <textarea required name="message" id="message" />
        </div>
        <button className="btn-submit">{t('send')}</button>
      </form>
      {sentEmail ? <Result /> : null}
    </section>
  )
}
