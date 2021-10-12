const contract = (() => {
  const contractContainer = document.createElement("div");

  const createContract = () => contractContainer;

  const contractHeading = document.createElement("h1");
  contractHeading.textContent = "Contract Us";
  contractContainer.appendChild(contractHeading);

  const contractDetail = document.createElement("ul");

  const setContractDetail = (role, phNo, email) => {
    let contractDetailList = [];
    contractDetailList.push(role, phNo, email);

    contractDetailList.forEach((element) => {
      const contractDetailElement = document.createElement("li");
      contractDetailElement.textContent = element;
      contractDetail.appendChild(contractDetailElement);
    });
    contractContainer.appendChild(contractDetail);
  };

  return {
    setContractDetail,
    createContract,
  };
})();

export default contract;
