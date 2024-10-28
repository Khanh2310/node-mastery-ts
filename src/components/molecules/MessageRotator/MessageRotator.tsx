
import React, { useEffect, useState } from 'react'

interface IMessageRotatorProps {
  messages: string[]
}

export const MessageRotator: React.FC<IMessageRotatorProps> = ({
  messages,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [fade, setFade] = useState<boolean>(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
        setFade(true)
      }, 1000)
    }, 4000)

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="relative flex h-6 w-full items-center justify-center md:h-6 lg:h-5">
      {messages &&
        messages.map((message, index) => (
          <div
            key={index}
            className={`absolute rounded text-sm text-white transition-opacity duration-1000 ease-in-out ${index === currentIndex && fade ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {message}
          </div>
        ))}
    </div>
  )
}
