const removeMod = (() => {
  let listModule;
  
  return {
    init(list) {
      listModule = list;
    },

    modify(item) {
      const removeBtn = makeRemoveBtn();

      item.append(' ', removeBtn);
    },
  };

  function makeRemoveBtn() {
    const btn = document.createElement('button');

    btn.textContent = 'delete';
    btn.onclick = handleRemove;

    return btn;
  }

  function handleRemove(e) {
    const item = e.target.closest('li');
    const items = Array.from(item.parentElement.children);
    const i = items.indexOf(item);
    
    listModule.remove(i);
  }
})();
