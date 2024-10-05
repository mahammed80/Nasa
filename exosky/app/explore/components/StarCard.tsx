import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Star } from '../types/star'

interface StarCardProps {
  star: Star
}

export default function StarCard({ star }: StarCardProps) {
  return (
    <Card className="bg-slate-800 border-indigo-500">
      <CardHeader>
        <CardTitle className="text-yellow-300">{star.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-slate-300">
          <li><strong>Distance:</strong> {star.distance.toFixed(2)} light years</li>
          <li><strong>Magnitude:</strong> {star.magnitude.toFixed(2)}</li>
          <li><strong>Spectral Type:</strong> {star.spectralType}</li>
          <li><strong>Right Ascension:</strong> {star.ra.toFixed(2)}°</li>
          <li><strong>Declination:</strong> {star.dec.toFixed(2)}°</li>
        </ul>
      </CardContent>
    </Card>
  )
}