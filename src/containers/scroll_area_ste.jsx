SCROLL AREA
import scrollbar, react, react-redux

prendere le misure dell'area (viewport - l'altezza di nav e filtri)

setta lo stato iniziale: larghezza e altezza dell'area

const eventTypes = {
    wheel: 'wheel',
    api: 'api',
    touch: 'touch',
    touchEnd: 'touchEnd',
    mousemove: 'mousemove',
    keyPress: 'keypress'
};

eventi
scorrimento verticale mouse:
touchStart e touch ends
trascinamento mouse
onKeyDown, onKeyUp
  registro la posizione iniziale e finale
  mando un azione con i dettagli (offsetY)

render {

  return(
    <div onSroll, onDrag, overflow hidden, scollable si, >
      SortBar (aggiorno in base ad offset X)

      lista carte passo in giu gli offset
        titolo carte (aggiorno in base ad entrambi)
        dettaglio carte (aggiorno solo in base a offset Y)
    </div>
    <barra-orizzontale tipo='orizzontale' {...props}>
    </barra-orizzontale>
    <barra-verticale tipo='verticale' {...props}>
    </barra-verticale>
  )
}
