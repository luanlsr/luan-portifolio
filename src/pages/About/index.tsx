import './style.css'

export const About = () => {
  return (
    <section className='about' id='about'>
      <div>
        <h1>About</h1>
        <p className='about-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque temporibus id tempora
          accusantium molestias adipisci incidunt iste ipsam. Aliquam beatae iure aperiam ratione
          inventore. Provident possimus obcaecati fugiat repudiandae quae!
        </p>
        <a href='https://www.linkedin.com/in/luan-ramalholsr/' target='__blank'>
          <button className='linkedin-btn'>Linkedin</button>
        </a>
      </div>
    </section>
  )
}
