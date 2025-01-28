const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
];

const nom = produits.map(produit => `<th>${produit.nom}</th>`)
const id = produits.map(produit => `<td>${produit.id}</td>`)
const prix = produits.map(produit => `<td>${produit.prix}</td>`)
const tName = document.getElementById("t_name_c")

for (let i =0; i < nom.length; i++) {
    tName.innerHTML += `<tr>` + id[i] + nom[i] + prix[i] + `<th><button>f</button></th> </tr>`;
}

const search = document.getElementById('search')
search.addEventListener('keyup', fSearch)
function fSearch(element){
    console.log(element.key)
    let searchResult = element.key
    return nom.filter(function (el){
        return el.toLowerCase().indexOf(searchResult.toLowerCase()) !== -1
    })
}

function deleteLine(){

}
const resetBtn = document.getElementById('reset').addEventListener('click', reset)
function reset(){
    window.location.reload();
}