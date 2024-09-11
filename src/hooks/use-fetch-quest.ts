import { QUERY_KEYS } from '@/lib/constants/query-key'
import { getQuests } from '@/services/quest'
import useQuest from '@/store/quest.store'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useFetchQuests = () => {
  const setQuests = useQuest((state) => state.setQuests)
  const { data, refetch, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.QUEST.ALL],
    queryFn: getQuests
  })

  useEffect(() => {
    if (data) {
      setQuests(data)
    }
  }, [data])

  return {
    data,
    isLoading,
    refetch
  }
}
