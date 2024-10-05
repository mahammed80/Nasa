import { useRef, useEffect } from 'react'
import { Star } from '../types/star'

interface StarMapProps {
  stars: Star[]
  selectedStar: Star | null
  zoom: number
}

export default function StarMap({ stars, selectedStar, zoom }: StarMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const drawStar = (star: Star, isSelected: boolean) => {
      const x = (star.ra / 360) * canvas.width
      const y = ((90 - star.dec) / 180) * canvas.height
      const size = Math.max(2, (6 - star.magnitude) * zoom)

      ctx.fillStyle = getStarColor(star.spectralType)
      ctx.beginPath()
      ctx.arc(x, y, size, 0, 2 * Math.PI)
      ctx.fill()

      if (isSelected) {
        ctx.strokeStyle = '#ffff00'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x, y, size + 4, 0, 2 * Math.PI)
        ctx.stroke()
      }
    }

    ctx.fillStyle = '#0f172a'  // Dark background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    stars.forEach(star => drawStar(star, star.id === selectedStar?.id))
  }, [stars, selectedStar, zoom])

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="w-full h-auto"
    />
  )
}

function getStarColor(spectralType: string): string {
  const type = spectralType.charAt(0).toUpperCase()
  switch (type) {
    case 'O': return '#9bb0ff'  // Blue
    case 'B': return '#aabfff'  // Blue-white
    case 'A': return '#cad7ff'  // White
    case 'F': return '#f8f7ff'  // Yellow-white
    case 'G': return '#fff4ea'  // Yellow
    case 'K': return '#ffd2a1'  // Orange
    case 'M': return '#ffcc6f'  // Red
    default: return '#ffffff'   // White
  }
}