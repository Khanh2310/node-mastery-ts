import { ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
type Props = {
  className?: string
}

export const ButtonLoading = ({className}: Props) =>{
  return (
    <Button className={className} disabled>
      <ReloadIcon className={`mr-2 h-4 w-4 animate-spin`} />
      Please wait
    </Button>
  )
}
