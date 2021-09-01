export function createButton(buttonText) {
  const btn = document.createElement('button');
  btn.textContent = `${buttonText}`;
  const addBtn = document.body.append(btn);
}

// createButton('Button');
