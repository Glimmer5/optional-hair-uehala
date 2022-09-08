document.addEventListener('DOMContentLoaded', function() {
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this._observers = [];
        this._init();
    }
    set observers(val) {
        this._observers.push(val);
    }
    get observers() {
        return this._observers;
    }
    _init() {
        new MobileMenu();
        this.hero1 = new SwiperSlider('.slider1', {loop: true, effect: 'fade'});
        this.hero2 = new SwiperSlider('.slider2', {slidesPerView: 1.5, spaceBetween: 30, speed: 500, grabCursor: true, breakpoints: {600: {slidesPerView: 2.5}}});
        this.hero3 = new SwiperSlider('.slider3', {effect: 'cards', grabCursor: true});
        this._scrollInit();
    }
    _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }
    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero1.start();
        } else {
            this.hero1.stop();
        }
    }
    _scrollInit() {
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
        this.observers = new ScrollObserver('.slider1', this._toggleSlideAnimation.bind(this), {once: false});
    }
}