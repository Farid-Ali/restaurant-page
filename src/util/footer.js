const footer = (() => {
  const createFooter = (copywriteOwner) => {
    const today = new Date();
    const thisYear = today.getFullYear(0);

    const footer = document.createElement("footer");
    const footerText = document.createElement("p");

    footerText.textContent = `${copywriteOwner} @ ${thisYear}, All Writes Reserved`;
    footer.appendChild(footerText);

    return footer;
  };

  return {
    createFooter,
  };
})();

export default footer;
