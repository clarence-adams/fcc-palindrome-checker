function palindrome(str) {
  let str0 = str.toLowerCase()
  .split("")
  .filter(element => {
    if (/[a-z1-9]/.test(element) == true) {
      return true;
    } else {
      return false;
    }
  })
  .reverse()
  .join("");

  let str1 = str.toLowerCase()
  .split("")
  .filter(element => {
    if (/[a-z1-9]/.test(element) == true) {
      return true;
    } else {
      return false;
    }
  })
  .join("");

  console.log(str0, str1)

  if (str0 == str1) {
    return true;
  } else {
    return false;
  }
}

palindrome("1 eye for of 1 eye.");