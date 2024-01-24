'use client'

import { addTodoAction } from '@/server/todos'
import { cn } from '@/utils/cn'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { useRef, useState } from 'react'

export const TodoAdd = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [text, setText] = useState('')
  return (
    <form
      ref={formRef}
      className={cn(`
        hstack gap-4 mb-6 max-w-xl
      `)}
      onSubmit={() => {
        setText('')
      }}
      action={async (data) => {
        await addTodoAction(data)
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
