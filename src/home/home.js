import domContent from '../util/domContent';

const home = (() => {
  const _main = document.createElement('main');
  _main.classList.add('main');

  const createHome = () => _main;

  const _domContent = domContent();

  const _createRestaurantName = (restaurantName) => {
    _main.appendChild(_domContent.createHeading(restaurantName));
  };

  const _createAboutRestaurant = (aboutRestaurant) => {
    _main.appendChild(_domContent.createParagraph(aboutRestaurant));
  };

  const _createWorkingHours = (workingHoursList) => {
    const workingHoursContainer = document.createElement('div');

    workingHoursContainer.appendChild(
      _domContent.createHeading('Working Hours')
    );
    workingHoursContainer.appendChild(
      _domContent.createUnorderedList(workingHoursList)
    );

    _main.appendChild(workingHoursContainer);
  };

  const _createLocation = (locationText) => {
    const locationContainer = document.createElement('div');

    locationContainer.appendChild(_domContent.createHeading('Locate Us'));
    locationContainer.appendChild(_domContent.createParagraph(locationText));

    _main.appendChild(locationContainer);
  };

  const aboutRestaurant = (name, about, workingHours, location) => {
    _createRestaurantName(name);
    _createAboutRestaurant(about);
    _createWorkingHours(workingHours);
    _createLocation(location);
  };

  return {
    aboutRestaurant,
    createHome,
  };
})();

export default home;
