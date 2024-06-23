import { Token } from "../token"

export type User = {
    id: number
    email: string
    first_name: string
    phone_number: string
    last_name: string
    avatar: string
    language: string
    created_at: string
    updated_at: string
}

export type UserResponse = {user: User, token: Token}


export const userQueryKey = "user"