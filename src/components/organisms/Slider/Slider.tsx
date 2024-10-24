import Image, { StaticImageData } from 'next/image'
import iconPlus from '@/images/icons/plus_custom.webp'
import { SliderCommon } from '@/components/molecules/SliderCommon'
type AvatarProps = {
  imageUser: StaticImageData[]
}
export const Slider = ({ imageUser }: AvatarProps) => {
  return (
    <div className="relative z-[1] flex h-[54px] w-44 items-center">
      <div className="h-[54px] w-[142px] overflow-hidden rounded-bl-[54px] rounded-tl-[54px] pl-[2px]">
        <SliderCommon avatarUser={imageUser} />
        <button
          type="button"
          className="absolute right-4 top-0 z-[2] cursor-pointer border-none bg-transparent p-0 "
        >
          <Image
            src={iconPlus}
            alt="btn"
            className="h-[49px] w-[49px] rounded-full object-cover"
            width={48}
            height={48}
          />
        </button>
      </div>
    </div>
  )
}
