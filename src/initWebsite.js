import navigation from "./util/navigation";
import footer from "./util/footer";
import home from "./home/home";

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
  content.appendChild(home.main);

  //Append footer
  content.appendChild(footer.createFooter("Farid"));

  return content;
}

export default function initWebsite() {
  document.body.appendChild(mainComponent());
}
