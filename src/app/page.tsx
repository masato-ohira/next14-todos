import { onSubmit } from '@/actions/submit'
import { fetchTodos } from '@/fetcher/todos'
import { MyLoader } from '@c/loader/MyLoader'
import { TodoList } from '@c/views/TodoList'
import { useRouter } from 'next/navigation'

export const revalidate = 0

const Page = async () => {
  const data = await fetchTodos()
  if (!data) return <MyLoader />
  return <TodoList todos={data} />
}

export default Page
