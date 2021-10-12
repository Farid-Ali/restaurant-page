import navigation from "./util/navigation";
import footer from "./util/footer";
import home from "./home/home";
import menu from "./menu/menu";
import contract from "./about/contract";

function mainComponent() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  //Append navigation bar
  content.appendChild(
    navigation.createNavigation(["Home", "Menu", "Contract Us"])
  );

  //Append Home (controll it with navigatin) - should implement latter
  home.createRestaurantName("The Testy Corner");
  home.createAboutRestaurant(
    "The Testy Corner's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
  );
  home.createWorkingHours([
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ]);
  home.createLocation("134 APC Bose Road, Kolkata - 700002");
  content.appendChild(home.createHome());

  //Append menu (controll it with navigatin) - should implement latter
  content.appendChild(menu.createMenu());

  //Append menu (controll it with navigatin) - should implement latter
  contract.setContractDetail("Manager", "1234567890", "notfake@email.com");
  content.appendChild(contract.createContract());

  //Append footer
  content.appendChild(footer.createFooter("Farid"));

  return content;
}

export default function initWebsite() {
  document.body.appendChild(mainComponent());
}
