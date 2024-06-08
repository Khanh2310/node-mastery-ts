type Props = {
  className?: string
  title: string
  caption?: string
}

export const Title = ({ title, caption, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="border-l-8 border-l-orange-600 px-2 text-3xl font-bold uppercase leading-normal">
        {title}
      </h2>
      {caption && <p className="mt-1 text-base leading-normal">{caption}</p>}
    </div>
  )
}
