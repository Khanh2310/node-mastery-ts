import Image from 'next/image'
import logo from '@/images/logos/UdemyService-logo.png'

type Props = {
  className?: string
}
export const AvatarCompany = ({ className }: Props) => {
  return (
    <Image
      className={`h-8 w-auto ${className}`}
      src={logo}
      height={100}
      width={100}
      alt="Service"
    />
  )
}
