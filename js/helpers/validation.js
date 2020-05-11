const validateLength = (inputValue, min, max) => {
  const strLength = inputValue.length;
  if (strLength >= min && strLength <= max) {
    return "";
  } else if (strLength === 0) {
    return "Это обязательное поле.";
  } else {
    return `Должно быть от ${min} до ${max} символов.`;
  }
}

const validateURL = (inputValue) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  if (pattern.test(inputValue)) {
    return "";
  } else {
    return "Здесь должна быть ссылка";
  }
}

export {validateLength,validateURL}