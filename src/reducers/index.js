// import * as Currency from '../utilities/currencies'
// import * as Type from '/../utilites/card_types'
import Wirex_Plastic_Unverified_EUR from '../utilities/cards/Wirex_Plastic_Unverified_EUR'
import Wirex_Plastic_Unverified_USD from '../utilities/cards/Wirex_Plastic_Unverified_USD'
import Wirex_Plastic_Unverified_GBP from '../utilities/cards/Wirex_Plastic_Unverified_GBP'
import Wirex_Plastic_Verified_EUR from '../utilities/cards/Wirex_Plastic_Verified_EUR'
import Wirex_Plastic_Verified_USD from '../utilities/cards/Wirex_Plastic_Verified_USD'
import Wirex_Plastic_Verified_GBP from '../utilities/cards/Wirex_Plastic_Verified_GBP'
import Wirex_Virtual_Unverified_EUR from '../utilities/cards/Wirex_Virtual_Unverified_EUR'
import Wirex_Virtual_Unverified_USD from '../utilities/cards/Wirex_Virtual_Unverified_USD'
import Wirex_Virtual_Unverified_GBP from '../utilities/cards/Wirex_Virtual_Unverified_GBP'
import Wirex_Virtual_Verified_EUR from '../utilities/cards/Wirex_Virtual_Verified_EUR'
import Wirex_Virtual_Verified_USD from '../utilities/cards/Wirex_Virtual_Verified_USD'
import Wirex_Virtual_Verified_GBP from '../utilities/cards/Wirex_Virtual_Verified_GBP'
import * as o from '../utilities/constants'
// Conventions:
// '' = NOT SPECIFIED
// '-' = NOT APPLICABLE
// '*' = CALCULATED
const cardList = [
  Wirex_Plastic_Unverified_EUR,
  Wirex_Plastic_Unverified_USD,
  Wirex_Plastic_Unverified_GBP,
  Wirex_Plastic_Verified_EUR,
  Wirex_Plastic_Verified_USD,
  Wirex_Plastic_Verified_GBP,
  Wirex_Virtual_Unverified_EUR,
  Wirex_Virtual_Unverified_USD,
  Wirex_Virtual_Unverified_GBP,
  Wirex_Virtual_Verified_EUR,
  Wirex_Virtual_Verified_USD,
  Wirex_Virtual_Verified_GBP,
]
const initialState = {
  cardList : cardList,

    // {
    //   title:'Hello Worms',
    //   category: 'comedy',
    //   pages: 234,
    //   price: 4.99,
    //   cardIssuer: 'Mastercard'
    // },
    // {
    //   title:'How to cut butter',
    //   category: 'action',
    //   pages: 153,
    //   price: 7.99,
    //   cardIssuer: ''
    // },
    // {
    //   title:'Just one more',
    //   category: 'development',
    //   pages: 964,
    //   price: 92.00,
    //   cardIssuer: 'Mastercard'
    // },
    // {
    //   title:'Javascript: the bad parts',
    //   category: 'development',
    //   pages: 342,
    //   price: 6.99,
    //   cardIssuer: 'Visa'
    // },
    // {
    //   title:'Reaching the end',
    //   category: 'comedy',
    //   pages: 234,
    //   price: 32.00,
    //   cardIssuer: 'Mastercard'
    // },
    // {
    //   title:'God great, banana skin',
    //   category: 'action',
    //   pages: 131,
    //   price: 23.99,
    //   cardIssuer: ''
    // },
    // {
    //   title:'Chewing tables',
    //   category: 'comedy',
    //   pages: 964,
    //   price: 8.00,
    //   cardIssuer: 'Mastercard'
    // }
  activeBook: null,
  sortedBy: '',
  isDescendant: false,
  hiddenColumns: [],
  visibleCards: cardList,
  // activeFilters: [{cardIssuer: [o.MASTERCARD]}, {spendingCurrency: [o.EUR, o.USD, o.GBP]}, {cardType: [o.PLASTIC]}], //   [{spendingCurrency: [EUR, USD]}, {cardIssuer: [VISA, MASTERCARD]}]
  activeFilters: [], //   [{spendingCurrency: [EUR, USD]}, {cardIssuer: [VISA, MASTERCARD]}]
  // filters: [
  //   cardIssuer: [ 'Mastercard', 'Visa', 'none' ],
  //   idVerificationRequired: true,
  //   cardType: [ 'plastic', 'virtual' ],
  //   internalBalance: [ 'USD', 'EUR', 'GBP', 'BTC'],
  //
  // ],
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'SHOW_COLUMN':
    // console.log('SHOW_COLUMN arrivato nel riduttore');
      var togliSeUguale = (value) => {
        return value != action.payload;
      }
      // // console.log('- action.payload');
      // // console.log(action.payload);
      // // console.log('- state.cardList');
      // // console.log(state.cardList);
      // // console.log('- togliSeUguale');
      // // console.log(togliSeUguale);
      // // console.log('- togliSeUguale()');
      // // console.log(togliSeUguale());
      // // console.log('- state.cardList.filter(togliSeUguale)');
      // // console.log(state.cardList.filter(togliSeUguale));

      // console.log(Object.assign({}, state, {hiddenColumns: state.hiddenColumns.filter(togliSeUguale)}));
      return Object.assign({}, state, {hiddenColumns: state.hiddenColumns.filter(togliSeUguale)});

    case 'HIDE_COLUMN':
      // // console.log('HIDE_COLUMN arrivato nel riduttore');
      // // console.log('- payload');
      // // console.log(action.payload);
      // var tette = []
      // for (var i = 0; i < state.cardList.length; i++) {
      //   tette.concat(state.cardList[i][action.payload])
      // }
      var catNascoste = state.hiddenColumns.concat(action.payload)
      // console.log(Object.assign({}, state, {hiddenColumns: catNascoste}));
      return Object.assign({}, state, {hiddenColumns: catNascoste});



    case 'SELECT_BOOK':
      // console.log('SELECT_BOOK arrivato nel riduttore');
    return Object.assign({}, state, {activeBook: action.payload});

      // console.log('state.cardList.sort(compare)');
      // console.log(state.cardList.sort(compare))
      var listaOrdinata = state.cardList.sort(compare)
      // console.log(Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_DES'}));
      return Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_DES'});

    case 'FILTER_BY':
      console.log('FILTER_BY arrivato nel riduttore');

      // - - - - - - - - - DEBUG - - - - - - - - -
      console.log(`action.keyToFilter: ${action.keyToFilter}`);
      console.log(`action.valueToFilter: ${action.valueToFilter}`);
      //
      // console.log('state.activeFilters');
      // console.log(state.activeFilters);
      // console.log('state.visibleCards' )
      // console.log(state.visibleCards )
      //
      // console.log('cardListKeys');
      // console.log(cardListKeys);
      // console.log('activeFiltersKeys');
      // console.log(activeFiltersKeys);
      //
      // console.log('updatedVisibleCards')
      // console.log(updatedVisibleCards)
      //
      // console.log('activeFiltersValues');
      // console.log(activeFiltersValues);
      //
      // console.log('isKeyToFilterInActiveFilters()');
      // console.log(isKeyToFilterInActiveFilters());
      // console.log('isValueToFilterInActiveFilters()');
      // console.log(isValueToFilterInActiveFilters());
      // console.log('numberOfValuesInActiveFilterKey()');
      // console.log(numberOfValuesInActiveFilterKey());

      // - - - - - - - - - END DEBUG - - - - - - - - -

      // - - - - - - - - - HELPERS - - - - - - - - -
      // creo copie di visibleCards e activeFilters
      var updatedVisibleCards = state.visibleCards
      var updatedActiveFilters = state.activeFilters

      // Array contenente le chiavi della prima carta in cardList
      var cardListKeys = Object.keys(state.cardList[0])

      // Array contentente le chiavi in activeFilters
      var activeFiltersKeys = []
      // console.log(state.activeFilters[0][o.CARD_ISSUER]); //valori di activeFilters
      for (var i = 0; i < state.activeFilters.length; i++) {
        activeFiltersKeys.push(Object.keys(state.activeFilters[i])[0])
      }
      // Array di tutti i valori in activeFilters
      var activeFiltersValues = []
      var k = ''
      var n = []
      for (var i = 0; i < state.activeFilters.length; i++) {
        // key of object at position i of array activeFilters, in string
        k = Object.keys(state.activeFilters[i])[0]
        activeFiltersValues = activeFiltersValues.concat(state.activeFilters[i][k]);
      }

      const isKeyToFilterInActiveFilters = () => {
        if (activeFiltersKeys.indexOf(action.keyToFilter) != -1)
          return true
        else return false
      }

      const isValueToFilterInActiveFilters = () => {
        if (activeFiltersValues.indexOf(action.valueToFilter) != -1)
          return true
        else return false
      }

      const numberOfValuesInActiveFilterKey = () => {
        for (var i=0; i<state.activeFilters.length; i++) {
          if (Object.keys(state.activeFilters[i]) == action.keyToFilter) {
            return state.activeFilters[i][action.keyToFilter].length
          }
        }
        return 0
      }


      // - - - - - - - - - END HELPERS - - - - - - - - -


      // - - CASE #1 - - action.keyToFilter not in activeFilters
      // (sto premendo un pulsante di una categoria che non ha filtri attivi) -> RIDUZIONE RISULTATI
      // #1a - - rimuovo gli appropriati elementi da visibleCards
      //   scorro visibleCards
      //   controllo entro nella chiave uquale a quella dell'azione
      //   se il valore di visibleCards è diverso da quella dell'azione
      //   tolgo l'elemento da visibleCards
      // #1b - - aggiungo l'azione all'array activeFilters

      // #1a
      if (!isKeyToFilterInActiveFilters()) {
        updatedVisibleCards = []
        var chiaveVisibleCard = ''
        var arrayValoriVisibleCard = []
        for ( var i = 0; i < state.visibleCards.length; i++ ) {
          arrayValoriVisibleCard = Object.values(state.visibleCards[i])
          if ( arrayValoriVisibleCard.indexOf(action.valueToFilter) != -1 ) {
            updatedVisibleCards.push(state.visibleCards[i])
          }
        }
      // #1b
        updatedActiveFilters = [...updatedActiveFilters, {[action.keyToFilter] : [action.valueToFilter]}]
      }
      // console.log(updatedVisibleCards);
      // console.log(updatedActiveFilters);



      // - - - - - - - - - - - - - - CASE #2 - - - - - - - - - - - - - - - - - -
      // - - - - - - - - - - - CATEGORIA GIA' ATTIVA - - - - - - - - - - - - - -
      //action.keyToFilter already in activeFilters
      // (sto premendo un pulsante di una categoria che ha già almeno un filtro attivo)

      // - - - CASE #2.1 -> TASTO NON CLICCATO PRIMA
      // (sto premendo un tasto non premuto prima) -> AMPLIAMENTO RISULTATI
      //
      // VISIBLECARDS: scorro cardList, prendo le carte che contengono action.value
      // e le sparo in visible cards
      // ACTIVEFILTERS: aggiungo action.value a activeFilters

      // - - - CASE #2.2 -> RIPREMO LO STESSO TASTO
      // (sto ripremendo un tasto precedentemente cliccato)
      // (action.value presente in state.activeFilters values)

      // - - - - - CASE #2.2.1
      // (c'era solo un filtro attivo nella categoria cliccata) -> AMPLIAMENTO RISULTATI
      // (activeFilters in posizione action.key ha lunghezza 1)
      //
      // VISIBLECARDS: scorro cardList, prendo le carte che contengono action.key
      // e le sparo in visibleCards
      // ACTIVEFILTERS: rimuovo action.key da activeFilters

      // - - - - - CASE #2.2.2
      // (c'era più di un filtro attivo nella categoria cliccata) -> RISUZIONE RISULTATI
      // (activeFilters in posizione action.key ha lunghezza > 1)
      //
      // VISIBLECARDS: rimuovo le carte con valore uguale a action.value
      // ACTIVEFILTERS: rimuovo action.value dagli activeFilters

      // 2. Categoria già attiva
      if (isKeyToFilterInActiveFilters()) {
        // 2.1 Tasto non cliccato prima
        if (!isValueToFilterInActiveFilters()) {
          // console.log('CASO 2.1 Categora cliccata ma tasto no');
          //scorro cardList, prendo le carte che contengono action.value in key
          // uguale a action.key e le sparo in visible cards
          state.cardList.map((card) => {
            if(card[action.keyToFilter].indexOf(action.valueToFilter) != -1) {
              updatedVisibleCards = [...updatedVisibleCards, card]
            }
          })
          // aggiungo action.value ad activeFilters
          // updatedActiveFilters = state.activeFilters
          var updatedActiveFiltersValues = []
          state.activeFilters.map((filterObj) => {
            if (Object.keys(filterObj) == action.keyToFilter) {
              updatedActiveFiltersValues = [...filterObj[action.keyToFilter], action.valueToFilter]
              filterObj[action.keyToFilter] = updatedActiveFiltersValues
            }
          })
        }
        else {
          // 2.2.1 Tasto cliccato prima un solo tasto attivo
          if (numberOfValuesInActiveFilterKey() == 1) {
            console.log('CASO 2.2.1 Tasto già cliccato, ultimo della categoria');
            // ACTIVEFILTERS: rimuovo action.key da activeFilters
            updatedActiveFilters = []
            state.activeFilters.map((filterObj) => {
              if (Object.keys(filterObj) != action.keyToFilter) {
                updatedActiveFilters = [...updatedActiveFilters, filterObj]
              }
            })
            // se è l'unico filtro attivo mostro una volta premuto mostro tutte le carte
            if ( updatedActiveFilters.length == 0 ) {
              updatedVisibleCards = state.cardList
            }
            else {
              // VISIBLECARDS: scorro cardList, e prendo le carte che rispettano i requisiti di updatedActiveFilters
              updatedVisibleCards = []
              // if 2 arrays have at least one element in common it returns true
              const findOne = (sourceArray, comparisonArray) => {
                return comparisonArray.some((v) => {
                  return sourceArray.indexOf(v) >=0
              })}

              // Array contentente le chiavi in activeFilters
              var updatedActiveFiltersKeys = []
              for (var i = 0; i < updatedActiveFilters.length; i++) {
                updatedActiveFiltersKeys.push(Object.keys(updatedActiveFilters[i])[0])
              }

              state.cardList.map((card) => {
                // scorro card list. prendo i valori di ogni carta e controllo se
                // sono presenti tra i valori di activeFiltersValues
                for (var i=0; i < updatedActiveFiltersKeys.length; i++) {
                  var currentKey = updatedActiveFiltersKeys[i]
                  if ( findOne(card[currentKey], updatedActiveFilters[i][currentKey]) ) {
                    updatedVisibleCards.push(card)
                  }
                }

              })
            }
          }
          // 2.2.2 Tasto cliccato prima e più di un tasto attivo
          if (numberOfValuesInActiveFilterKey() > 1) {
            // console.log('CASO 2.2.2 Tasto già cliccato, categoria con altri tasti rimanenti');
            // VISIBLECARDS: rimuovo le carte con valore uguale a action.value
            var updatedVisibleCards = []
            state.visibleCards.map((card) =>{
              if(card[action.keyToFilter] != action.valueToFilter) {
                updatedVisibleCards = [...updatedVisibleCards, card]
              }
            })
            // ACTIVEFILTERS: rimuovo action.value dagli activeFilters
            // var updatedActiveFiltersValues = []
            updatedActiveFilters = state.activeFilters.slice(0) //clone array
            updatedActiveFilters.map((filterObj) => {
              if (Object.keys(filterObj) == action.keyToFilter) {
                var activeFiltersValues = filterObj[action.keyToFilter]
                var indexOfValueToFilter = activeFiltersValues.indexOf(action.valueToFilter)
                activeFiltersValues.splice(indexOfValueToFilter, 1)
                filterObj[action.keyToFilter] = activeFiltersValues
              }
            })
          }
        }
      }

      // console.log('state.visibleCards');
      // console.log(state.visibleCards);
      // console.log('updatedVisibleCards');
      // console.log(updatedVisibleCards);
      // console.log('state.activeFilters');
      // console.log(state.activeFilters);
      // console.log('updatedActiveFilters');
      // console.log(updatedActiveFilters);

      return Object.assign({}, state, {visibleCards: updatedVisibleCards}, {activeFilters: updatedActiveFilters})







    case 'SORT_BY':
      // console.log('SORT_BY arrivato nel riduttore');
      // console.log('action.contentType');
      // console.log(action.contentType);
      // console.log('action.columnID');
      // console.log(action.columnID);

        var isDescendant = false

        function compare(a, b) {
          // const varA = (action.columnID === o.WORD) ?
          //   a[action.columnID].toUpperCase() : a[action.columnID]
          // const varB = (action.columnID === o.WORD) ?
          //   b[action.columnID].toUpperCase() : b[action.columnID]
          var varA = {}
          var varB = {}

          const culo = action.columnID

          if (action.contentType == o.WORD) {
            varA = a[action.columnID].toUpperCase()
            varB = b[action.columnID].toUpperCase()
          }
          else if (action.contentType == o.NUMBER) {
            varA = parseFloat(a[action.columnID])
            varB = parseFloat(b[action.columnID])
          }
          else if (action.contentType == o.PRICE) {
            varA = parseFloat(a[action.columnID].substring(3,a[action.columnID].length))
            varB = parseFloat(b[action.columnID].substring(3,b[action.columnID].length))
          }
          else if (action.contentType == o.TIME) {
            varA = parseFloat(a[action.columnID].replace('days', ''))
            varB = parseFloat(b[action.columnID].replace('days', ''))
          }

          // if the button has been already pressed and the column is already sorted ascendently
          // it sorts the column descendently
          if (state.sortedBy === action.columnID && !state.isDescendant) {
            isDescendant = true
            if (varA > varB) {
              return -1;
            } else if (varA < varB) {
              return 1;
            }
            return 0;
          }
          // if the button has been already pressed and the column is already sorted
          // descendently it sorts the column ascendently
          if (state.sortedBy === action.columnID && state.isDescendant) {
              if (varA > varB) {
                return 1;
              } else if (varA < varB) {
                return -1;
              }
              return 0;
          }
          //if the button hasn't been already pressed, sort ascendently
          if (varA > varB) {
            return 1;
          } else if (varA < varB) {
            return -1;
          }
          return 0;

        }

        var sortedCardList = state.visibleCards.sort(compare)

        return Object.assign({}, state,
          {visibleCards: sortedCardList},
          {sortedBy: action.columnID},
          {isDescendant: isDescendant});

  }
  return state;
}


