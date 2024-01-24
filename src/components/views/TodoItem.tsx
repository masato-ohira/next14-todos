'use client'

import { TodoType } from '@/fetcher/todos'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export const TodoItem = ({
  todo,
  className,
}: {
  todo: TodoType
  className?: string
}) => {
  return (
    <Link href={`/todos/${todo.id}/`}>
      <div
        className={cn(`
        shadow-md
        p-8
        ${className}} '}
      `)}
      >
        <p>{todo.date}</p>
        <p
          className={`
          text-lg
          font-semibold
        `}
        >
          {todo.title}
        </p>
      </div>
    </Link>
  )
}
