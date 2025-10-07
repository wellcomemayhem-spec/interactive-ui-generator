document.querySelectorAll('.component').forEach(button => {
    button.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        createComponent(type);
    });
});

function createComponent(type) {
    const canvas = document.getElementById('canvas');
    let element;
    switch(type) {
        case 'button':
            element = document.createElement('button');
            element.innerText = 'New Button';
            break;
        case 'modal':
            element = document.createElement('div');
            element.innerHTML = '<div class="modal">New Modal</div>';
            break;
        case 'form':
            element = document.createElement('form');
            element.innerHTML = '<input type="text" placeholder="Enter something" />';
            break;
        default:
            return;
    }
    canvas.appendChild(element);
    element.style.position = 'absolute';
    element.style.top = Math.random() * 400 + 'px';
    element.style.left = Math.random() * 400 + 'px';
}