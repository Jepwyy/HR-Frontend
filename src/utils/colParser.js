export const formatPosition = (text) => {
  switch (text) {
    case "sales_manager":
      return "Sales Manager";
      break;
    case "hr_manager":
      return "HR Manager";
      break;
    default:
      break;
  }
};

export const formatDepartment = (text) => {
  switch (text) {
    case "sales":
      return "Sales";
      break;
    case "hr":
      return "HR";
      break;
    default:
      break;
  }
};
