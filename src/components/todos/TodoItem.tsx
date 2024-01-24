'use client'

import { TodoType, removeTodo, updateTodo } from '@/fetcher/todos'
import { checkToggle, rmTodo } from '@/server/todos'
import { cn } from '@/utils/cn'
import { sleep } from '@/utils/sleep'
import { Button } from '@ui/button'
import { Switch } from '@ui/switch'
import { TableCell, TableRow } from '@ui/table'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()

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
          onSubmit={() => {
            setLoading(true)
          }}
          action={async () => {
            setLoading(true)
            await checkToggle(todo)
            router.refresh()
            setLoading(false)
          }}
        >
          <Switch checked={todo.done} type={'submit'} />
        </form>
      </TableCell>
      <TableCell className='text-right'>
        <form
          onSubmit={() => {
            setLoading(true)
          }}
          action={async () => {
            if (confirm('削除してよろしいですか？')) {
              setLoading(true)
              await rmTodo(todo.id)
              router.refresh()
              setLoading(false)
            } else {
              setLoading(false)
            }
          }}
        >
          <Button variant={'secondary'}>削除</Button>
        </form>
      </TableCell>
    </TableRow>
  )
}
