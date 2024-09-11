const openBtn = document.querySelector("button")
const closeBtn = document.getElementById("close")
const model = document.getElementById("model")
const form = document.querySelector('form')


const openModel = () => {
    model.style.display = 'grid';
}

const closeModel = ()=>{
    model.classList.add('close-model-animation')
    setTimeout(()=>{
        model.style.display = 'none'
        window.location.reload()        
    }, 500)
}

openBtn.addEventListener("click", openModel);

closeBtn.addEventListener('click',closeModel)

model.addEventListener('click', (e)=>{
    if(e.target.classList.contains('model')){
        closeModel();
    }
})


// Message to show after subscription
form.addEventListener('submit',() => {
  const card = document.querySelector('.card');
  card.innerHTML = '<h1>Thanks for your Subscription</h1>'
  setTimeout(()=>{
    closeModel()
  },3000)
})