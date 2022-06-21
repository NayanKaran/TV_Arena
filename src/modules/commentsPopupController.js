import {} from './commentsPopupViewer.js'

function getShowID(id) {

}

export default addEventListnersToTheCommentsButtons() {
    const comments = document.querySelectorAll(".comments")
    comments.forEach(el => {
        el.addEventListener( event => {
            showCommentsPopUp(getShowID(event.target.id))
        })
    })
}