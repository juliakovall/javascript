export class Slider {
  constructor({
    selector,
    autoplay = true,
    withDots = false,
    withArrows = true,
    autoplaySpeed = 5000,
  }) {
    this.selector = selector;
    this.autoplay = autoplay;
    this.withDots = withDots;
    this.withArrows = withArrows;
    this.autoplaySpeed = autoplaySpeed;

    this.slider = document.querySelector(this.selector);

    if (!this.slider) {
      console.error(`Slider not found: ${this.selector}`);
      return;
    }

    this.slides = Array.from(this.slider.children);
    this.activeSlideIndex = 0;
    this.intervalId = null;
    this.isPlaying = this.autoplay;
    this.startX = 0;
    this.mouseStartX = 0;
    this.arrowsStyles =
      "bg-light-accent rounded-full min-w-10 min-h-10 flex items-center justify-center text-white text-lg cursor-pointer";
  }

  changeSlide() {
    this.slides.forEach((slide, index) => {
      slide.classList.add("hidden");

      if (this.withDots) {
        this.changeDots(false, index);
      }

      if (index === this.activeSlideIndex) {
        slide.classList.remove("hidden");

        if (this.withDots) {
          this.changeDots(true, index);
        }
      }
    });
  }

  nextSlide() {
    this.activeSlideIndex =
      this.activeSlideIndex === this.slides.length - 1
        ? 0
        : this.activeSlideIndex + 1;

    this.changeSlide();
  }

  prevSlide() {
    this.activeSlideIndex =
      this.activeSlideIndex === 0
        ? this.slides.length - 1
        : this.activeSlideIndex - 1;

    this.changeSlide();
  }

  createArrows() {
    const leftArrow = document.createElement("button");
    leftArrow.innerText = "<";
    leftArrow.className = this.arrowsStyles + " -order-1";
    leftArrow.addEventListener("click", () => this.prevSlide());

    const rightArrow = document.createElement("button");
    rightArrow.innerText = ">";
    rightArrow.className = this.arrowsStyles + " order-999";
    rightArrow.addEventListener("click", () => this.nextSlide());

    this.slider.appendChild(leftArrow);
    this.slider.appendChild(rightArrow);
    this.slider.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "gap-4",
    );
  }

  createDots() {
    const dotsContainer = document.createElement("ul");
    dotsContainer.className = "flex gap-3 absolute -bottom-6";

    this.slides.forEach((_, index) => {
      const dotWrap = document.createElement("li");
      const dot = document.createElement("button");

      dot.id = "dot-" + index;
      dot.className =
        "w-3 h-3 rounded-full bg-light-accent cursor-pointer inline-block";

      if (index === this.activeSlideIndex) {
        dot.classList.remove("bg-light-accent");
        dot.classList.add("bg-dark-accent");
      }

      dot.addEventListener("click", () => {
        this.activeSlideIndex = index;
        this.changeSlide();
      });

      dotWrap.appendChild(dot);
      dotsContainer.appendChild(dotWrap);
    });

    this.slider.appendChild(dotsContainer);
    this.slider.classList.add("relative");
  }

  changeDots(isActive, index) {
    const dot = this.slider.querySelector("#dot-" + index);

    if (!dot) return;

    if (isActive) {
      dot.classList.add("bg-dark-accent");
      dot.classList.remove("bg-light-accent");
    } else {
      dot.classList.remove("bg-dark-accent");
      dot.classList.add("bg-light-accent");
    }
  }

  initKeyboard() {
    document.addEventListener("keydown", (event) => {
      console.log(event.key);

      if (event.key === "ArrowRight") {
        this.nextSlide();
      }

      if (event.key === "ArrowLeft") {
        this.prevSlide();
      }
    });
  }

  startAutoplay() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.nextSlide(), this.autoplaySpeed);
  }

  stopAutoplay() {
    clearInterval(this.intervalId);
  }

  createToggleButton() {
    const btn = document.createElement("button");
    btn.innerText = "Pause";
    btn.className = "p-2 bg-gray-500 text-white rounded";

    btn.addEventListener("click", () => {
      if (this.isPlaying) {
        this.stopAutoplay();
        btn.innerText = "Play";
      } else {
        this.startAutoplay();
        btn.innerText = "Pause";
      }

      this.isPlaying = !this.isPlaying;
    });

    this.slider.appendChild(btn);
  }

  initTouch() {
    this.slider.addEventListener("touchstart", (e) => {
      this.startX = e.touches[0].clientX;
    });

    this.slider.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;

      if (this.startX - endX > 50) {
        this.nextSlide();
      }

      if (endX - this.startX > 50) {
        this.prevSlide();
      }
    });
  }

  initMouseDrag() {
    this.slider.addEventListener("mousedown", (e) => {
      this.mouseStartX = e.clientX;
    });

    this.slider.addEventListener("mouseup", (e) => {
      const mouseEndX = e.clientX;

      if (this.mouseStartX - mouseEndX > 50) {
        this.nextSlide();
      }

      if (mouseEndX - this.mouseStartX > 50) {
        this.prevSlide();
      }
    });
  }

  initHoverPause() {
    this.slider.addEventListener("mouseenter", () => {
      if (this.autoplay) {
        this.stopAutoplay();
      }
    });

    this.slider.addEventListener("mouseleave", () => {
      if (this.autoplay && this.isPlaying) {
        this.startAutoplay();
      }
    });
  }

  init() {
    if (!this.slider) return;

    if (this.autoplay) {
      this.startAutoplay();
      this.createToggleButton();
    }

    if (this.withArrows) {
      this.createArrows();
    }

    if (this.withDots) {
      this.createDots();
    }

    this.initKeyboard();
    this.initTouch();
    this.initMouseDrag();
    this.initHoverPause();
    this.changeSlide();
  }
}
