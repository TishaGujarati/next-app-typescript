import { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query: { id } } = req

  const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}
