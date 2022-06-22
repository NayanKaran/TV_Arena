

const getLikes = async()=> {
    let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3Y7HSVLcqPA4r09cNaET/likes');
    let data = response.json()
    return data
}

export default getLikes;