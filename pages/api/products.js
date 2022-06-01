import products from '../../db/products.json'

export default function handler(req, res) {
  res.status(200).json({ products })
}
