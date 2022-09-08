class SwiperSlider {
    constructor(el, options) {
        this.el = el;
        const defaultOptions = {
            speed: 2000
        }
        this.options = Object.assign(defaultOptions, options);
        this.swiper = this._initSwiper();
    }
    _initSwiper() {
        return new Swiper(this.el, this.options);
    }
    start(options = {}) {
        options = Object.assign({
            delay: 5000,
            disableOnInteraction: false
        }, options);

        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}