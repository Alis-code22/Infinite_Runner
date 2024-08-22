# Infinite Runner

Sabrina Foschian

## Obiettivo
Progettare un’applicazione Javascript che costruisca in un canvas uno scrolling infinito verticale in modo che l’informazione uscita dal canvas ricompaia in basso in maniera ciclica. Premendo il tasto “S” si cambia la direzione dello scrolling, con il tasto “P” aumentiamo la velocità di scrolling di 2px per frame e con il tasto “M“ diminuiamo la velocità di scrolling di 2px per frame.

### Panoramica del Progetto
Il progetto è composto da un canvas di forma rettangolare, al cui suo interno compaiono i due elementi principali: lo sfondo e il personaggio che corre.
Lo sfondo viene disegnato in modo da creare uno scrolling infinito uniforme che ricompare dalla parte bassa nella parte superiore del canvas.
I movimenti del personaggio al centro del canvas vengono creati grazie alla sequenza di frame di disegno contenuti in un unico file simile a uno sprite di animazione.
Per far sì che il personaggio cambi direzione di marcia con i controlli è stato necessario stabilire la direzione della velocità e la velocità stessa, in modo da poter distinguere tra le due e creare l’effetto del cambio direzione.
Una volta che la velocità raggiunge il valore 0 l’animazione e lo sfondo si fermano in modo da essere in accordo con il valore di staticità della velocità stessa.
Infine, all’interno del codice sono stati specificati i tasti da adoperare per i comandi di cambio direzione, aumento e diminuzione della velocità attraverso le rispettive lettere S, P e M.
L’aggiunta dei comandi laterali e le indicazioni della velocità e della direzione in tempo reale donano un tocco in più rispetto alla semplice animazione.

### Caratteristiche
- Scrolling infinito uniforme
- Simil-sprite per le animazioni del personaggio
- Interfaccia dei controlli sia su tastiera fisica come lettere S, A oppure ↓ e D oppure ↑ sia come pulsanti dei comandi

