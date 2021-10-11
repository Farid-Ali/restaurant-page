const home = (() => {
  const main = document.createElement("main");
  main.classList.add("main");

  const createRestaurantName = (restaurantName) => {
    const restaurantNameContainer = document.createElement("div");
    restaurantNameContainer.classList.add("restaurant-name-container");
    const restaurantNameElement = document.createElement("h1");

    restaurantNameElement.textContent = restaurantName;

    restaurantNameContainer.appendChild(restaurantNameElement);
    main.appendChild(restaurantNameContainer);
  };

  const createAboutRestaurant = (aboutRestaurant) => {
    const aboutRestaurantContainer = document.createElement("div");
    const aboutRestaurantElement = document.createElement("p");

    aboutRestaurantElement.textContent = aboutRestaurant;

    aboutRestaurantContainer.appendChild(aboutRestaurantElement);
    main.appendChild(aboutRestaurantContainer);
  };

  return {
    createRestaurantName,
    createAboutRestaurant,
    main,
  };
})();

export default home;
