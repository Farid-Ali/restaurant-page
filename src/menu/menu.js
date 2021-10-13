import domContent from "../util/domContent";

const menuItem = (category, title, description, price) => {
  const _domContent = domContent();

  const getCategory = () => category;
  const _menuContainer = document.createElement("div");
  const getMenuItem = () => _menuContainer;

  const _setMenuItem = () => {
    _menuContainer.appendChild(_domContent.createHeading(title));
    _menuContainer.appendChild(_domContent.createParagraph(price));
    _menuContainer.appendChild(_domContent.createParagraph(description));
  };
  _setMenuItem();

  return {
    getCategory,
    getMenuItem,
  };
};

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

const menu = (() => {
  const createMenu = () => {
    const menuContainer = document.createElement("div");

    menuContainer.appendChild(butterTea.getMenuItem());
    menuContainer.appendChild(frenchToast.getMenuItem());

    return menuContainer;
  };

  return {
    createMenu,
  };
})();

export default menu;
