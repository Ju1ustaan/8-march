import BackPage from "../components/BackPage"
import Photo1 from '../assets/IMG_9965.jpg'
const Services = () => {
  return (
    <div>
      <BackPage />
      <div className='w-full'>
        <img src={Photo1} alt="Photo 1" />
      </div>
    </div>
  )
}

export default Services