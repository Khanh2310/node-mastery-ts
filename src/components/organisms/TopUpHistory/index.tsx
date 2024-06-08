'use client'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/molecules/DataTable'
import { useQueryTransactions } from '@/components/hooks/Transactions/useQueryTransactions'
import { useState } from 'react'
import { Transaction, TransactionType } from '@/types/transaction'
import { formatMoney, stringDatetimeFormat } from '@/utils/clinet'

type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export default function TopUpHistory() {
  const [pageIndex, setPageIndex] = useState(1)
  const { transactions, isLoading } = useQueryTransactions({
    page: pageIndex,
    limit: 10,
  })

  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'transaction_type',
      header: 'Type of transaction',
      cell: ({ row }) => (
        <div
          className={`w-fit rounded-sm border px-2 py-1 text-xs font-semibold capitalize ${
            row.getValue('transaction_type') === TransactionType.PURCHASE
              ? 'border-green-600 bg-green-200 text-green-600 '
              : row.getValue('transaction_type') === TransactionType.DEPOSIT
                ? 'border-yellow-600 bg-yellow-200 text-yellow-600'
                : 'border-cyan-600 bg-cyan-200 text-cyan-600'
          }`}
        >
          {row.getValue('transaction_type')}
        </div>
      ),
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }) => {
        const payment = row.original
        return (
          <div className="capitalize">
            {formatMoney(payment.amount)} {payment.currency}
          </div>
        )
      },
    },
    {
      accessorKey: 'created_at',
      header: 'Timestamp of transaction',
      cell: ({ row }) => (
        <div className="capitalize">
          {stringDatetimeFormat(row.getValue('created_at'))}
        </div>
      ),
    },
  ]

  return (
    <div>
      <DataTable
        isLoading={isLoading}
        columns={columns}
        data={transactions?.data || []}
      />
    </div>
  )
}
