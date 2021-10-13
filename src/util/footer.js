import domContent from "./domContent";

const footer = (() => {
  const createFooter = (copywriteOwner) => {
    const today = new Date();
    const thisYear = today.getFullYear(0);
    const _domContent = domContent();

    const footer = document.createElement("footer");

    footer.appendChild(
      _domContent.createParagraph(
        `${copywriteOwner} @ ${thisYear}, All Rights Reserved`
      )
    );

    return footer;
  };

  return {
    createFooter,
  };
})();

export default footer;
