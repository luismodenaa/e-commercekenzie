let carrinho = []

const data = [{
        id: 1,
        img: "./img/moletom.svg",
        nameItem: "Lightweight Jacket",
        description: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
        value: 250,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 2,
        img: "./img/gorro.svg",
        nameItem: "Black Hat",
        description: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        value: 60,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 3,
        img: "./img/mascara.svg",
        nameItem: "Mask",
        description: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        value: 30,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
    {
        id: 4,
        img: "./img/camisa.png",
        nameItem: "Warren Lotas Lebron James T-Shirt",
        description: "Uma camisa inspirada no Lebron James muito bonita, com um tecido bem macio. Uma estampa...",
        value: 140,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 5,
        img: "./img/camisa2.png",
        nameItem: "Gallery Dept. Logo Pocket Tee Orange",
        description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais fino...",
        value: 100,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 6,
        img: "./img/camisa3.png",
        nameItem: "Camiseta Sufgang Bones Preta",
        description: "Camiseta 100% algodão, estampa silk screen.",
        value: 120,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 7,
        img: "./img/camisa4.png",
        nameItem: "Camiseta Sufgang Utopia Preta",
        description: "Camiseta 100% algodão, estampa silk screen.",
        value: 120,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 8,
        img: "./img/moletom2.png",
        nameItem: "VLONE x NAV Good Intentions Doves Hoodie Black",
        description: "Um lindo moletom da VLONE, feito com um tecido super macio e aconchegante...",
        value: 400,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 9,
        img: "./img/moletom3.png",
        nameItem: "Chrome Hearts Matty Boy Race Team Hooded Sweatshirt Black",
        description: "Um moletom bem macio.",
        value: 300,
        addCart: "Adicionar ao carrinho",
        tag: ["Camisetas"],
    },
    {
        id: 10,
        img: "./img/tenis.png",
        nameItem: "Tênis Nike Air Max",
        description: "Ouse nas combinações urbanas e arrase na cena com o Tênis Nike Masculino. Seu design inovador...",
        value: 370,
        addCart: "Adicionar ao carrinho",
        tag: ["Calçados"],
    },
    {
        id: 11,
        img: "./img/tenis2.png",
        nameItem: "Tênis Nike Air Force 1 ´07 PRM",
        description: "A Linha Air Force se tornou ao longo dos anos muito mais que apenas uma referência de calçados , hoje trata-se...",
        value: 500,
        addCart: "Adicionar ao carrinho",
        tag: ["Calçados"],
    },
    {
        id: 12,
        img: "./img/tenis3.png",
        nameItem: "Tênis Nike Air Max Advantage 4",
        description: "O melhor conseguiu se superar. O Tênis Nike Air Max Advantage 4 é perfeito para quem quer combinar...",
        value: 450,
        addCart: "Adicionar ao carrinho",
        tag: ["Calçados"],
    },
    {
        id: 13,
        img: "./img/tenis4.png",
        nameItem: "Jordan 5 Retro Off-White Black",
        description: "Um belo Jordan 5 Retro, um tênis muito confortavel e estiloso de se usar...",
        value: 1120,
        addCart: "Adicionar ao carrinho",
        tag: ["Calçados"],
    },
    {
        id: 14,
        img: "./img/tenis5.png",
        nameItem: "Jordan 5 Retro Alternate Bel Air",
        description: "Um belo Jordan 5 Retro, um tênis muito confortavel e estiloso de se usar...",
        value: 870,
        addCart: "Adicionar ao carrinho",
        tag: ["Calçados"],
    },
    {
        id: 15,
        img: "./img/bag.png",
        nameItem: "SHOULDER BAG ANJUSS DUO",
        description: "Shoulder bag duo",
        value: 120,
        addCart: "Adicionar ao carrinho",
        tag: ["Acessórios"],
    },
]

let filteredData = data

const clothesList = []

function refreshProductsList() {
    const ul = document.querySelector('.products')
    ul.innerHTML = ''
    for (let i = 0; i < filteredData.length; i++) {

        const card = document.createElement('li')
        const figure = document.createElement('figure')
        const image = document.createElement('img')
        const figcaption = document.createElement('figcaption')
        const section = document.createElement('section')
        const category = document.createElement('p')
        const title = document.createElement('h3')
        const description = document.createElement('p')
        const value = document.createElement('h2')
        const addToCart = document.createElement('a')


        card.id = filteredData[i].id
        image.src = filteredData[i].img
        image.alt = filteredData[i].nameItem
        figcaption.innerText = filteredData[i].nameItem
        category.innerText = filteredData[i].tag[0]
        title.innerText = filteredData[i].nameItem
        description.innerText = filteredData[i].description
        value.innerText = "R$ " + filteredData[i].value.toFixed(2)

        card.className = "card"
        addToCart.innerText = 'Adicionar ao carrinho'
        category.className = 'category font-small-size'
        description.className = value.className = addToCart.className = 'font-small-size'
        addToCart.href = '#'
        addToCart.classList.add('link-cart')

        card.addEventListener('click', addToCartFunction)

        figure.appendChild(image)
        figure.appendChild(figcaption)
        section.appendChild(category)
        section.appendChild(title)
        section.appendChild(description)
        section.appendChild(value)
        section.appendChild(addToCart)

        card.appendChild(figure)
        card.appendChild(section)

        ul.appendChild(card)

        clothesList.push(card)
    }
}

function addToCartFunction(event) {
    event.preventDefault()
    if (event.target.classList.contains('link-cart')) {

        let elem = filteredData.filter((d) => d.id == Number(event.currentTarget.id))[0]

        carrinho.push(elem)

        refreshCart()

    }

}

const boxAviso = document.getElementById('box-aviso')
const sumBox = document.getElementById('sum-box')

function refreshCart() {

    const shoppingCartDiv = document.querySelector('.shopping-cart-inside')
    shoppingCartDiv.innerHTML = ""

    if (carrinho.length) {

        boxAviso.classList.add('esconder')
        sumBox.classList.remove('esconder')

        let sum = 0,
            n = 0

        for (let i = 0; i < carrinho.length; i++) {
            const section = document.createElement('section')
            const figure = document.createElement('figure')
            const img = document.createElement('img')
            const div = document.createElement('div')
            const h4 = document.createElement('h4')
            const p = document.createElement('p')
            const a = document.createElement('a')

            section.className = 'card-carrinho'
            a.href = '#'
            a.innerText = 'Remover produto'
            a.id = 'remove'

            section.id = 'c' + i
            img.src = carrinho[i].img
            img.alt = carrinho[i].nameItem
            h4.innerText = carrinho[i].nameItem
            p.innerText = "R$ " + carrinho[i].value.toFixed(2)

            figure.appendChild(img)

            div.appendChild(h4)
            div.appendChild(p)
            div.appendChild(a)

            section.appendChild(figure)
            section.appendChild(div)

            shoppingCartDiv.appendChild(section)

            sum += carrinho[i].value
            n++

            section.addEventListener('click', (e) => {
                e.preventDefault()
                if (e.target.id == 'remove') {
                    carrinho.splice(Number(e.currentTarget.id[1]), 1)
                    refreshCart()
                }
            })
        }

        document.getElementById('quantidade-total').innerText = n
        document.getElementById('valor-total').innerText = "R$ " + sum.toFixed(2)

    } else {
        boxAviso.classList.remove('esconder')
        sumBox.classList.add('esconder')

        shoppingCartDiv.appendChild(boxAviso)
    }
}

const menu = document.querySelector('.menu')
const menuList = []
const categoryClasses = ['all', 'accessories', 'shoes', 'shirts']
const categoryClassesPT = ['Todos', 'Acessórios', 'Calçados', 'Camisetas']

function createMenuList() {
    for (let i = 0; i < categoryClasses.length; i++) {
        menuList.push(document.getElementById(categoryClasses[i]))
    }
}

function menuHandler() {

    menu.addEventListener('click', (e) => {
        e.preventDefault()

        let chosen = categoryClasses.indexOf(e.target.id)
        if (chosen == -1) return

        menuList.map(function(x, index) {
            index == chosen ? x.classList.add('filter-selected') : x.classList.remove('filter-selected')
        })

        if (categoryClasses[chosen] == 'all')
            filteredData = data
        else
            filteredData = data.filter(function(x, index) { return categoryClassesPT[chosen] == x.tag[0] })

        refreshProductsList()
    })
}

const searchButton = document.querySelector('button')
const input = document.querySelector('input')

searchButton.addEventListener('click', function() {
    let text = input.value.toLowerCase()
    console.log(text)

    filteredData = data.filter(function(x) { return x.nameItem.toLowerCase().includes(text) })

    console.log(filteredData)

    refreshProductsList()
})

refreshProductsList()

createMenuList()

menuHandler()