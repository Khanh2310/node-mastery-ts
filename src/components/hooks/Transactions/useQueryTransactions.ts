import axiosInstance from '@/config/axiosInstance'
import { UrlApi } from '@/config/url'
import { CommonResType } from '@/schemas/commonType'
import { Transaction, TransactionQueryInput, TransactionsResponseType } from '@/types/transaction'
import useSWR from 'swr'

const getHistory = async (url: string): Promise<TransactionsResponseType> => {
  const { data } = await axiosInstance.get<CommonResType<TransactionsResponseType>>(url)
  return data.payload
}

export const useQueryTransactions = (query: TransactionQueryInput) => {
  const url = `${UrlApi.TRANSACTIONS}?page=${query.page}&limit=${query.limit}${
    query?.status ? `status=${query.status}` : ''
  }`

  const { data: transactions, isLoading } = useSWR(url, getHistory)

  return { transactions, isLoading }
}
