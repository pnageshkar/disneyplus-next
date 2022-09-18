import { movieList } from "./datMovieList"

export default function handler(req, res) {
    res.status(200).json(movieList)
  }