const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
let carrinho= {}

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
})
items.addEventListener('click', e =>{
    addCarrinho(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('produtos.json')
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}



const pintarCards = data => {
    data.forEach(produto =>{
        templateCard.querySelector('h5').textContent = produto.title
        templateCard.querySelector('p').textContent= produto.precio
        templateCard.querySelector('img').setAttribute("src", produto.imagen)
        templateCard.querySelector(".btn-dark").dataset.id = produto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

const addCarrinho = e =>{
    if (e.target.classList.contains('btn-dark')){
        setCarrinho(e.target.parentElement)
    }
    e.stopPropagation()
}
const setCarrinho = objeto => {
    const produto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(carrinho.hasOwnProperty(produto.id)){
        produto.cantidad = carrinho[produto.id].cantidad + 1
    }
    carrinho[produto.id]= {...produto}
    console.log(carrinho)
    localStorage.setItem("prod", JSON.stringify(produto));
    let recitem = JSON.parse(localStorage.getItem("prod"));
}
