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

export const userQueryKey = "user"