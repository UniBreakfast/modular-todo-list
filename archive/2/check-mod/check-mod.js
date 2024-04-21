const checkMod = (() => {
  return {
    init() {

    },

    modify(item) {
      const label = makeLabel(item.firstChild.textContent);
      
      item.firstChild.replaceWith(label);
    },
  };

  function makeLabel(text) {
    const label = document.createElement('label');

    label.innerHTML = `<input type="checkbox"> ${text}`;

    return label;
  }
})();
