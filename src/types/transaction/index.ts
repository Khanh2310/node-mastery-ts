import { z } from 'zod'
import { PaginationQuery } from '../common'
import { User } from '../User'

export enum CURRENCY {
  USD = 'USD',
  VND = 'VND',
}
export type GenerateQRResponse = {
  code: string
  data: {
    qrCode: string
    qrDataURL: string
  }
  desc: string
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  PURCHASE = 'PURCHASE',
}

export type Transaction = {
  id: string;
  user_id: string
  user: User
  action_id: string | number
  transaction_type: TransactionType
  amount: string
  currency: string
  created_at: string
}

export type TransactionsResponseType = {
  data: Transaction[] | [],
  count: number
}

export const TransactionQuery =  PaginationQuery.merge(
    z.object({
      status: z.nativeEnum(TransactionType).optional(),
    })
  );
export type TransactionQueryInput = z.infer<typeof TransactionQuery>
