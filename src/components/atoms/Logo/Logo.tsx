import Image from 'next/image'
import logo from '@/images/logos/UdemyService-logo.png'

type Props = {
  className?: string
}
export const Logo = ({ className }: Props) => {
  return (
    <Image
      className={`h-15 w-auto ${className}`}
      src={logo}
      height={100}
      width={100}
      alt="Service"
    />
  )
}
