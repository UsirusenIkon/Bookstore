const CHECK_STATUS = 'bookstore/categories/CHECK';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducer;
export { checkStatus };