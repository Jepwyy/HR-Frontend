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
