const SYMBOLS = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ .,"

const SYMBOLS_INDEX = SYMBOLS.split("").reduce((acc, symbol, index) => {
  acc[symbol] = index
  return acc
}, {})

const inRange = (range) => (num) => (range + num) % range

const inSymbolsRange = inRange(SYMBOLS.length)
const getSymbol = (num) => SYMBOLS[inSymbolsRange(num)]

const vigenereCipher = (key) => {
  const inKeyRange = inRange(key.length)
  const getKey = (num) => key[inKeyRange(num)]

  const encodeSymbol = (letter, i) =>
    getSymbol(SYMBOLS_INDEX[getKey(i)] + SYMBOLS_INDEX[letter])

  const decodeSymbol = (letter, i) =>
    getSymbol(SYMBOLS_INDEX[letter] - SYMBOLS_INDEX[getKey(i)])

  const encode = (message) => message.split("").map(encodeSymbol).join("")

  const decode = (message) => message.split("").map(decodeSymbol).join("")

  return { encode, decode }
}

const key = "test key"
const { encode, decode } = vigenereCipher(key)

const message = "Hi. This is test message"

const encodedMessage = encode(message)
const decodedMessage = decode(encodedMessage)
console.log(decodedMessage)
