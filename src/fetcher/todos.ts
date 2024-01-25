'use server'

import { dayjs } from '@/utils/dayjs'
import { supabase } from './client'
import { orderBy } from 'lodash-es'
import { revalidatePath } from 'next/cache'

export type TodoType = {
  id: number
  title: string
  date: string
  done: boolean
}

export const fetchTodos = async () => {
  try {
    const { data, error } = await supabase.from('Todos').select('*')
    const todos = data as TodoType[]
    return orderBy(todos, 'date', 'desc')
  } catch (error) {
    throw new Error('fetchTodos')
  }
}

export const fetchTodoItem = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from('Todos')
      .select('*')
      .eq('id', id)
    if (data) {
      return data[0] as TodoType
    } else {
      return null
    }
  } catch (error) {
    throw new Error('fetchTodoItem')
  }
}

export const addTodo = async (form: FormData) => {
  try {
    const title = form.get('title')
    const todo = {
      title: title || 'Untitled',
      date: dayjs().tz().format(),
    }

    const { data, error } = await supabase.from('Todos').upsert([todo]).select()
    revalidatePath('/')
  } catch (error) {
    throw new Error('addTodo')
  }
}

export const updateTodo = async (todo: Partial<TodoType>) => {
  try {
    const { data, error } = await supabase
      .from('Todos')
      .update(todo)
      .eq('id', todo.id)
      .select()

    revalidatePath('/')
  } catch (error) {
    throw new Error('updateTodo')
  }
}

export const checkAll = async (todos: Pick<TodoType, 'id' | 'done'>[]) => {
  try {
    const { data, error } = await supabase.from('Todos').upsert(todos)
    revalidatePath('/')
  } catch (error) {
    throw new Error('checkAll')
  }
}

export const removeTodo = async (id: number) => {
  try {
    const { error } = await supabase.from('Todos').delete().eq('id', id)
    revalidatePath('/')
  } catch (error) {
    throw new Error('removeTodo')
  }
}
