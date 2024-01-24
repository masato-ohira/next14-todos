'use client'

import { map } from 'lodash-es'
import { TodoType } from '@/fetcher/todos'
import { TodoItem } from './TodoItem'
import { Table, TableBody } from '@ui/table'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { onSubmit } from '@/actions/submit'
import { useRouter } from 'next/navigation'

export const TodoList = ({ todos }: { todos: TodoType[] }) => {
  const router = useRouter()
  return (
    <form
      action={async (FormData) => {
        await onSubmit(FormData)
        router.refresh()
      }}
    >
      <div className={`container py-10 max-w-4xl`}>
        <div className='hstack gap-4 mb-6 max-w-xl'>
          <Input name={'add'} className={'flex-1'} />
          <Button type='submit'>新規作成</Button>
        </div>
        <Table>
          <colgroup>
            <col width={'10%'} />
            <col width={'20%'} />
            <col />
            <col width={'5%'} />
            <col width={'5%'} />
          </colgroup>
          <TableBody>
            {map(todos, (i) => {
              return <TodoItem key={i.id} todo={i} />
            })}
          </TableBody>
        </Table>
      </div>
    </form>
  )
}
