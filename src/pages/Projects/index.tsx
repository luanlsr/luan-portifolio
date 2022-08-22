import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'
import { projects } from './projects'

export const Projects = () => {
  const { t } = useTranslation()
  const breakpoints = {
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    1048: {
      width: 1048,
      slidesPerView: 2,
    },
  }

  return (
    <section className='projects' id='projects'>
      <div>
        <h1>{t('projects')}</h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          breakpoints={breakpoints}
          autoplay={true}
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className='caroulsel'>
              <img src={project.thumb} alt={project.name} />
              <h2>{project.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
