"use strict"

const btn = document.querySelector('.btn-banner');
const banner = document.querySelector('.banner');

btn.addEventListener('click', btnClick);

function btnClick () {
    if (banner.className.includes('banner')) {
        banner.classList = '';
        btn.classList.add('btn-banner-madeOf')
        btn.classList.remove('btn-banner-madeOn')

    } else {
        banner.classList = 'banner';
        btn.classList.remove('btn-banner-madeOf')
        btn.classList.add('btn-banner-madeOn')


    }
}

console.log(banner.className);