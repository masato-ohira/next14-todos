import { fetchTodoItem } from '@/fetcher/todos'
import { MyLoader } from '@c/loader/MyLoader'
import { TodoItem } from '@c/views/TodoItem'
export const revalidate = 0

const TodoPage = async ({ params }: { params: { id: number } }) => {
  const data = await fetchTodoItem(params.id)
  if (!data) return <MyLoader />
  return (
    <div className={'container py-10'}>
      <TodoItem
        todo={data}
        variant='detail'
        className={`
        p-20

      `}
      />
    </div>
  )
}

export default TodoPage
