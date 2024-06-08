import { classNames } from '@/lib/utils'
import Image from 'next/image'

type Props = {
  className?: string
  image: string
  alt: string
  href: string
}

export const ServiceCard = ({ className, alt, href, image }: Props) => {
  return (
    <a
      className={classNames(className || '', 'block w-fit')}
      href={href}
    >
      <Image
        src={image}
        alt={alt}
        width={100}
        height={100}
        className="h-auto w-28"
      />
    </a>
  )
}
