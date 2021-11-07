const barLeft = document.querySelector('.header_barLeft');

barLeft.addEventListener('click', (e) => {
    const barClass = e.target.classList;
    // Select the container
    const 
        container = document.querySelector('.sidebar'),
        leftArrow = document.querySelector('.fa-arrow-left'),
        rightArrow = document.querySelector('.fa-arrow-right');
    // Conditional
    if(barClass.contains('fa-arrow-left')) {
        // Close the sidebar menu
        container.classList.add('u-hidden-menu');
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'block';
    } else if(barClass.contains('fa-arrow-right')) {
        // Open the sidebar menu
        container.classList.remove('u-hidden-menu');
        rightArrow.style.display = 'none';
        leftArrow.style.display = 'block';
    }
})