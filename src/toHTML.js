export function toHTML(string) {
  return document.createRange().createContextualFragment(str.trim()).firstChild;
}
