'use client'
import { useState } from 'react'

export default function Admin() {
  const [message, setMessage] = useState('')

  async function handleSubmit(e, endpoint) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const res = await fetch(endpoint, { method: 'POST', body: data })
    if (res.ok) {
      setMessage('Сохранено')
      form.reset()
    } else {
      setMessage('Ошибка')
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={e => handleSubmit(e, '/api/stories')} className="space-y-2">
        <h2 className="text-xl font-semibold">Добавить сторис</h2>
        <input type="file" name="file" required />
        <button className="px-4 py-2 bg-black text-white" type="submit">Загрузить</button>
      </form>

      <form onSubmit={e => handleSubmit(e, '/api/promotions')} className="space-y-2">
        <h2 className="text-xl font-semibold">Новая акция</h2>
        <input type="text" name="title" placeholder="Заголовок" className="border p-2 w-full" required />
        <input type="file" name="file" required />
        <button className="px-4 py-2 bg-black text-white" type="submit">Опубликовать</button>
      </form>

      <form onSubmit={e => handleSubmit(e, '/api/posts')} className="space-y-2">
        <h2 className="text-xl font-semibold">Новый пост</h2>
        <input type="text" name="caption" placeholder="Текст" className="border p-2 w-full" />
        <input type="file" name="file" required />
        <button className="px-4 py-2 bg-black text-white" type="submit">Опубликовать</button>
      </form>

      <form onSubmit={e => handleSubmit(e, '/api/products')} className="space-y-2">
        <h2 className="text-xl font-semibold">Новый товар</h2>
        <input type="text" name="name" placeholder="Название" className="border p-2 w-full" required />
        <textarea name="description" placeholder="Описание" className="border p-2 w-full" required></textarea>
        <input type="number" name="price" placeholder="Цена" className="border p-2 w-full" required />
        <input type="text" name="sizes" placeholder="Размеры через запятую" className="border p-2 w-full" required />
        <input type="file" name="file" required />
        <button className="px-4 py-2 bg-black text-white" type="submit">Создать</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  )
}
