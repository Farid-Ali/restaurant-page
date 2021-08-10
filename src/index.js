function testComponent() {
  const element = document.createElement('p');
  element.textContent = 'Setup works!';
  return element;
}

document.body.appendChild(testComponent());
