const order = {
  state: {
    orderTitleCols: [
      {
        title: 'Name',
        slot: 'name',
      },
      {
        title: 'Age',
        key: 'age',
      },
      {
        title: 'Address',
        key: 'address',
      },
      {
        title: 'Action',
        slot: 'action',
        width: 150,
        align: 'center',
      },
    ],
    orders: [
      {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
      },
      {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
      },
      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
      },
      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
      },
    ],
  },
  getters: {},
  mutation: {},
  actions: {},
};
export default order;
