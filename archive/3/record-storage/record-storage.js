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
  };
})();
