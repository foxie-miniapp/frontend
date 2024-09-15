import { internal, toNano, TonClient, WalletContractV4 } from '@ton/ton'
import { useTonWallet } from '@tonconnect/ui-react'
import { useCallback, useState } from 'react'

import { appConfigs } from '@/config/app-config'

export const useTonTransaction = () => {
  const wallet = useTonWallet()
  const [loading, setLoading] = useState(false)
  const [txHash, setTxHash] = useState('')
  const [error, setError] = useState('')

  const sendTransaction = useCallback(
    async (recipientAddress: string, amount: number) => {
      if (!wallet) {
        setError('Wallet not connected')
        return null
      }

      setLoading(true)
      setError('')
      setTxHash('')

      try {
        const client = new TonClient({
          endpoint: appConfigs.tonApiUrl
        })

        const walletContract = WalletContractV4.create({
          publicKey: wallet.account.publicKey
            ? Buffer.from(wallet.account.publicKey, 'hex')
            : Buffer.alloc(0),
          workchain: 0
        })

        const transfer = internal({
          to: recipientAddress,
          value: toNano(amount),
          bounce: false
        })

        await client.sendExternalMessage(walletContract, transfer.body)

        let attempts = 0
        const maxAttempts = 10
        while (attempts < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 1500)) // Wait for 1.5 seconds

          const transactions = await client.getTransactions(
            walletContract.address,
            { limit: 1 }
          )
          if (
            transactions.length > 0 &&
            transactions[0].inMessage?.info.src === walletContract.address
          ) {
            setTxHash(transactions[0].hash.toString())
            return transactions[0].hash.toString()
          }

          attempts++
        }

        throw new Error('Transaction not found after multiple attempts')
      } catch (err) {
        console.error('Error sending transaction:', err)
        setError('Failed to send transaction. Please try again.')
        return null
      } finally {
        setLoading(false)
      }
    },
    [wallet]
  )

  return {
    sendTransaction,
    loading,
    txHash,
    error
  }
}
