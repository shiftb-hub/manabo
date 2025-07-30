export const getPasswordStrength = (password?: string) => {
  const safePassword = password || ''
  const length = safePassword.length

  const checks = {
    length: length >= 8,
    veryLong: length >= 12,
    uppercase: /[A-Z]/.test(safePassword),
    lowercase: /[a-z]/.test(safePassword),
    number: /\d/.test(safePassword),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(safePassword),
  }

  const varietyCount = [
    checks.uppercase,
    checks.lowercase,
    checks.number,
    checks.special,
  ].filter(Boolean).length

  let score = 0
  if (checks.length && varietyCount >= 2) score++
  if (checks.length && varietyCount >= 3) score++
  if (checks.veryLong && varietyCount === 4) score += 2

  let level = '弱い'
  let color = 'text-red-500'
  if (score === 2) {
    level = '普通'
    color = 'text-yellow-500'
  } else if (score >= 3) {
    level = '強い'
    color = 'text-green-500'
  }

  return { score, checks, level, color }
}
