import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  currentPage: number
  limit: number
  totalRecord: number
  onPageChange: Dispatch<SetStateAction<number>>
}

export const PaginationTable = ({
  currentPage,
  limit,
  totalRecord,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalRecord / limit)

  const renderPaginationItems = () => {
    const items = []

    // Add previous button
    items.push(
      <PaginationItem key="previous" aria-disabled={currentPage === 1}>
        <PaginationPrevious
          href="#"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        />
      </PaginationItem>,
    )

    // Add pagination numbers
    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1)
      ) {
        items.push(
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={() => onPageChange(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>,
        )
      } else if (page === currentPage - 2 || page === currentPage + 2) {
        items.push(
          <PaginationItem key={`ellipsis-${page}`}>
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }
    }

    // Add next button
    items.push(
      <PaginationItem key="next" aria-disabled={currentPage === totalPages}>
        <PaginationNext 
          href="#"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        />
      </PaginationItem>,
    )

    return items
  }

  return (
   totalPages ? <Pagination className="justify-end px-5 py-10">
      <PaginationContent>{renderPaginationItems()}</PaginationContent>
    </Pagination> : <></>
  )
}
