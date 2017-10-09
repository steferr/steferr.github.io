export default function(state = [], action) {
  // // console.log(SELECT_BOOK);
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
  }
  return state
}
