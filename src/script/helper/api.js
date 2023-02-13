import axios from "axios";

async function gameList(){
    const response = await axios.get('http://localhost:3000/app/game/')
    return response.data
}

async function oneGame(id){
    const response = await axios.get('http://localhost:3000/app/game/' +id)
    return response.data[0]
}

export default {
    gameList,
    oneGame
}