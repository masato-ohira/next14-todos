'use client'

import { filter } from 'lodash-es'
import { useTransition } from 'react'
import { cn } from '@/utils/cn'
import { Switch } from '@ui/switch'

import { type TodoType, checkAll } from '@/fetcher/todos'

export const TodoCheckAll = ({ todos }: { todos: TodoType[] }) => {
  const [isLoading, startTransition] = useTransition()

  const isCheckedAll = () => {
    const checkedTodos = filter(todos, (i) => i.done)
    return checkedTodos.length == todos.length
  }

  const onSubmitHandler = () => {
    startTransition(() => {
      checkAll(
        todos.map((i) => {
          return {
            ...i,
            done: !isCheckedAll(),
          }
        }),
      )
    })
  }

  return (
    <form
      className={cn(`
        hstack
        ${isLoading ? 'opacity-50 pointer-events-none' : ''}
      `)}
      action={onSubmitHandler}
    >
      <span>一括チェック</span>
      <Switch type={'submit'} checked={isCheckedAll()} />
    </form>
  )
}
