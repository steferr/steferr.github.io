// import SELECT_BOOK from '../actions/index'
// lo "state" in argomento non è tutto lo stato dell'applicazione, ma solo la porzione
// rilevante, ovvero quello che viene modificato dall'azione.
// state = null significa che se lo state è undefined (ad esempio prima che l'utente clicchi
// in giro) viene inizializzato come null. sintassi es6

export default function(state = null, action) {
  switch(action.type) {
    case 'SELECT_BOOK':
      // console.log('SELECT_BOOK arrivato nel riduttore');
      return action.payload;
  }

  return state
}
