'use client'

import { addTodoAction } from '@/server/todos'
import { cn } from '@/utils/cn'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const TodoAdd = () => {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  return (
    <form
      className={cn(`
        hstack gap-4 mb-6 max-w-xl
        ${loading ? 'pointer-events-none opacity-70' : ''}
      `)}
      action={async (data) => {
        setLoading(true)
        await addTodoAction(data)
        setText('')
        setLoading(false)
        router.refresh()
      }}
    >
      <Input
        name={'title'}
        className={'flex-1'}
        onChange={(e) => {
          setText(e.target.value)
        }}
        value={text}
      />
      <Button type='submit'>新規作成</Button>
    </form>
  )
}
