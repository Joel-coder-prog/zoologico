const galeria = document.querySelectorAll('.galery-contents .img-card img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');

galeria.forEach((images)=>{
    images.addEventListener("click", (Event) => {
        modal.style.display = "block";
        let srcImagen = Event.target.src;
        let altImagen = Event.target.alt;

        imgModal.src = srcImagen;
        caption.innerHTML = altImagen;
    });

});

document.querySelector('#closeModal').addEventListener('click', () =>{
    modal.style.display = "none";
})