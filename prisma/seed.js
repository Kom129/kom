import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.product.create({
    data: {
      name: 'Leather Boots',
      description: 'Elegant leather boots by PAZOLINI',
      price: 150,
      sizes: '36,37,38,39,40',
      image: 'https://picsum.photos/seed/boots/600/600'
    }
  })
  await prisma.product.create({
    data: {
      name: 'Summer Sandals',
      description: 'Light sandals for warm days',
      price: 90,
      sizes: '36,37,38,39,40,41',
      image: 'https://picsum.photos/seed/sandals/600/600'
    }
  })

  await prisma.post.create({
    data: {
      caption: 'Новая коллекция уже в магазине!',
      media: 'https://picsum.photos/seed/post1/800/800'
    }
  })
  await prisma.post.create({
    data: {
      caption: 'Скидки до 50% на прошлый сезон',
      media: 'https://picsum.photos/seed/post2/800/800'
    }
  })

  await prisma.story.create({ data: { media: 'https://picsum.photos/seed/story1/800/800' } })
  await prisma.story.create({ data: { media: 'https://picsum.photos/seed/story2/800/800' } })

  await prisma.promotion.create({ data: { title: 'Весенняя распродажа', media: 'https://picsum.photos/seed/promo1/1000/600' } })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
