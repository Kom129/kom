import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(req) {
  const data = await req.formData()
  const name = data.get('name')
  const description = data.get('description')
  const price = parseInt(data.get('price'))
  const sizes = data.get('sizes')
  const file = data.get('file')
  let mediaPath = ''
  if (file && typeof file.name === 'string') {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = Date.now() + '-' + file.name
    await fs.writeFile(path.join(process.cwd(), 'public/uploads', fileName), buffer)
    mediaPath = '/uploads/' + fileName
  }
  await prisma.product.create({ data: { name, description, price, sizes, image: mediaPath } })
  return NextResponse.json({ ok: true })
}
