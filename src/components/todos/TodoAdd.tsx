'use client'

import { addTodo } from '@/fetcher/todos'
import { cn } from '@/utils/cn'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { useRef, useTransition } from 'react'
import { LuLoader2 } from 'react-icons/lu'

export const TodoAdd = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, startTransition] = useTransition()
  return (
    <form
      ref={formRef}
      className={cn(`
        hstack gap-4 mb-6 max-w-xl
        ${isLoading ? 'pointer-events-none opacity-50' : ''}
      `)}
      action={(data) => {
        startTransition(() => {
          addTodo(data)
        })
        formRef.current?.reset()
      }}
    >
      <Input
        placeholder='Todoタイトルを入力'
        name={'title'}
        className={`
          w-96
          !placeholder-black/30
        `}
      />
      <Button type='submit' className={`w-36`}>
        {isLoading ? (
          <LuLoader2 className={'animate-spin'} />
        ) : (
          <span>新規作成</span>
        )}
      </Button>
    </form>
  )
}
