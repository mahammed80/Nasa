export interface Star {
    id: string
    name: string
    distance: number  // in light years
    magnitude: number
    spectralType: string
    ra: number  // Right Ascension in degrees
    dec: number  // Declination in degrees
  }