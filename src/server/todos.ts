'use server'

import { TodoType, addTodo, removeTodo, updateTodo } from '@/fetcher/todos'
import dayjs from 'dayjs'
import { isString } from 'lodash-es'

export const addTodoAction = async (data: FormData) => {
  const title = data.get('title')
  if (isString(title)) {
    const res = await addTodo({
      title,
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    })
    return res
  } else {
    return null
  }
}

export const checkToggle = async (todo: TodoType) => {
  await updateTodo({
    ...todo,
    done: !todo.done,
  })
}

export const rmTodo = async (id: number) => {
  await removeTodo(id)
}
