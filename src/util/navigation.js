const navigation = (() => {
  const createNavigation = (navItems) => {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const ul = document.createElement('ul');

    navItems.forEach((element) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.setAttribute('id', `${element.split(' ')[0]}`);
      btn.textContent = element;
      li.appendChild(btn);

      ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
  };

  return {
    createNavigation,
  };
})();

export default navigation;
