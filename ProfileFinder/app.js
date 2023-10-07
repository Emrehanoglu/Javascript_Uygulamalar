const profile = new Profile()
const ui = new UI()
const searchProfile = document.querySelector('#searchProfile')

searchProfile.addEventListener('keyup',(element) => {
    ui.clear() /* verilen uyarı ekranda kalmamış olacak */
    let text = element.target.value
    if(text !== ''){
        profile.getProfile(text)
        .then(res => {
            if(res.profile.length === 0){
                /* uyarı verilecek */
                ui.showAlert(text)
            }else{
                ui.showProfile(res.profile[0])
                ui.showToDo(res.todo)
            }
        })
        .catch(err => {
            ui.showAlert(text)
        })
    }
})