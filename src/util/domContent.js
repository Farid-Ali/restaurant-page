export default function domContent() {
  const createHeading = (headingText, className) => {
    const h1 = document.createElement("h1");
    h1.classList.add(`${className || "heading"}`);
    h1.textContent = headingText;

    return h1;
  };

  const createParagraph = (paragraphText, className) => {
    const p = document.createElement("p");
    p.classList.add(`${className || "paragraph"}`);
    p.textContent = paragraphText;

    return p;
  };

  const createUnorderedList = (listItem) => {
    const ul = document.createElement("ul");
    listItem.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      ul.appendChild(li);
    });
    return ul;
  };

  return {
    createHeading,
    createParagraph,
    createUnorderedList,
  };
}
