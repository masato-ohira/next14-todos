'use client'

import { TodoType } from '@/fetcher/todos'
import { checkToggle, rmTodo } from '@/server/todos'
import { cn } from '@/utils/cn'
import { Button } from '@ui/button'
import { Switch } from '@ui/switch'
import { TableCell, TableRow } from '@ui/table'
import dayjs from 'dayjs'
import { useState } from 'react'

export const TodoItem = ({
  todo,
  variant,
  className,
}: {
  todo: TodoType
  variant?: 'default' | 'detail'
  className?: string
}) => {
  const [loading, setLoading] = useState(false)

  return (
    <TableRow
      className={cn(`
      ${loading ? 'pointer-events-none opacity-50' : ''}
    `)}
    >
      <TableCell>{todo.id}</TableCell>
      <TableCell>{dayjs(todo.date).format('MM/DD HH:mm:ss')}</TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell className={'align-middle'}>
        <form
          action={async () => {
            await checkToggle(todo)
          }}
        >
          <Switch checked={todo.done} type={'submit'} />
        </form>
      </TableCell>
      <TableCell className='text-right'>
        <form
          action={async () => {
            if (confirm('削除してよろしいですか？')) {
              await rmTodo(todo.id)
            }
          }}
        >
          <Button variant={'secondary'}>削除</Button>
        </form>
      </TableCell>
    </TableRow>
  )
}
