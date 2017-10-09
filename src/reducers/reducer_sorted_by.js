const initialState = {
  cardList: [
    {
      title:'Javascript: the good parts',
      category: 'development',
      pages: 342,
    },
    {
      title:'Hello Worms',
      category: 'comedy',
      pages: 234,
    },
    {
      title:'How to cut butter',
      category: 'action',
      pages: 153,
    },
    {
      title:'Just one more',
      category: 'development',
      pages: 964,
    }
  ],
  sortedBy: '',
  hiddenColumns: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_CATEGORY':
      var togliSeUguale = (value) => {
        return value != action.payload
      }
      return state.filter(togliSeUguale)
    case 'HIDE_CATEGORY':
      let copiaStato1 = state.slice(0);
      let statoAggiornato1 = copiaStato1.concat([action.payload]);
      return statoAggiornato1
    case 'SORT_BY_NAME_ASC':
      // console.log('SORT_BY_NAME_ASC arrivato nel riduttore');
      return action.payload;
    case 'SORT_BY_NAME_DES':
      // console.log('SORT_BY_NAME_DES arrivato nel riduttore');
      return action.payload;
    case 'SORT_BY_CATEGORY_ASC':
      // console.log('SORT_BY_CATEGORY_ASC arrivato nel riduttore');
      return action.payload;
    case 'SORT_BY_CATEGORY_DES':
      // console.log('SORT_BY_CATEGORY_DES arrivato nel riduttore');
      return action.payload;
    case 'SORT_BY_PAGES_ASC':
      // console.log('SORT_BY_PRICE_ASC arrivato nel riduttore');
      return action.payload;
    case 'SORT_BY_PAGES_DES':
      // console.log('SORT_BY_PAGES_DES arrivato nel riduttore');
      return action.payload;
    case 'SORT_BY_PRICE_ASC':
      // console.log('SORT_BY_PRICE_ASC arrivato nel riduttore');
      return action.payload;
    case 'SORT_BY_PRICE_DES':
      // console.log('SORT_BY_PRICE_DES arrivato nel riduttore');
      return action.payload;

  return state
}
