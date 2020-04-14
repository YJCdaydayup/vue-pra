const convert = (num) => {
  let result = "";
  while (num) {
    result = String.fromCharCode(--num % 26 + 65) + result;
    num = Math.floor(num / 26)
  }
  return result
}

console.log(convert(11234567828))