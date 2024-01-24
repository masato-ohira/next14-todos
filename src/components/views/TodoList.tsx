'use client'

import { map } from 'lodash-es'
import { TodoType } from '@/fetcher/todos'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos }: { todos: TodoType[] }) => {
  return (
    <div className={`container py-10`}>
      <div className='grid grid-cols-3 gap-10'>
        {map(todos, (i) => {
          return <TodoItem key={i.id} todo={i} />
        })}
      </div>
    </div>
  )
}
