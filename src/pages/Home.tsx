import { Link } from 'react-router-dom'
import heartImg from '../assets/ya&tuyara&hearth.jpg'


const Home = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-44 h-screen relative '>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-2/4 rounded-full overflow-hidden bg-red-500 z-0'>
                <img src={heartImg} alt="8 марта" className='w-full h-full object-cover' />
            </div>

            <p className='text-center text-3xl font-bold relative z-1 text-blue-500 p-1 bg-gray-100 rounded-lg bg-opacity-40'>С <span className='text-red-500'>8 марта</span> тебя моя любовь!</p>
            <div className='flex gap-3 z-1 relative'>
                <Link to="/movies" className='block'>
                    <button className='max-w-[300px]'>
                        Серилы для вечернего просмотра
                    </button>
                </Link>
                <Link to="/gifts" className='block'>
                <button className='max-w-[300px]'>
                    Выбери подарок для себя
                </button>
                </Link>
                {/* <Link to="/services" className='block'>
                <button className='max-w-[300px]'>
                    Мое внимание и любовь к тебе
                </button>
                </Link> */}
            </div>
        </div>
    )
}

export default Home