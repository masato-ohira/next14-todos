'use client'

import { addTodoAction } from '@/server/todos'
import { Button } from '@ui/button'
import { Input } from '@ui/input'

export const TodoAdd = () => {
  return (
    <form
      className='hstack gap-4 mb-6 max-w-xl'
      action={async (data) => {
        await addTodoAction(data)
        location.reload()
      }}
    >
      <Input name={'title'} className={'flex-1'} />
      <Button type='submit'>新規作成</Button>
    </form>
  )
}
