const dt = {
  showActions: false,
  actions: [],
  rowSelection: false,
  sortEnable: false,
  sortableColumns: [],
  searchEnable: false,
  paginationType: 'simple',
  dataCount: 5,
  headers: [],
  records: []
};

export {dt};

// Global data table config
/*
* showActions : true/false > show action column, if true then check actions array in config
* actions: array of actions, check only in case showActions is true
* rowSelection: true/false > show checkboxes at row level
* sortEnable: true/false > if sorting is enabled on columns or not, if yes check sortableColumns
* sortableColumns: all/Array<value_of_column> > empty array will be treated as sortEnable = false
* searchEnable: true/false > whether to provide search filter
* paginationType: numeric/simple
* dataCount: numeric > number of records needs to be shown on one page
* */
