
function showAndHiddenMoreImages(){
    const showPics = document.querySelector('#showPics');

showPics.addEventListener('click', ()=>{
    const showImages = document.querySelector('.gallery-container-hidden');
    showImages.classList.toggle('active');
    if(showImages.classList.contains('active')){
        showPics.innerText = 'Ver menos'
    }else{
        showPics.innerText = 'Ver mais'
    }
})
}
showAndHiddenMoreImages();