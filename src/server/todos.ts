'use server'

import dayjs from 'dayjs'
import {
  TodoType,
  addTodo,
  checkAll,
  removeTodo,
  updateTodo,
} from '@/fetcher/todos'
import { revalidatePath } from 'next/cache'
import { isString } from 'lodash-es'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')

export const addTodoAction = async (data: FormData) => {
  const title = data.get('title')
  if (isString(title)) {
    const res = await addTodo({
      title,
      date: dayjs().tz().format(),
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

export const checkAllAction = async (todos: TodoType[]) => {
  await checkAll(todos)
  revalidatePath('/')
}
