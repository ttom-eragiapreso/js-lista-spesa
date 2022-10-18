// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while




// Soluzione con il For Loop

let foods = ["pasta", "pizza", "pane", "cioccolato", "verdure"];
const output = document.querySelector("output");

let ul = document.createElement("ul");

for(let i = 0; i < foods.length; i++){
  let li = document.createElement("li");
  li.innerHTML = foods[i] + " for loop lista";
  ul.append(li);
}

output.append(ul);



// Soluzione con il While loop

let i = 0;
while(i < foods.length){
  let li = document.createElement("li");
  li.innerHTML = foods[i] + " while lista";
  ul.append(li);
  i++;
}

output.append(ul);
