import { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(articles)
}
