const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const recipesDetail = document.querySelectorAll(".recipes-detail")

for(let recipe of recipesDetail) {
    recipe.addEventListener("click", function() {
         const recipeImg = recipe.querySelector('img')
         const recipeName = recipe.querySelector('h4')
         const recipeAuthor = recipe.querySelector('p')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `${recipeImg}`
    })
}


// Lógica para fechar o modal
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})
