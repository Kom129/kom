import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="block border p-4">
      <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-auto" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm">${product.price}</p>
    </Link>
  )
}
