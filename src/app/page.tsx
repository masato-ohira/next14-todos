import { fetchTodos } from '@/fetcher/todos'
import { MyLoader } from '@c/loader/MyLoader'
import { TodoList } from '@c/views/TodoList'

const Page = async () => {
  const data = await fetchTodos()
  if (!data) return <MyLoader />
  return <TodoList todos={data} />
  return <></>
}

export default Page
