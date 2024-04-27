const recordStorage = (() => {
  const records = [];
  let listModule;

  return {
    init(list) {
      listModule = list;
    },
    
    add({text}) {
      records.push({text});

      listModule.add({text});
    },

    remove(i) {
      records.splice(i, 1);

      listModule.remove(i);
    },

    update(i, checked) {
      records[i].checked = checked;

      listModule.update(i, records[i]);
    }
  };
})();
