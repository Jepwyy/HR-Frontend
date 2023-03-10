import { useQuery } from 'react-query'
import axios from '../api/api'

export const useEmployeeArchives = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['EmployeeArchives'],
    queryFn: async () => {
      const response = await axios.get('/users/archive')
      return response.data
    },
    // make this default on app.js later
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { isLoading, error, data }
}
