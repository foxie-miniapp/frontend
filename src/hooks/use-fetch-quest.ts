import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { QUERY_KEYS } from '@/lib/constants/query-key'
import { getQuests } from '@/services/quest'
import useQuest from '@/store/quest.store'

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
  }, [data, setQuests])

  return {
    data,
    isLoading,
    refetch
  }
}
