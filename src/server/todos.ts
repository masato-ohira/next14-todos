'use server'

import dayjs from 'dayjs'
import { TodoType, addTodo, removeTodo, updateTodo } from '@/fetcher/todos'
import { revalidatePath } from 'next/cache'
import { isString } from 'lodash-es'

export const addTodoAction = async (data: FormData) => {
  const title = data.get('title')
  if (isString(title)) {
    const res = await addTodo({
      title,
      date: dayjs().format(),
    })
    revalidatePath('/')
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
  revalidatePath('/')
}

export const rmTodo = async (id: number) => {
  await removeTodo(id)
  revalidatePath('/')
}
