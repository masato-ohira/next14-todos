import { supabase } from './client'

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
    return data as TodoType[]
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
