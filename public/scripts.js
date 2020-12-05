const recipesDetail = document.querySelectorAll(".recipes-detail")



for(let recipe of recipesDetail) {
    recipe.addEventListener("click", function() {
        const getRecipe = recipe.getAttribute('id')
        window.location.href = `/recipes-detail/${getRecipe}`
    })
}


function mostrar(id) {
    if(document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block'

        let lang = document.getElementById('ingredients')
        lang.querySelector('button').innerHTML = 'Esconder'
        
    } else {
        document.getElementById(id).style.display = 'none'
        
        let lang = document.getElementById('ingredients')
        lang.querySelector('button').innerHTML = 'Mostrar'

    }
}

function mostrar2(id) {
    if(document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block'

        let lang = document.getElementById('preparation')
        lang.querySelector('button').innerHTML = 'Esconder'
        
    } else {
        document.getElementById(id).style.display = 'none'
        
        let lang = document.getElementById('preparation')
        lang.querySelector('button').innerHTML = 'Mostrar'

    }
}

function mostrar3(id) {
    if(document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block'

        let lang = document.getElementById('add-infos')
        lang.querySelector('button').innerHTML = 'Esconder'
        
    } else {
        document.getElementById(id).style.display = 'none'
        
        let lang = document.getElementById('add-infos')
        lang.querySelector('button').innerHTML = 'Mostrar'

    }
}