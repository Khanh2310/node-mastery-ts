'use client'
import { useQueryUser } from "@/components/hooks/User/useQueryUser"

export default function Profile() {
    const { user, error } = useQueryUser(true)
    return <>profile</>
}
