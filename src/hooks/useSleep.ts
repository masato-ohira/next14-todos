import { sleep } from '@/utils/sleep'
import useSWR from 'swr'

export const useSleep = (ms: number) => {
  const fetchers = async () => {
    await sleep(ms || 500)
    return ''
  }
  const { data, isLoading } = useSWR('/speep/', fetchers)
  return { data, isLoading }
}
