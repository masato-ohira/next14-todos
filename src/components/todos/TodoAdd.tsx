'use client'

import { useRef, useTransition } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { LuLoader2 } from 'react-icons/lu'

import { addTodo } from '@/fetcher/todos'

export const TodoAdd = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, startTransition] = useTransition()
  const onSubmitHandler = (data: FormData) => {
    startTransition(() => {
      addTodo(data)
    })
    formRef.current?.reset()
  }
  return (
    <form
      ref={formRef}
      className={cn(`
        hstack gap-4 mb-6 max-w-xl
        ${isLoading ? 'pointer-events-none opacity-50' : ''}
      `)}
      action={onSubmitHandler}
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
