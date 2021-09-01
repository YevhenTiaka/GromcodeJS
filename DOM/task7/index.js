export function createButton(buttonText) {
  const btn = document.createElement('button');
  const btn2 = document.body.append(btn);
  return (btn.textContent = 'Send Email');
}
