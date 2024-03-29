'use client'

import { cn } from '@/utils/cn'
import dayjs from 'dayjs'
import { useTransition } from 'react'
import { Button } from '@ui/button'
import { Switch } from '@ui/switch'
import { TableCell, TableRow } from '@ui/table'

import { type TodoType, removeTodo, updateTodo } from '@/fetcher/todos'

export const TodoItem = ({
  todo,
  variant,
  className,
}: {
  todo: TodoType
  variant?: 'default' | 'detail'
  className?: string
}) => {
  const [isLoading, startTransition] = useTransition()

  const checkAction = () => {
    startTransition(() => {
      updateTodo({
        ...todo,
        done: !todo.done,
      })
    })
  }

  const deleteAction = () => {
    if (confirm('削除してよろしいですか？')) {
      startTransition(() => {
        removeTodo(todo.id)
      })
    }
  }

  return (
    <TableRow
      className={cn(`
      ${isLoading ? 'pointer-events-none opacity-50' : ''}
    `)}
    >
      <TableCell>{todo.id}</TableCell>
      <TableCell>{dayjs(todo.date).format('MM/DD HH:mm:ss')}</TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell className={'align-middle'}>
        <form action={checkAction}>
          <Switch checked={todo.done} type={'submit'} />
        </form>
      </TableCell>
      <TableCell className='text-right'>
        <form action={deleteAction}>
          <Button variant={'secondary'} type={'submit'}>
            削除
          </Button>
        </form>
      </TableCell>
    </TableRow>
  )
}
