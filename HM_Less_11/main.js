
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let button = document.getElementById('button');
let cartDiv = document.getElementById('cartsDiv')

button.onclick = function () {
    cartDiv.innerText=''
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(cartsObj => {
          const {carts} = cartsObj
            for (const cart of carts) {
                let div= document.createElement('div')
                div.classList.add('cardDiv')
                div.innerText=`
                ID:${cart.id}   
                Total:${cart.total}
                DiscountedTotal:${cart.discountedTotal}
                UserId:${cart.userId}
                TotalProducts:${cart.totalProducts}
                TotalQuantity:${cart.totalQuantity}`
                let ul= document.createElement('ul')
                for (const product of cart.products) {
                    let li= document.createElement('li')
                    let img= document.createElement('img')
                    img.classList.add('productImg')
                    li.innerText=`
                    id: ${product.id},
                    title: ${product.title},
                    price: ${product.price},
                    quantity: ${product.quantity},
                    total: ${product.total},
                    discountPercentage: ${product.discountPercentage},
                    discountedTotal: ${product.discountedTotal},
                   `
                    img.src = product.thumbnail
                    li.appendChild(img)
                    ul.appendChild(li)
                }
                div.appendChild(ul)
                cartDiv.appendChild(div)
            }

        })
}
// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

let buttonRecipes = document.getElementById('buttonRecipes');
buttonRecipes.onclick= function () {
    cartDiv.innerText=''
    fetch('https://dummyjson.com/recipes')
        .then(res =>res.json())
        .then(recipesObj => {
            const {recipes} = recipesObj
            console.log(recipes)
            for (const recipe of recipes) {
                let div = document.createElement('div')
                div.innerText=`
                ID: ${recipe.id}
                Name:${recipe.name}
                PrepTimeMinutes: ${recipe.prepTimeMinutes}
                CookTimeMinutes: ${recipe.cookTimeMinutes}
                Servings: ${recipe.servings}
                Difficulty${recipe.difficulty}
                Cuisine:${recipe.cuisine}
                caloriesPerServing:${recipe.caloriesPerServing}
                UserId: ${recipe.userId}
                Rating: ${recipe.rating}
                ReviewCount:${recipe.reviewCount}
                `
                const ul = document.createElement('ul')
                const ingredients =document.createElement('p')
                ingredients.classList.add('someStyle')
                ingredients.innerText='Ingredients'
                div.appendChild(ingredients);
                for (const ingredients of recipe.ingredients) {
                    const li = document.createElement('li')
                    li.innerText= ingredients
                    ul.appendChild(li)
                }
                div.appendChild(ul)
                const instructionP =document.createElement('p')
                instructionP.classList.add('someStyle')
                instructionP.innerText='Instruction'
                div.appendChild(instructionP);
                for (const instruction of recipe.instructions) {
                    const pInstruction =document.createElement('p')
                    pInstruction.innerText=instruction
                    div.appendChild(pInstruction)
                }
                const tagsP =document.createElement('p')
                tagsP.classList.add('someStyle')
                tagsP.innerText='Tags'
                div.appendChild(tagsP);
                for (const tags of recipe.tags) {
                    const pTags =document.createElement('p')
                    pTags.innerText=tags
                    div.appendChild(pTags)
                }
                let img= document.createElement('img')
                img.src = recipe.image
                img.classList.add('productImg')
                div.classList.add('cardDivTwo')
                div.appendChild(img)
                cartDiv.appendChild(div)
            }
        })
}























