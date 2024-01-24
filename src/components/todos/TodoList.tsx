'use client'

import { map } from 'lodash-es'
import { TodoType } from '@/fetcher/todos'
import { TodoItem } from './TodoItem'
import { Table, TableBody } from '@ui/table'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { useRouter } from 'next/navigation'
import { TodoAdd } from './TodoAdd'

export const TodoList = ({ todos }: { todos: TodoType[] }) => {
  const router = useRouter()
  return (
    <div className={`container py-10 max-w-4xl`}>
      <TodoAdd />
      <Table>
        <colgroup>
          <col width={'10%'} />
          <col width={'20%'} />
          <col />
          <col width={'5%'} />
          <col width={'5%'} />
        </colgroup>
        <TableBody>
          {map(todos, (i) => {
            return <TodoItem key={i.id} todo={i} />
          })}
        </TableBody>
      </Table>
    </div>
  )
}