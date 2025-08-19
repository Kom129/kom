import prisma from '@/lib/prisma'
import StoryItem from '@/components/StoryItem'
import PostItem from '@/components/PostItem'
import Image from 'next/image'

export default async function Home() {
  const stories = await prisma.story.findMany({ orderBy: { createdAt: 'desc' } })
  const promotions = await prisma.promotion.findMany({ orderBy: { createdAt: 'desc' } })
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div>
      <section className="flex gap-4 overflow-x-auto mb-6">
        {stories.map(s => <StoryItem key={s.id} story={s} />)}
      </section>

      <section className="mb-6">
        {promotions.map(p => (
          <div key={p.id} className="mb-4">
            <Image src={p.media} alt={p.title} width={800} height={600} className="w-full h-auto" />
            <h2 className="text-xl font-semibold mt-2">{p.title}</h2>
          </div>
        ))}
      </section>

      <section>
        {posts.map(p => <PostItem key={p.id} post={p} />)}
      </section>
    </div>
  )
}
