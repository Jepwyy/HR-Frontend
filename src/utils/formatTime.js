export function formatTime(timeString) {
  if (timeString === '0') return '*'
  const time = new Date()
  const [hours, minutes, seconds] = timeString.split(':')

  time.setHours(hours)
  time.setMinutes(minutes)
  time.setSeconds(seconds)

  const formattedTime = time.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  })
  return formattedTime
}

export function formatLocalTime(timeString) {
  const date = new Date(`2000-01-01T${timeString}`)
  const formattedTime = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  return formattedTime
}

export function formatBirthdate(dateString) {
  const formattedDate = dateString.substring(0, 10)
  return formattedDate
}

export function getDateToday() {
  const currentDate = new Date()
  const yearNow = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0') // Add 1 to get the correct month index, and pad with 0 if needed
  const day = currentDate.getDate().toString().padStart(2, '0') // Pad with 0 if needed
  const formattedDate = `${yearNow}-${month}-${day}`
  return formattedDate // Outputs something like "2023-03-27"
}
