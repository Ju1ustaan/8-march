import BackPage from "../components/BackPage"
import { RosePetals } from "../components/RosePetals"
import Bibi from '../assets/Биби-2.jpg'

const presents = [
    {id: 3, title: 'Грумер', img: Bibi, desc: 'Подарок для Биби, чтобы она была самой красивой и ухоженной!'},
    {id: 4, title: 'Сертификат', img: 'https://play-lh.googleusercontent.com/XPRGdoE4SU2uK_L-vdR6Ab6_X4-6Vr4TFLDniHjX1tWlVe795uxV1MiJRFXZ0aTv9wMIiCHUKi4lnNOX74mwhxk', desc: 'Сертификат на магазин Kaspi в сумме 20 000 тенге'},
    {id: 7, title: 'Сюрприз', img: 'https://print-xp.ru/content/images/xpress/produkciya/pechat-korobok/izgotovlenie-podarochnyx-korobok.png', desc: 'Сюрприз для тебя, чтобы ты получила удовольствие от неожиданного подарка!'},
]
const Presents = () => {
  return (
    <div className="">
      <RosePetals className="fixed inset-0 w-full h-full z-50 overflow-hidden" />
      <BackPage />
      <div className="flex w-full h-screen gap-10 items-center justify-center">
        {
            presents.map(present => (
                <div className="w-32 aspect-square rounded-full overflow-hidden bg-red-300 group">
                    <div className='absolute -top-10 left-1/2 duration-300 transform -translate-y-1/2 -translate-x-1/2 p- group-hover:translate-y-full'>
                       <div className='bg-white px-2 py-1 rounded shadow'>
                         <p className="text-xl font-bold text-center text-black">{present.title}</p>
                        <p className="text-xl font-bold text-center text-black">{present.desc}</p>
                       </div>
                    </div>
                    <img src={present.img} alt={present.title}  className="w-full h-full object-cover"/>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Presents