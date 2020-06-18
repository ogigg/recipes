import { pageUrl } from './settings'

export const getAllRecipes = async() => {
    return await fetch(`${pageUrl}/api/recipes`)
    .then(response => response.json())
    // .then(response => console.log(response))
}

export const getRecipe = async(id) => {
    return await fetch(`${pageUrl}/api/recipes/${id}`)
    .then(response => response.json())
    // .then(response => console.log(response))
}

export const deleteRecipe = async(id) => {
    return await fetch(`${pageUrl}/api/recipes/${id}`,{
        method: 'DELETE',
    })
    .then(response => response.json())
    // .then(response => console.log(response))
}

