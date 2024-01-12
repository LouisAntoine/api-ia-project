export interface Recipe {
  id: number,
  title: string,
  ingredients?: string[],
  steps?: string[],
  time?: number,
  description?: string,
  image?: string,
  ratings?: Ratings[],
}

export interface Ratings {
  rating: number,
  comment: string,
}