import { Address, TonClient } from '@ton/ton'
import { useTonAddress } from '@tonconnect/ui-react'
import { useCallback, useEffect, useState } from 'react'

import { appConfigs } from '@/config/app-config'

export const useTonBalance = () => {
  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const address = useTonAddress()

  const fetchBalance = useCallback(async () => {
    if (!address) {
      setBalance(0)
      setError(null)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const client = new TonClient({
        endpoint: appConfigs.tonApiUrl
      })

      const tonAddress = Address.parse(address)
      const accountInfo = await client.getBalance(tonAddress)

      const balanceInTon = Number(accountInfo) / 1e9
      setBalance(balanceInTon)
    } catch (err) {
      console.error('Error fetching balance:', err)
      setError('Failed to fetch balance')
    } finally {
      setLoading(false)
    }
  }, [address])

  useEffect(() => {
    fetchBalance()
  }, [fetchBalance])

  return { balance, loading, error, refetch: fetchBalance }
}
