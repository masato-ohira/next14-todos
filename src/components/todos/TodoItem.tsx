'use client'

import { TodoType, removeTodo, updateTodo } from '@/fetcher/todos'
import { checkToggle, rmTodo } from '@/server/todos'
import { Button } from '@ui/button'
import { Switch } from '@ui/switch'
import { TableCell, TableRow } from '@ui/table'
import dayjs from 'dayjs'

const TodoRemove = ({ size, id }: { size?: any; id: number }) => {
  return (
    <Button
      variant={'destructive'}
      size={size}
      onClick={async () => {
        if (confirm('削除してよろしいですか？')) {
          await removeTodo(id)
          location.href = '/'
        }
      }}
    >
      削除
    </Button>
  )
}

export const TodoItem = ({
  todo,
  variant,
  className,
}: {
  todo: TodoType
  variant?: 'default' | 'detail'
  className?: string
}) => {
  return (
    <TableRow>
      <TableCell>{todo.id}</TableCell>
      <TableCell>{dayjs(todo.date).format('MM/DD HH:mm:ss')}</TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell className={'align-middle'}>
        <form
          action={async () => {
            await checkToggle(todo)
            location.reload()
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
              location.reload()
            }
          }}
        >
          <Button variant={'secondary'}>削除</Button>
        </form>
      </TableCell>
    </TableRow>
  )
}
