import prisma from '@/lib/prisma'
import ProductCard from '@/components/ProductCard'

export default async function Catalog() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
