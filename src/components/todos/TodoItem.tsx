'use client'

import { TodoType, removeTodo, updateTodo } from '@/fetcher/todos'
import { cn } from '@/utils/cn'
import { Button } from '@ui/button'
import { Switch } from '@ui/switch'
import { TableCell, TableRow } from '@ui/table'
import dayjs from 'dayjs'
import { useTransition } from 'react'

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
        <form
          action={() => {
            startTransition(() => {
              updateTodo({
                ...todo,
                done: !todo.done,
              })
            })
          }}
        >
          <Switch checked={todo.done} type={'submit'} />
        </form>
      </TableCell>
      <TableCell className='text-right'>
        <form
          action={() => {
            if (confirm('削除してよろしいですか？')) {
              startTransition(() => {
                removeTodo(todo.id)
              })
            }
          }}
        >
          <Button variant={'secondary'}>削除</Button>
        </form>
      </TableCell>
    </TableRow>
  )
}
