import { useEffect, useState } from 'react'

const getStartOfToday = (): Date => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0) // 00:00:00 ngày hiện tại
}

export const UserCounter: React.FC = () => {
  const calculateUserCount = () => {
    const currentDate = new Date()
    const startDate = getStartOfToday() // Mốc tính là đầu ngày hôm nay
    const elapsedDays = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24), // Tính số ngày đã trôi qua từ mốc
    )
    return 1056 + elapsedDays * 10 // Tăng 10 người mỗi ngày
  }

  const [userCount, setUserCount] = useState<number>(() => {
    const storedCount = localStorage.getItem('userCount')
    return storedCount ? parseInt(storedCount, 10) : calculateUserCount()
  })

  useEffect(() => {
    const updateUserCount = () => {
      const newCount = calculateUserCount()
      setUserCount(newCount)
      localStorage.setItem('userCount', newCount.toString())
    }

    // Cập nhật ngay khi component mount
    updateUserCount()

    // Đặt interval để cập nhật lại mỗi ngày
    const intervalId = setInterval(updateUserCount, 24 * 60 * 60 * 1000) // 24 giờ

    return () => clearInterval(intervalId)
  }, [])

  return <div>Số lượng người dùng: {userCount}</div>
}
