import './style.css'
import { logos } from './logos'

export const Cards = () => {
  const amountCards = [...Array(logos.length)]
  return (
    <div className="card-container">
      {amountCards.map((_, i) => (
        <div className="cardss" key={i}>
          <a href={logos[i].link} target="__blank">
            <img
              key={i}
              className="logo"
              src={logos[i].logo}
              alt={logos[i].name}
            />
          </a>
          <span>{logos[i].name}</span>
        </div>
      ))}
    </div>
  )
}
