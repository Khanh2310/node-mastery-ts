export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const stringDatetimeFormat = (date: string) => {
  const dateTime = new Date(date)
  const year = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const hour = dateTime.getHours()
  const minute = dateTime.getMinutes()
  const second = dateTime.getSeconds()

  return `${year}/${month < 10 ? '0' + month : month}/${
    day < 10 ? '0' + day : day
  } ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${
    second < 10 ? '0' + second : second
  }`
}

export const formatMoney = (amount: string): string => {
  const numericAmount = parseFloat(amount)
  if (!isNaN(numericAmount)) {
    const formattedAmount = numericAmount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 3,
    })

    return formattedAmount
  } else {
    return amount
  }
}
