import { fetchTodoItem } from '@/fetcher/todos'

const TodoPage = async ({ params }: { params: { id: number } }) => {
  const data = await fetchTodoItem(params.id)
  return (
    <div
      className={`
        container
        py-10
    `}
    >
      <div
        className={`
        shadow-md
        p-20
        space-y-4

      `}
      >
        <p>ID = {data?.id}</p>
        <p>{data?.date}</p>
        <p className={`text-4xl`}>{data?.title}</p>
      </div>
    </div>
  )
}

export default TodoPage
