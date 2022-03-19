document.addEventListener("mousemove", function(e)
{
    const bg = document.querySelector('.bg');
    const woman = document.querySelector('.woman');
    const content = document.querySelector('.content');

    bg.style.width = 100 + e.pageX/100 + '%';
    bg.style.height = 100 + e.pageX/100 + '%';

    woman.style.right = 100 + e.pageX/2 + 'px';

    content.style.left = 100 + e.pageX/2.9 + 'px';

})