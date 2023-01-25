let elForm = document.querySelector('.form')
let elInp = document.querySelector('.inp')
let elList = document.querySelector('.list')
const users = []
elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    elList.innerHTML = ''
    users.push(elInp.value)
   window.localStorage.setItem('users', JSON.stringify(users))
   const data = JSON.parse(window.localStorage.getItem('users'))
   mapper(data)
   elInp.value = ''
})
const data = JSON.parse(window.localStorage.getItem('users'))
if(data){
    mapper(data)
}else{
    console.log(chaqirmadim);
}
function mapper(data){
    data.forEach((e)=>{
        let newLi = document.createElement('li')
        let newP = document.createElement('p')
        let newButton = document.createElement('button')
        newP.textContent = e
        newButton.id = e
        newButton.textContent = 'del'
        newButton.id = e
        newButton.classList = 'remove'
        
        newLi.appendChild(newP)
        newLi.appendChild(newButton)
        elList.appendChild(newLi)

        newButton.addEventListener('click', (e)=>{
            const localData = JSON.parse(window.localStorage.getItem('users'))
            const filData = localData.filter((f)=> f != e.target.id)
            elList.innerHTML = ''
            mapper(filData)
            window.localStorage.setItem('users', JSON.stringify(filData))
        })
    })
}