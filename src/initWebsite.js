import navigation from './util/navigation';
import footer from './util/footer';
import home from './home/home';
import menu from './menu/menu';
import contract from './about/contract';
import setActiveButton from './util/setActiveButton';

function mainComponent() {
  const container = document.createElement('div');

  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  const footerContainer = document.createElement('div');

  content.appendChild(
    navigation.createNavigation(['Home', 'Menu', 'Contract Us'])
  );

  const homeCreation = () => {
    home.aboutRestaurant(
      'The Testy Corner',
      "The Testy Corner's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",
      [
        'Sunday: 8am - 8pm',
        'Monday: 6am - 6pm',
        'Tuesday: 6am - 6pm',
        'Wednesday: 6am - 6pm',
        'Thursday: 6am - 10pm',
        'Friday: 6am - 10pm',
        'Saturday: 8am - 10pm',
      ],
      '134 APC Bose Road, Kolkata - 700002'
    );
    content.appendChild(home.createHome());
  };
  homeCreation();

  document.addEventListener('DOMContentLoaded', function () {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    const homeButton = document.querySelector('#Home');
    const menuButton = document.querySelector('#Menu');
    const contractUsButton = document.querySelector('#Contract');

    setActiveButton(homeButton);

    homeButton.addEventListener('click', () => {
      const main = document.querySelector('.main');
      main.textContent = '';
      homeCreation();
      setActiveButton(homeButton);
    });

    menuButton.addEventListener('click', () => {
      const main = document.querySelector('.main');
      main.textContent = '';
      main.appendChild(menu.createMenu());
      setActiveButton(menuButton);
    });

    contractUsButton.addEventListener('click', () => {
      const main = document.querySelector('.main');
      main.textContent = '';
      main.appendChild(contract.createContract());
      setActiveButton(contractUsButton);
    });
  });

  footerContainer.appendChild(footer.createFooter('Farid'));

  container.appendChild(content);
  container.appendChild(footerContainer);

  return container;
}

export default function initWebsite() {
  document.body.appendChild(mainComponent());
}
