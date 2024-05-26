import { Token } from "../token"

export type User = {
    id: number
    email: string
    firstName: string
    lastName: string
    avatar: string
    language: string
    created_at: string
    updated_at: string
}

export type UserResponse = {user: User, token: Token}


export const userQueryKey = "user"