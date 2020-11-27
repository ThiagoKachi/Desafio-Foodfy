const modalOverlay = document.querySelector(".modal-overlay")
const recipesDetail = document.querySelectorAll(".recipes-detail")
const modalContent = document.querySelector(".modal-content")


for(let recipe of recipesDetail) {
    recipe.addEventListener("click", function() {
        modalOverlay.classList.add('active')
        const image = recipe.querySelector('img').src
        const nameRecipe = recipe.querySelector('h4').innerHTML
        const author = recipe.querySelector('p').innerHTML
        modalContent.querySelector('img').src = `${image}`
        modalContent.querySelector('h4').innerText = `${nameRecipe}`
        modalContent.querySelector('p').innerText = `${author}`
    })
}

// Lógica para fechar o modal
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("modal-content") = ""
})