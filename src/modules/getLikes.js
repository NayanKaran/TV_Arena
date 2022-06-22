

const getLikes = async()=> {
    let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3Y7HSVLcqPA4r09cNaET/likes');
    let data = response.json()
    return data
}

const displayLikes = async()=>{
    let likes = await getLikes();
    
    likes.forEach(item =>{
        const likespara = document.getElementById(`${item.item_id}`)
        likespara.textContent = item.likes + ' Likes';
    })
}

export default displayLikes;