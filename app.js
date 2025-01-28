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
    tName.innerHTML += `<tr>` + id[i] + nom[i] + prix[i] + `<th><button class="deleteBtn" id="btn${i}">f</button></th> </tr>`;
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
const total = produits.reduce((total, item) => total + item.prix, 0)
console.log(total)

const totalTxt = document.getElementById('totalTxt')
totalTxt.textContent = total

const deleteBtn = document.querySelectorAll('.deleteBtn').forEach(function (element){
    element.addEventListener('click', deleteLine)
})

function deleteLine(element){
    console.log(element.target.id)
    let id = element.target.id
    produits.splice(id, 1);
}
const resetBtn = document.getElementById('reset').addEventListener('click', reset)
function reset(){
    window.location.reload();
}