// case 'SORT_BY_NAME_ASC':
//   // console.log('SORT_BY_NAME_ASC arrivato nel riduttore');
//   function compare(a, b) {
//     const elementA = a.title.toUpperCase();
//     const elementB = b.title.toUpperCase();
//     // // console.log('elementA');
//     // // console.log(elementA);
//     // // console.log('elementB');
//     // // console.log(elementB);
//     if (elementA > elementB) {
//       return 1;
//     } else if (elementA < elementB) {
//       return -1;
//     }
//     return 0;
//   }
//   // console.log('state.cardList.sort(compare)');
//   // console.log(state.cardList.sort(compare))
//   var listaOrdinata = state.cardList.sort(compare)
//   // console.log(Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_ASC'}));
//   return Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_ASC'});
//
//
// case 'SORT_BY_NAME_DES':
//   // console.log('SORT_BY_NAME_DES arrivato nel riduttore');
//   function compare(a, b) {
//     const elementA = a.title.toUpperCase();
//     const elementB = b.title.toUpperCase();
//     if (elementA > elementB) {
//       return -1;
//     } else if (elementA < elementB) {
//       return 1;
//     }
//     return 0;
//   }

// case 'SORT_BY_NAME':
//   // console.log('SORT_BY_NAME arrivato nel riduttore');
//   function compare(a, b) {
//     const elementA = a.title.toUpperCase();
//     const elementB = b.title.toUpperCase();
//     if (action.direction === 'ascending' ) {
//       if (elementA > elementB) {
//         return 1;
//       } else if (elementA < elementB) {
//         return -1;
//       }
//       return 0;
//     }
//     if (elementA > elementB) {
//       return -1;
//     } else if (elementA < elementB) {
//       return 1;
//     }
//     return 0;
//   }
//   // console.log('state.cardList.sort(compare)');
//   // console.log(state.cardList.sort(compare))
//   var listaOrdinata = state.cardList.sort(compare)
//   // console.log(Object.assign({}, state, {cardList: listaOrdinata}));
//   return Object.assign({}, state, {cardList: listaOrdinata});
