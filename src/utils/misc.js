export const getIdfromURI = (URI) => {
  return URI.split('/')[(URI.split('/').length - 1)];
}