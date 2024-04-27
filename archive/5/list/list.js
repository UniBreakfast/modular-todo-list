const list = (() => {
  let template;
  let mods;

  return {
    async init(...args) {
      mods = args;
      
      await appendList();

      template = document.querySelector('template');
      template.remove();
    },
    
    add({text}) {
      const list = document.querySelector('ul');
      const item = template.content.firstElementChild.cloneNode(true);
      
      item.innerHTML = item.innerHTML.replace('{text}', text);
      
      for (const mod of mods) mod.modify?.(item);
      
      list.append(item);
    },

    remove(i) {
      const list = document.querySelector('ul');
      const item = list.children[i];

      item.remove();
    },

    update(i, record) {
      const list = document.querySelector('ul');
      const item = template.content.firstElementChild.cloneNode(true);

      item.innerHTML = item.innerHTML.replace('{text}', record.text);

      for (const mod of mods) mod.modify?.(item, record);

      const oldItem = list.children[i];

      oldItem.replaceWith(item);
    }
  };

  async function appendList() {
    const link = document.querySelector('[rel="import"][name="list"]');
    const url = link.href;
    const listHTML = await fetch(url).then(r => r.text());

    document.body.insertAdjacentHTML('beforeend', listHTML);
  }
})();
