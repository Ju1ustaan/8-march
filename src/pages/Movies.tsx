import BackPage from "../components/BackPage"
import { RosePetals } from "../components/RosePetals"

const movies = [
    { id: 1, title: "Рыцарь семи королевств", img: 'https://avatars.mds.yandex.net/get-mpic/16857451/2a0000019b78b27cf9b67a47f3da906b09b9/orig', path: 'https://fbfree.cfd/series/5281617/?utm_referrer=www.google.com' },
    { id: 2, title: "Исчезнувший", img: 'https://kinogo.media/uploads/posts/2026-02/4326090032178.jpg', path: 'https://fbfree.cfd/series/8795867/' },
    { id: 3, title: "Повелитель мух", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX97R_fFG4VH55XyvA4phdrsMImHz9QWx3A&s', path: 'https://fbfree.cfd/series/829679/' },
    { id: 4, title: "Как попасть на рай из Белфаста", img: 'https://kinogo.online/uploads/posts/2026-02/1770945662-0e539220c8_poster_200x300.jpg', path: 'https://fbfree.cfd/series/9808937/' },
    { id: 5, title: "Цветок смерти", img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/ad227507-6977-405a-b1af-1c77cdd572c3/600x900', path: 'https://fbfree.cfd/series/10855016/' },
]
const Movies = () => {
  return (
    <div>
      <RosePetals className="fixed inset-0 w-full h-full z-50 overflow-hidden" />
      <BackPage />

      <div className="flex w-full h-screen">
  {movies.map(movie => (
    <a
      key={movie.id}
      href={movie.path}
      target="_blank"
      rel="noopener noreferrer"
      className="w-1/5 h-full overflow-hidden group"
    >
      <img
        src={movie.img}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </a>
  ))}
</div>
    </div>
  )
}

export default Movies