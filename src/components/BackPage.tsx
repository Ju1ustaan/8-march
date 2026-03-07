
const BackPage = () => {
  return (
    <button className='border-none bg-transparent text-white text-lg font-bold cursor-pointer' onClick={() => window.history.back()}>
        Назад
    </button>
  )
}

export default BackPage