import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Card } from '../../components/Card'
import { projects } from './projects'
import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'

export const Projects = () => {
  const { t } = useTranslation()

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }

  return (
    <section className='projects' id='projects'>
      <div>
        <h1>{t('projects')}</h1>
        <Swiper
          breakpoints={breakpoints}
          centeredSlides={true}
          autoplay={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper'
        >
          {projects.map((project: any, i: any) => (
            <SwiperSlide key={i}>
              <Card
                title={project.title}
                tec={project.tec}
                link={project.link}
                thumb={project.thumb}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
