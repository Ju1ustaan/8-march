import { useEffect, useRef, useMemo } from 'react'

interface Petal {
  id: number
  x: number           // начальная позиция по X (%)
  delay: number       // задержка анимации (s)
  duration: number    // длительность падения (s)
  size: number        // размер лепестка (px)
  rotation: number    // начальный угол
  swayAmount: number  // амплитуда покачивания (px)
  opacity: number     // прозрачность
  colorVariant: number // вариант цвета 0-3
}

interface RosePetalsProps {
  count?: number        // кол-во лепестков (default: 20)
  colors?: string[]     // массив цветов лепестков
  minSize?: number      // мин размер px (default: 14)
  maxSize?: number      // макс размер px (default: 28)
  minDuration?: number  // мин время падения в сек (default: 5)
  maxDuration?: number  // макс время падения в сек (default: 10)
  className?: string    // класс обёртки
}

const DEFAULT_COLORS = [
  '#e8637a',  // тёмно-розовый
  '#f28b9b',  // средний розовый
  '#f5a7b3',  // светло-розовый
  '#fbc4cc',  // нежно-розовый
]

function PetalSVG({ color, size, rotation }: { color: string; size: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      style={{ transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Лепесток — органичная форма через кубические кривые */}
      <path
        d="M20 44 C6 36, 0 24, 4 12 C7 3, 14 0, 20 2 C26 0, 33 3, 36 12 C40 24, 34 36, 20 44Z"
        fill={color}
        opacity="0.92"
      />
      {/* Прожилка */}
      <path
        d="M20 44 C20 30, 20 16, 20 2"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Боковые прожилки */}
      <path
        d="M20 28 C15 24, 8 22, 4 18"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M20 28 C25 24, 32 22, 36 18"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Блик */}
      <ellipse
        cx="15"
        cy="14"
        rx="4"
        ry="6"
        fill="rgba(255,255,255,0.18)"
        transform="rotate(-15, 15, 14)"
      />
    </svg>
  )
}

export function RosePetals({
  count = 20,
  colors = DEFAULT_COLORS,
  minSize = 50,
  maxSize = 80,
  minDuration = 5,
  maxDuration = 10,
  className = '',
}: RosePetalsProps) {
  const styleRef = useRef<HTMLStyleElement | null>(null)

  const petals: Petal[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: minDuration + Math.random() * (maxDuration - minDuration),
      size: minSize + Math.random() * (maxSize - minSize),
      rotation: Math.random() * 360,
      swayAmount: 30 + Math.random() * 60,
      opacity: 0.6 + Math.random() * 0.4,
      colorVariant: Math.floor(Math.random() * colors.length),
    }))
  }, [count, minSize, maxSize, minDuration, maxDuration, colors.length])

  useEffect(() => {
    // Инжектим CSS анимации динамически
    const style = document.createElement('style')
    style.textContent = petals.map(p => `
      @keyframes petal-fall-${p.id} {
        0% {
          transform: translateY(-60px) translateX(0px) rotate(${p.rotation}deg) scale(1);
          opacity: 0;
        }
        5% {
          opacity: ${p.opacity};
        }
        25% {
          transform: translateY(25vh) translateX(${p.swayAmount}px) rotate(${p.rotation + 80}deg) scale(0.97);
        }
        50% {
          transform: translateY(50vh) translateX(${-p.swayAmount * 0.6}px) rotate(${p.rotation + 190}deg) scale(0.94);
        }
        75% {
          transform: translateY(75vh) translateX(${p.swayAmount * 0.8}px) rotate(${p.rotation + 290}deg) scale(0.91);
          opacity: ${p.opacity};
        }
        95% {
          opacity: 0;
        }
        100% {
          transform: translateY(105vh) translateX(${-p.swayAmount * 0.3}px) rotate(${p.rotation + 360}deg) scale(0.88);
          opacity: 0;
        }
      }
    `).join('\n')

    document.head.appendChild(style)
    styleRef.current = style

    return () => {
      document.head.removeChild(style)
    }
  }, [petals])

  return (
    <div
      className={`pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map(petal => (
        <div
          key={petal.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${petal.x}%`,
            animation: `petal-fall-${petal.id} ${petal.duration}s ${petal.delay}s ease-in infinite`,
            willChange: 'transform, opacity',
          }}
        >
          <PetalSVG
            color={colors[petal.colorVariant]}
            size={petal.size}
            rotation={0}
          />
        </div>
      ))}
    </div>
  )
}
