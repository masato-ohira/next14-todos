'use client'

import { TodoType } from '@/fetcher/todos'
import { filter } from 'lodash-es'
import { Switch } from '@ui/switch'
import { useTransition } from 'react'
import { checkAllAction } from '@/server/todos'
import { cn } from '@/utils/cn'

export const TodoCheckAll = ({ todos }: { todos: TodoType[] }) => {
  const [isLoading, startTransition] = useTransition()

  const isChecked = () => {
    const checkedTodos = filter(todos, (i) => i.done)
    return checkedTodos.length == todos.length
  }

  return (
    <form
      className={cn(`
        hstack
        ${isLoading ? 'opacity-50 pointer-events-none' : ''}
      `)}
      action={() => {
        startTransition(() => {
          checkAllAction(
            todos.map((i) => {
              return {
                ...i,
                done: !isChecked(),
              }
            }),
          )
        })
      }}
    >
      <span>一括チェック</span>
      <Switch type={'submit'} checked={isChecked()} />
    </form>
  )
}
