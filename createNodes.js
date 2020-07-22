export const createElement = (tag, text = null, cssClass = null) => {
  const paragraph = document.createElement(tag);
  paragraph.innerHTML = text;
  paragraph.className = cssClass;
  return paragraph;
};

