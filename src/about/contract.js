const contract = (() => {
  const main = document.createElement("div");

  const createContract = () => main;

  const contractHeading = document.createElement("h1");
  contractHeading.textContent = "Contract Us";
  main.appendChild(contractHeading);

  const contractDetail = document.createElement("ul");

  const setContractDetail = (role, phNo, email) => {
    let contractDetailList = [];
    contractDetailList.push(role, phNo, email);

    contractDetailList.forEach((element) => {
      const contractDetailElement = document.createElement("li");
      contractDetailElement.textContent = element;
      contractDetail.appendChild(contractDetailElement);
    });
    main.appendChild(contractDetail);
  };
  setContractDetail("Manager", "1234567890", "notfake@email.com");

  return {
    createContract,
  };
})();

export default contract;
