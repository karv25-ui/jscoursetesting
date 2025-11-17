function setBackgroundImage(elementId, imageUrl) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundImage = `${imageUrl}`;
        element.style.backgroundSize = 'cover';
        element.style.backgroundPosition = 'center';
        element.stlye.color = 'white';
        element.style.padding = '40px';
        element.style.height = '300px';
        element.style.textAlign = 'center';   
    }
}

