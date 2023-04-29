export const formatPosition = (text) => {
  switch (text) {
    case 'sales_manager':
      return 'Sales Manager'
      break
    case 'sales_cashier':
      return 'Sales Cashier'
      break
    case 'sales_representative':
      return 'Sales Representative'
      break
    case 'hr_manager':
      return 'HR Manager'
      break
    case 'warehouse_manager':
      return 'Warehouse Manager'
      break
    case 'warehouse_staff':
      return 'Warehouse Staff'
      break
    case 'sales_cook':
      return 'Cook'
      break
    case 'barista':
      return 'Barista'
      break
    case 'hr_assistant':
      return 'Assistant Manager'
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
