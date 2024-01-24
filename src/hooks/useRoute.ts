import { usePathname, useSearchParams } from 'next/navigation'

// hooks
// ------------------------------
export const useRoute = () => {
  const pathname = usePathname()
  const query = {
    id: useSearchParams().get('id'),
  }

  return {
    pathname,
    query,
  }
}
