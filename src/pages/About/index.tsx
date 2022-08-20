import photo from '../../assets/images/photo-perfil.png'
import './style.css'

export const About = () => {
  return (
    <section className='about' id='about'>
      <div>
        <h1>About</h1>
        <p className='about-text'>
          {`I am a lover of acquiring knowledge and I have been looking in web development studies
          for a way to change the world, even if in a simple way. I believe that technology is an
          efficient means of transforming society into a better place. I am an ex-military member
          of the Brazilian Navy where I served for 9 years and acquired a lot of knowledge in several
          areas. I am studying the last semester of Systems Analysis and Development at Faculdade das
          Américas (FAM) and I completed the Fullstack Web Development course at TRYBE. I focus on
          working in the areas of fullstack web development and intend to study more content focused
          on mobile development. I think about finishing my college and soon after continuing my
          training with certifications and postgraduate studies in the area of Software Engineering.
          I have experience in javascript with ReactJS and VueJS frameworks. My backend stacks are
          NodeJs with Express and C# (AspNetCore | .NET). I'm studying Java with Spring Boot to
          increase my range of backend stacks.`}
        </p>
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
