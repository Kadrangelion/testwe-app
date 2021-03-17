export const getIdfromURI = (URI) => {
  return URI.split('/')[(URI.split('/').length - 1)];
}
export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
}