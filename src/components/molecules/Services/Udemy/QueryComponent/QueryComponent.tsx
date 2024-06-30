'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextBoxWithLabel } from '@/components/molecules/TextBoxWithLabel'
import { Button } from '@/components/molecules/ButtonCommon'
import { InstructorQueryInput, InstructorQuerySchema } from '@/schemas/Services'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { SelectBoxWithLabel } from '@/components/molecules/SelectBoxWithLabel'
import { RatingRange, RatingRank } from '@/types/services'

type Values = InstructorQueryInput

type Props = {
  isMutating: boolean
  onSubmit: (value: Values) => Promise<void>
}

const defaultValues: Values = {
  search: '',
  ratingRange: undefined,
  ratingRank: undefined,
}

export const QueryComponent = ({ onSubmit, isMutating }: Props) => {
  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(InstructorQuerySchema),
  })
  
  return (
    <>
      <form
        className="mt-4 w-full items-end grid grid-cols-5 gap-x-6 gap-y-8 sm:grid-cols-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextBoxWithLabel
          className="md:col-span-2 col-span-full"
          labelProps={{ children: 'Search' }}
          textboxProps={register('search')}
          isRequired
        />

        <SelectBoxWithLabel
          className="md:col-span-2 col-span-full"
          labelProps={{
            children: 'Rating Range',
          }}
          selectBoxProps={{
            ...register('ratingRange'),
            children: (
              <>
                <option value={''}>Select Range</option>
                {Object.entries(RatingRange).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </>
            ),
          }}
        />

        <SelectBoxWithLabel
          className="md:col-span-2 col-span-full"
          labelProps={{
            children: 'Rating Rank',
          }}
          selectBoxProps={{
            ...register('ratingRank'),
            children: (
              <>
                <option value={''}>Select Rank</option>
                {Object.entries(RatingRank).map(([key, value], i) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </>
            ),
          }}
        />

        <Button
          loading={isMutating}
          type="submit"
          variant="solid"
          color="blue"
          className="w-fit rounded-md"
          disabled={isMutating}
        >
          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
      </form>
    </>
  )
}
