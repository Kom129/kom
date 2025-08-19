import prisma from '@/lib/prisma'
import Image from 'next/image'

export default async function ProductPage({ params }) {
  const product = await prisma.product.findUnique({ where: { id: Number(params.id) } })
  if (!product) return <div>Not found</div>
  const sizes = product.sizes.split(',')
  return (
    <div>
      <Image src={product.image} alt={product.name} width={600} height={600} className="w-full h-auto" />
      <h1 className="text-2xl font-semibold mt-4">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
      <div className="flex gap-2 mt-4">
        {sizes.map(s => (
          <span key={s} className="px-3 py-1 border rounded">{s}</span>
        ))}
      </div>
    </div>
  )
}
