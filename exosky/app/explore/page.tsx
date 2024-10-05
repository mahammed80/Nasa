'use client'

import { useState, useEffect } from 'react'
import { Input } from "./components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Search, ZoomIn, ZoomOut, RotateCw } from 'lucide-react'
import StarMap from './components/StarMap'
import StarCard from './components/StarCard'
import { Star } from './types/star'

const mockStars: Star[] = [
  { id: '1', name: 'Alpha Centauri', distance: 4.37, magnitude: 0.01, spectralType: 'G2V', ra: 219.9, dec: -60.8 },
  { id: '2', name: 'Sirius', distance: 8.6, magnitude: -1.46, spectralType: 'A1V', ra: 101.3, dec: -16.7 },
  { id: '3', name: 'Epsilon Eridani', distance: 10.5, magnitude: 3.73, spectralType: 'K2V', ra: 53.2, dec: -9.5 },
  { id: '4', name: 'Tau Ceti', distance: 11.9, magnitude: 3.50, spectralType: 'G8V', ra: 26.0, dec: -15.9 },
  { id: '5', name: 'Proxima Centauri', distance: 4.24, magnitude: 11.05, spectralType: 'M5.5Ve', ra: 217.4, dec: -62.7 },
]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStar, setSelectedStar] = useState<Star | null>(null)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const matchingStar = mockStars.find(star => 
      star.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSelectedStar(matchingStar || null)
  }, [searchTerm])

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.2, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.2, 0.5))
  }

  const handleRotate = () => {
    console.log('Rotate map')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-yellow-300">Explore the Stars</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">
          <div className="mb-4 flex items-center">
            <Input
              type="text"
              placeholder="Search stars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2"
            />
            <Button variant="secondary">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          
          <Card className="bg-slate-800 border-indigo-500">
            <CardContent className="p-4">
              <div className="flex justify-end space-x-2 mb-2">
                <Button variant="outline" size="sm" onClick={handleZoomIn}>
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleZoomOut}>
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleRotate}>
                  <RotateCw className="w-4 h-4" />
                </Button>
              </div>
              <StarMap stars={mockStars} selectedStar={selectedStar} zoom={zoom} />
            </CardContent>
          </Card>
        </div>
        
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Star Information</h2>
          {selectedStar ? (
            <StarCard star={selectedStar} />
          ) : (
            <Card className="bg-slate-800 border-indigo-500">
              <CardContent className="p-4">
                <p className="text-slate-300">Search for a star to view its details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}