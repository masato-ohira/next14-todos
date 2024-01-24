import { fetchTodos } from '@/fetcher/todos'
import { MyLoader } from '@c/loader/MyLoader'
import { TodoList } from '@c/todos/TodoList'

export const revalidate = 0

export default async function Home() {
  const data = await fetchTodos()
  if (!data) return <MyLoader />
  return <TodoList todos={data} />
}
