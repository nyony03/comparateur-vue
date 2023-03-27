import axios from "axios";

async function gameList(){
    const response = await axios.get('http://localhost:3000/app/game/')
    return response.data
}

async function oneGame(id){
    const response = await axios.get('http://localhost:3000/app/game/' +id)
    return response.data[0]
}

async function registration(user){
    return await axios.post('http://localhost:3000/app/user/',{
        login : user.login,
        email : user.email,
        password: user.password,
        role: 'user'
    })
}

async function authentification(user){
    const token = await axios.post('http://localhost:3000/app/login', {
        login : user.login,
        password : user.password
    })
    return token.data
}

async function createGame(game, token){
    return await axios.post('http://localhost:3000/app/game/', {
        price: game.price,
        name: game.name,
        description: game.description,
        type: game.type,
        platform: game.platform,
        url: game.url,
        url2: game.url2
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default {
    gameList,
    oneGame,
    authentification,
    createGame,
    registration
}
