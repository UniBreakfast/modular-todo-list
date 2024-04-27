const checkMod = (() => {
  let recordStorage;
  
  return {
    init(storage) {
      recordStorage = storage;
    },

    modify(item, {checked} = {}) {
      const label = makeLabel(item.firstChild.textContent, checked);
      
      item.firstChild.replaceWith(label);
    },
  };

  function makeLabel(text, checked) {
    const label = document.createElement('label');

    label.innerHTML = `<input type="checkbox" ${checked ? 'checked' : ''}>${text}`;

    label.onchange = handleChange;

    return label;
  }

  function handleChange(e) {
    const label = e.target.parentElement;
    const item = label.parentElement;
    const ul = item.parentElement;
    const items = Array.from(ul.children);
    const i = items.indexOf(item);
    const { checked } = e.target;

    recordStorage.update(i, checked);
  }
})();
