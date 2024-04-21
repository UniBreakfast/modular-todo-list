const list = (() => {
  let template;

  return {
    async init() {
      await appendList();

      template = document.querySelector('template');
      template.remove();
    },
    
    add({text}) {
      const list = document.querySelector('ul');
      const item = template.content.firstElementChild.cloneNode(true);
      
      item.innerHTML = item.innerHTML.replace('{text}', text);
      
      list.append(item);
    },
  };

  async function appendList() {
    const link = document.querySelector('[rel="import"][name="list"]');
    const url = link.href;
    const listHTML = await fetch(url).then(r => r.text());

    document.body.insertAdjacentHTML('beforeend', listHTML);
  }
})();
