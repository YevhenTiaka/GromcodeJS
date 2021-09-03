export function getSection(num) {
  const spanSection = document.querySelector(`span[data-number="${num}"]`);
  const span2 = spanSection.closest('data-section');
  return span2;
}
