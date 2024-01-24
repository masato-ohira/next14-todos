type ParsedQuery = {
  [key: string]: string | string[]
}

export const qsParse = (qs: string): ParsedQuery => {
  const params: ParsedQuery = {}

  if (qs.startsWith('?')) {
    qs = qs.slice(1)
  }

  const keyValuePairs = qs.split('&')

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split('=')
    const decodedKey = decodeURIComponent(key)
    const decodedValue = decodeURIComponent(value)

    if (params.hasOwnProperty(decodedKey)) {
      const existingValue = params[decodedKey]
      if (Array.isArray(existingValue)) {
        existingValue.push(decodedValue)
      } else {
        params[decodedKey] = [existingValue, decodedValue]
      }
    } else {
      params[decodedKey] = decodedValue
    }
  }

  for (const key in params) {
    const value = params[key]
    if (Array.isArray(value) && value.length === 1) {
      params[key] = value[0]
    }
  }

  return params
}
