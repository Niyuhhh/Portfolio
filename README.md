# Portfolio

## Pagination with Jump

Use `PaginationJump` to let users navigate directly to a page.

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationJump,
} from "@/components/ui/pagination"

function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationJump
            totalPages={20}
            onPageChange={(page) => console.log("Go to", page)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

The jump field validates that the entered number stays between 1 and the total number of pages.