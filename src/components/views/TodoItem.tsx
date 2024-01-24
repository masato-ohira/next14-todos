'use client'

import { TodoType, removeTodo, updateTodo } from '@/fetcher/todos'
import { cn } from '@/utils/cn'
import { sleep } from '@/utils/sleep'
import { Button } from '@ui/button'
import { Switch } from '@ui/switch'
import { TableCell, TableRow } from '@ui/table'
import Link from 'next/link'
import { useEffect, useState } from 'react'
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
    <>
      <TableRow>
        <TableCell>{todo.id}</TableCell>
        <TableCell>{dayjs(todo.date).format('MM/DD HH:mm:ss')}</TableCell>
        <TableCell>{todo.title}</TableCell>
        <TableCell className={'align-middle'}>
          <Switch
            checked={todo.done}
            onClick={async () => {
              await updateTodo({
                ...todo,
                done: !todo.done,
              })
              location.reload()
            }}
          />
        </TableCell>
        <TableCell className='text-right'>
          <Button variant={'secondary'}>削除</Button>
        </TableCell>
      </TableRow>
      {/* <div
        className={cn(`
        shadow-md
        p-8
        transition-colors
        duration-300
        group-hover:bg-black/5
        ${className}} '}
      `)}
      >
        <div
          className={cn(`
        hstack
        justify-between
        ${variant == 'detail' ? 'justify-start gap-8' : ''}
      `)}
        >
          <p>{todo.date}</p>
          <div className='hstack gap-6'>
            <Switch
              checked={todo.done}
              onClick={async () => {
                await updateTodo({
                  ...todo,
                  done: !todo.done,
                })
                location.reload()
              }}
            />
          </div>
        </div>
        <p
          className={cn(`
          text-lg
          font-semibold
          ${variant == 'detail' ? 'text-4xl mt-4' : ''}
        `)}
        >
          {todo.title}
        </p>
        {variant == 'detail' ? (
          <div className='hstack mt-10 gap-10'>
            <Link href={'/'} className={'block'}>
              <Button variant={'secondary'}>一覧に戻る</Button>
            </Link>
            <TodoRemove id={todo.id} />
          </div>
        ) : (
          <div className='hstack justify-end gap-6 mt-6'>
            <Link href={`/todos/${todo.id}/`}>
              <Button>詳細へ</Button>
            </Link>
            <TodoRemove id={todo.id} />
          </div>
        )}
      </div> */}
    </>
  )
}
