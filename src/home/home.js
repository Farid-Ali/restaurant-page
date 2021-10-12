const home = (() => {
  const main = document.createElement("main");
  main.classList.add("main");

  const createHome = () => main;

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

  const createWorkingHours = (workingHoursList) => {
    const workingHoursContainer = document.createElement("div");
    const workingHoursHeading = document.createElement("h4");
    workingHoursHeading.classList.add("content-heading");
    workingHoursHeading.textContent = "Working Hours";
    workingHoursContainer.appendChild(workingHoursHeading);

    const ul = document.createElement("ul");
    workingHoursList.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      ul.appendChild(li);
    });
    workingHoursContainer.appendChild(ul);
    main.appendChild(workingHoursContainer);
  };

  const createLocation = (locationText) => {
    const locationContainer = document.createElement("div");
    const locationHeading = document.createElement("h4");
    locationHeading.classList.add("content-heading");
    locationHeading.textContent = "Locate Us";
    locationContainer.appendChild(locationHeading);

    const locationElement = document.createElement("p");
    locationElement.textContent = locationText;
    locationContainer.appendChild(locationElement);
    main.appendChild(locationContainer);
  };

  return {
    createRestaurantName,
    createAboutRestaurant,
    createWorkingHours,
    createLocation,
    createHome,
  };
})();

export default home;
