const menuItem = (category, title, description, price) => {
  const getCategory = () => category;
  const getMenuItem = () => {
    const menuContainer = document.createElement("div");

    const menuTitle = document.createElement("h4");
    menuTitle.textContent = title;
    menuContainer.appendChild(menuTitle);

    const menuPrice = document.createElement("p");
    menuPrice.textContent = price;
    menuContainer.appendChild(menuPrice);

    const menuDescription = document.createElement("p");
    menuDescription.textContent = description;
    menuContainer.appendChild(menuDescription);

    return menuContainer;
  };

  return {
    getCategory,
    getMenuItem,
  };
};

const menu = (() => {
  const butterTea = menuItem(
    "Beverages",
    "Butter Tea",
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
    15
  );

  const frenchToast = menuItem(
    "Main Dishes",
    "French Toast",
    "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
    35
  );

  const createMenu = (navItems) => {
    const menuContainer = document.createElement("div");
    console.log(butterTea.getCategory());
    menuContainer.appendChild(butterTea.getMenuItem());
    menuContainer.appendChild(frenchToast.getMenuItem());

    return menuContainer;
  };

  return {
    createMenu,
  };
})();

export default menu;
