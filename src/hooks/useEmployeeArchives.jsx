import { useQuery } from 'react-query'
import axios from '../api/api'

export const useEmployeeArchives = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['EmployeeArchives'],
    queryFn: async () => {
      const response = await axios.get('/users/archive')
      return response.data
    },
  })
  return { isLoading, error, data }
}
