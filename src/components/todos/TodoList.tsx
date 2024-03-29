'use client'

import { map } from 'lodash-es'
import { Table, TableBody } from '@ui/table'

import { TodoItem } from './TodoItem'
import { TodoAdd } from './TodoAdd'
import { TodoCheckAll } from './TodoCheckAll'

import type { TodoType } from '@/fetcher/todos'

export const TodoList = ({ todos }: { todos: TodoType[] }) => {
  return (
    <div className={`container py-10 max-w-4xl`}>
      <div className='hstack justify-between'>
        <TodoAdd />
        <TodoCheckAll todos={todos} />
      </div>
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
