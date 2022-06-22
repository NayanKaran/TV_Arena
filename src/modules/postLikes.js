

const postData = () =>{
    const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a2tSbPCwHIrhAyfjwKEq/likes`
    const likespara = document.querySelectorAll('.likes');
    likespara.forEach(item =>{
        item.addEventListener('click', ()=>{
            const postInfo = async () => {
                const newVariable = item.nextElementSibling;
                const heartIcon = newVariable.previousElementSibling
                heartIcon.classList.remove('fa-regular')
                heartIcon.classList.add('fa-solid')
                const heart = newVariable.id;
                newVariable.textContent = Number(newVariable.textContent) + 1;

                const response = await fetch (apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },                  
                    body: JSON.stringify({
                        item_id: heart
                    }),        
                }) 
                const responseMessage = await response.text();
                console.log(responseMessage)              
            }  
            postInfo();
             
        })         
    })
    
}

export default postData;
