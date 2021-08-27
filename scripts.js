const a=document.querySelectorAll('.panel');
a.forEach(panel=>{
  panel.addEventListener('click',()=>{
    remove()
    panel.classList.add('active');
  })
})
function remove(){
  a.forEach(panel=>{
    panel.classList.remove('active');

  })
}