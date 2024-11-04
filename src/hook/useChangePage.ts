import { NumberParam, useQueryParams } from 'use-query-params'

export const useChangePage = () => {
  const [, setQuery] = useQueryParams({
    page: NumberParam,
  })

  const handleChangePge = (page: number) => {
    setQuery({ page })
  }

  return {
    handleChangePge,
  }
}
