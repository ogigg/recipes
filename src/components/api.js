

export const getAllRecipes = async() => {
    return await fetch('http://localhost:4000/api/recipes')
    .then(response => response.json())
    // .then(response => console.log(response))
}

export const getRecipe = async(id) => {
    return await fetch(`http://localhost:4000/api/recipes/${id}`)
    .then(response => response.json())
    // .then(response => console.log(response))
}

export const deleteRecipe = async(id) => {
    return await fetch(`http://localhost:4000/api/recipes/${id}`,{
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => console.log(response))
}

