import { supabase } from './client'
import { orderBy } from 'lodash-es'

export type TodoType = {
  id: number
  title: string
  date: string
  done: boolean
}

export const fetchTodosPath = '/todos/'
export const fetchTodos = async () => {
  try {
    const { data, error } = await supabase.from('Todos').select('*')
    const todos = data as TodoType[]
    return orderBy(todos, 'date', 'desc')
  } catch (error) {
    console.log({ error })
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
    console.log({ error })
  }
}

export const addTodo = async (todo: Pick<TodoType, 'title' | 'date'>) => {
  try {
    const { data, error } = await supabase.from('Todos').upsert([todo]).select()
    return data
  } catch (error) {
    return false
  }
}

export const updateTodo = async (todo: Partial<TodoType>) => {
  try {
    const { data, error } = await supabase
      .from('Todos')
      .update(todo)
      .eq('id', todo.id)
      .select()

    return data
  } catch (error) {
    return false
  }
}

export const checkAll = async (todos: Pick<TodoType, 'id' | 'done'>[]) => {
  const { data, error } = await supabase.from('Todos').upsert(todos)

  return data
}

export const removeTodo = async (id: number) => {
  try {
    const { error } = await supabase.from('Todos').delete().eq('id', id)

    return true
  } catch (error) {
    return false
  }
}
