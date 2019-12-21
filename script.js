const HOME_GROUP = 'home-group';
const WORK_GROUP = 'show-me-your-work-group';
const WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
const SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
const CONTACT_GROUP = 'contact-group';


// const HOME_GROUP_BTN = 'home-group';
// const WORK_GROUP = 'show-me-your-work-group';
// const WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
// const SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
// const CONTACT_GROUP = 'contact-group';

document.querySelectorAll('.message-block').forEach((el) => el.style.top = "0px");
document.querySelectorAll('.group-container').forEach((el, i) => el.style.order = i);

document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).addEventListener('click', () => {
    document.getElementById(WORK_GROUP).classList.remove('hidden');
    createGallery('.gallery-block-show-me-your-work');
});

document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).addEventListener('click', () => {
    document.getElementById(WHAT_YOU_CAN_DO_GROUP).classList.remove('hidden');
});

document.querySelector(`#${WORK_GROUP} .what-you-can-do-btn`).addEventListener('click', () => {
    document.getElementById(WHAT_YOU_CAN_DO_GROUP).classList.remove('hidden');
});

document.querySelector(`#${WORK_GROUP} .smooth-animation-btn`).addEventListener('click', () => {
    document.getElementById(SMOOTH_ANIMATION_GROUP).classList.remove('hidden');
    createGallery('.gallery-block-smooth-animation');
});

document.querySelector(`#${WHAT_YOU_CAN_DO_GROUP} .show-me-your-work-btn`).addEventListener('click', () => {
    document.getElementById(WORK_GROUP).classList.remove('hidden');
    createGallery('.gallery-block-show-me-your-work');
});

document.querySelector(`#${WHAT_YOU_CAN_DO_GROUP} .contact-btn`).addEventListener('click', () => {
    document.getElementById(CONTACT_GROUP).classList.remove('hidden');
});

document.querySelector(`#${SMOOTH_ANIMATION_GROUP} .what-you-can-do-btn`).addEventListener('click', () => {
    document.getElementById(WHAT_YOU_CAN_DO_GROUP).classList.remove('hidden');
});

document.querySelector(`#${SMOOTH_ANIMATION_GROUP} .contact-btn`).addEventListener('click', () => {
    document.getElementById(CONTACT_GROUP).classList.remove('hidden');
});

createGallery('.gallery-block-home-group');

emergence.init({
    container: window,
    reset: false,
    handheld: true,
    throttle: 25,
    elemCushion: 0.15,
    offsetTop: 0,
    offsetRight: 0,
    offsetBottom: 0,
    offsetLeft: 0,
    callback: function (element, state) {
        var getVisibles = document.querySelectorAll('.message-block[data-emergence=visible]');
        getVisibles.forEach((el) => {
            const domRectTop = el.getBoundingClientRect().top;
            const outerHeight = window.outerHeight;
            if (domRectTop >= 0 && domRectTop <= (outerHeight)) {
                const elementClientPosition = (domRectTop / outerHeight) * 100;
                if (elementClientPosition >= 0 && elementClientPosition <= 8) {
                    el.style.top = ((((domRectTop) / outerHeight) * 100) + -120) + 'px';
                } else if (elementClientPosition > 8 && elementClientPosition <= 25) {
                    el.style.top = ((((domRectTop) / outerHeight) * 100) + -100) + 'px';
                } else if (elementClientPosition > 25 && elementClientPosition <= 50) {
                    el.style.top = ((((domRectTop) / outerHeight) * 100) + -85) + 'px';
                } else if (elementClientPosition > 50 && elementClientPosition <= 75) {
                    el.style.top = ((((domRectTop) / outerHeight) * 70) + -60) + 'px';
                } else if (elementClientPosition > 75 && elementClientPosition <= 100) {
                    el.style.top = ((((domRectTop) / outerHeight) * 50) + -40) + 'px';
                }
            }
        });
    }
});

function createGallery(selector, horizontalAlign) {
    const _horizontalAlign = horizontalAlign == 'right' ? horizontalAlign : 'left';
    const galleryBlockHomeGroup = document.querySelector(selector);
    galleryBlockHomeGroup.style.position = 'relative';
    const galleryBlockHomeGroupChildrenCount = galleryBlockHomeGroup.childElementCount;
    const galleryBlockHomeGroupChildrenOffsetWidth = galleryBlockHomeGroup.offsetWidth;
    const galleryBlockHomeGroupChildrenOffset = (galleryBlockHomeGroupChildrenCount * (galleryBlockHomeGroupChildrenOffsetWidth / galleryBlockHomeGroupChildrenCount)) / 1.5;
    galleryBlockHomeGroup.style[_horizontalAlign] = -galleryBlockHomeGroupChildrenOffset + 'px';
    let galleryBlockHomeGroupStep = 0;

    galleryBlockHomeGroup.addEventListener('click', () => {
        const galleryBlockHomeGroupPos = parseInt(galleryBlockHomeGroup.style[_horizontalAlign].replace('px', ''));
        galleryBlockHomeGroupStep++;
        if (galleryBlockHomeGroupStep >= galleryBlockHomeGroupChildrenCount) {
            galleryBlockHomeGroup.style[_horizontalAlign] = -galleryBlockHomeGroupChildrenOffset + 'px'
            galleryBlockHomeGroupStep = 0;
        } else {
            if (galleryBlockHomeGroupStep == galleryBlockHomeGroupChildrenCount - 1) {
                galleryBlockHomeGroup.style[_horizontalAlign] = '0px';
            } else {
                galleryBlockHomeGroup.style[_horizontalAlign] = (galleryBlockHomeGroupPos) + (galleryBlockHomeGroupChildrenOffsetWidth / galleryBlockHomeGroupChildrenCount) + 'px';
            }
        }
    });
}

function getScrollPosition() {
    return scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
}

this.setTimeout(function () {
    window.scrollTo(0, 0);
}, 200);