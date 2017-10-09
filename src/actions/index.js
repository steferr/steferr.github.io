// export const SELECT_BOOK = 'SELECT_BOOK'
// const ADD_FILTER = 'ADD_FILTER'

export function selectBook(book) {
  // // console.log('this book has been selected: ', book.title);
  // // console.log(SELECT_BOOK);
  // console.log(`actionCreator selectBook(${book.title}) called`);
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}

export function showColumn(columnID) {
  // console.log(`actionCreator showColumn(${columnID}) called`);
  return {
    type: 'SHOW_COLUMN',
    payload: columnID
  }
}

export function hideColumn(columnID) {
  // console.log(`actionCreator HideColumn(${columnID}) called`);
  return {
    type: 'HIDE_COLUMN',
    payload: columnID
  }
}

export function sortByNameAsc(cardList, order) {
  // console.log(`actionCreator sortByNameAsc called`);
  return {
    type: 'SORT_BY_NAME_ASC',
    payload: order
  }
}
export function sortByNameDes(cardList, order) {
  // console.log(`actionCreator sortByNameAsc called`);
  return {
    type: 'SORT_BY_NAME_DES',
    payload: order
  }
}
export function sortByName(cardList, direction) {
  // console.log(`actionCreator sortByName called`);
  return {
    type: 'SORT_BY_NAME',
    direction: direction,
  }
}


export function sortBy(columnID, contentType) {
  // console.log(`actionCreator sortBy called, contentType: ${contentType}`);
  // console.log(columnID);
  // console.log(contentType);
  // console.log(content);
  return {
    type: 'SORT_BY',
    columnID: columnID,
    contentType: contentType,
  }
}

export function filterBy(keyToFilter, valueToFilter) {
  // console.log(`actionCreator filterBy key: ${keyToFilter}, value: ${valueToFilter} called`);
  return {
    type: 'FILTER_BY',
    keyToFilter: keyToFilter,
    valueToFilter: valueToFilter,
  }
}
