import React, { useEffect, useMemo, useState } from 'react'

interface AvatarProps {
  name: string
  bgColor?: string // Optional to allow overriding the color
}

export const AvatarUser: React.FC<AvatarProps> = React.memo(
  ({ name, bgColor }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(
      bgColor || '',
    )

    // Function to get initials from the name
    const getInitials = useMemo(() => {
      const names = name.split(' ')
      const initials = names.map((n) => n.charAt(0)).join('')
      return initials.substring(0, 2).toUpperCase()
    }, [name])

    // Function to hash a string to a color
    const hashStringToColor = (str: string) => {
      let hash = 0
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
      }
      const color = `#${((hash & 0x00ffffff) | 0x1000000)
        .toString(16)
        .slice(1)}`
      return color
    }

    // Set background color based on name or bgColor
    useEffect(() => {
      if (bgColor) {
        setBackgroundColor(bgColor)
      } else {
        setBackgroundColor(hashStringToColor(name))
      }
    }, [bgColor, name])

    return (
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white`}
        style={{ backgroundColor }}
      >
        {getInitials}
      </div>
    )
  },
)

AvatarUser.displayName = 'Avatar'
