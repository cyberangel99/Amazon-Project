import products from '../../db/products.json'
// Next.js api

export default function handler(req, res) {
  res.status(200).json({ products })
}
