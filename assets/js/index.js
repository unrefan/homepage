window.addEventListener('load', function () {
    document.querySelector('.js-avatar').addEventListener('click', function () {
        animateCSS('.fire', 'move-left');
        animateCSS('.page', 'border-pulse');
    })
});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
