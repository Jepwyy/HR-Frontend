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
    case 'purchasing_manager':
      return 'Purchasing Manager'
      break
    case 'purchasing_staff':
      return 'Purchasing Staff'
      break
    default:
      break
  }
}

export const formatDepartment = (text) => {
  switch (text) {
    case 'sales':
      return 'Sales'
    case 'hr':
      return 'HR'
    case 'warehouse':
      return 'Warehouse'
    case 'purchasing':
      return 'Purchasing'
    default:
      break
  }
}
