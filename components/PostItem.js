import Image from 'next/image'

export default function PostItem({ post }) {
  return (
    <div className="mb-4 border rounded">
      <Image src={post.media} alt={post.caption || 'post'} width={800} height={800} className="w-full h-auto" />
      {post.caption && <p className="p-2">{post.caption}</p>}
    </div>
  )
}
