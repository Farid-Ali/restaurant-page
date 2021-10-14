export default function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav');
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}
