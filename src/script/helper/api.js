import axios from "axios";

async function gameList(){
    const response = await axios.get('http://localhost:3000/app/game/')
    return response.data
}

async function oneGame(id){
    const response = await axios.get('http://localhost:3000/app/game/' +id)
    return response.data[0]
}
async function authentification(user){
    const token = await axios.post('http://localhost:3000/app/login', {
        login : user.login,
        password: user.password
    })
    return token.data
}
export default {
    gameList,
    oneGame,
    authentification
}