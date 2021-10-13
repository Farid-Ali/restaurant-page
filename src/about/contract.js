import domContent from "../util/domContent";

const contract = (() => {
  const _contractContainer = document.createElement("div");
  const _domContent = domContent();

  const createContract = () => _contractContainer;

  _contractContainer.appendChild(_domContent.createHeading("contract Us"));
  _contractContainer.appendChild(
    _domContent.createUnorderedList([
      "Manager",
      "1234567890",
      "notfake@email.com",
    ])
  );

  return {
    createContract,
  };
})();

export default contract;
