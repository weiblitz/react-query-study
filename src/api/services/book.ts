import type { Book } from '../../../mocks/types';
import type { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

export const getBooks = (): Promise<Book[]> => {
  return apiClient.get({
    url: '/books',
  });
};
const getBooksQueryOptions = () => {
  return queryOptions({
    queryKey: ['books'],
    queryFn: () => getBooks(),
  });
};

type UseBooksOptions = {
  queryConfig?: QueryConfig<typeof getBooksQueryOptions>;
};

export const useGetBooks = ({ queryConfig }: UseBooksOptions = {}) => {
  return useQuery({
    ...getBooksQueryOptions(),
    ...queryConfig,
  });
};
