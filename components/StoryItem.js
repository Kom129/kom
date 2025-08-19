import Image from 'next/image'

export default function StoryItem({ story }) {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden border">
      <Image src={story.media} alt="story" width={96} height={96} className="object-cover w-full h-full" />
    </div>
  )
}
