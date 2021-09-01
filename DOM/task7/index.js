export function createButton(buttonText) {
  const btn = document.createElement('button');
  btn.textContent = `${buttonText}`;
  const btn2 = document.body.append(btn);
}

// createButton('Button');
