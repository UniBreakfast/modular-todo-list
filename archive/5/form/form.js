const form = (() => {
  let storageModule;

  return {
    init(recordStorage) {
      storageModule = recordStorage;
      
      appendForm();

      document.body.addEventListener('click', handleAddClick);
      document.body.addEventListener('submit', handleSubmit);
    },
  };

  async function appendForm() {
    const link = document.querySelector('[rel="import"][name="form"]');
    const url = link.href;
    const formHTML = await fetch(url).then(r => r.text());

    document.body.insertAdjacentHTML('beforeend', formHTML);
  }

  function handleAddClick(e) {
    if (e.target.matches('form button[type="submit"]')) {
      const btn = e.target;
      const form = btn.closest('form');
      const input = form.text;

      input.value = input.value.trim();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const text = form.text.value;

    storageModule.add({text});

    form.reset();
  }
})();
