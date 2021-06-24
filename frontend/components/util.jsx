export function uniqueId() {
  return new Date().getTime();
}

export function strToBool(str) {
  if (str && typeof str === "string") {
    if (str.toLowerCase() === "true") return true;
    if (str.toLowerCase() === "false") return false;
  }
  return str;
}