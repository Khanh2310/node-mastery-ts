import Image from 'next/image'
import logo from '@/images/logos/UdemyService-logo.svg'

type Props = {
  className?: string
}
export const Logo = ({ className }: Props) => {
  return (
    <Image
      className={`h-16 w-auto ${className}`}
      src={logo}
      height={150}
      width={150}
      alt="Service"
    />
  )
}
