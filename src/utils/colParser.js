export const formatPosition = (text) => {
  switch (text) {
    case 'sales_manager':
      return 'Sales Manager'
      break
    case 'hr_manager':
      return 'HR Manager'
      break
    case 'warehouse_manager':
      return 'Warehouse Manager'
      break
    default:
      break
  }
}

export const formatDepartment = (text) => {
  switch (text) {
    case 'sales':
      return 'Sales'
      break
    case 'hr':
      return 'HR'
      break
    case 'warehouse':
      return 'Warehouse'
      break
    default:
      break
  }
}
