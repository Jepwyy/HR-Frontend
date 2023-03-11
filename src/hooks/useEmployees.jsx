import { useQuery } from 'react-query'
import axios from '../api/api'

export const useEmployees = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['Employees'],
    queryFn: async () => {
      const response = await axios.get('/users/get')
      return response.data
    },
    // make this default on app.js later
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { isLoading, error, data }
}

export const useSingleEmployee = (id) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['EmployeesOne'],
    queryFn: async () => {
      const response = await axios.get(`/users/get/${id}`)
      return response.data
    },
    // make this default on app.js later
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { isLoading, error, data }
}
