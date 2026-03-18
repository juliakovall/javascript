export function initSlider({
  selector,
  autoplay = true,
  withDots = false,
  withArrows = true,
  autoplaySpeed = 5000,
}) {
  const slider = document.querySelector(selector);
  const slides = Array.from(slider.children);
  const arrowsStyles =
    "bg-light-accent rounded-full min-w-10 min-h-10 flex items-center justify-center text-white text-lg cursor-pointer";
  let activeSlideIndex = 0;
  let intervalId = null;
  let isPlaying = autoplay;

  const changeSlide = () => {
    slides.forEach((slide, index) => {
      slide.classList.add("hidden");

      if (withDots) {
        changeDots(false, index);
      }

      if (index === activeSlideIndex) {
        slide.classList.remove("hidden");

        if (withDots) {
          changeDots(true, index);
        }
      }
    });
  };

  const nextSlide = () => {
    activeSlideIndex =
      activeSlideIndex === slides.length - 1 ? 0 : activeSlideIndex + 1;
    changeSlide();
  };

  const prevSlide = () => {
    activeSlideIndex =
      activeSlideIndex === 0 ? slides.length - 1 : activeSlideIndex - 1;
    changeSlide();
  };

  const createArrows = () => {
    const leftArrow = document.createElement("button");
    leftArrow.innerText = "<";
    leftArrow.className = arrowsStyles + " -order-1";
    leftArrow.addEventListener("click", prevSlide);

    const rightArrow = document.createElement("button");
    rightArrow.innerText = ">";
    rightArrow.className = arrowsStyles + " order-999";
    rightArrow.addEventListener("click", nextSlide);

    slider.appendChild(leftArrow);
    slider.appendChild(rightArrow);
    slider.classList.add("flex", "items-center", "justify-center", "gap-4");
  };

  const createDots = () => {
    const dotsContainer = document.createElement("ul");
    dotsContainer.className = "flex gap-3 absolute -bottom-6";

    slides.forEach((_, index) => {
      const dotWrap = document.createElement("li");
      const dot = document.createElement("button");

      dot.id = "dot-" + index;
      dot.className =
        "w-3 h-3 rounded-full bg-light-accent cursor-pointer inline-block";

      if (index === activeSlideIndex) {
        dot.classList.remove("bg-light-accent");
        dot.classList.add("bg-dark-accent");
      }

      dot.addEventListener("click", () => {
        activeSlideIndex = index;
        changeSlide();
      });

      dotWrap.appendChild(dot);
      dotsContainer.appendChild(dotWrap);
    });

    slider.appendChild(dotsContainer);
    slider.classList.add("relative");
  };

  const changeDots = (isActive, index) => {
    const dot = slider.querySelector("#dot-" + index);

    if (!dot) return;

    if (isActive) {
      dot.classList.add("bg-dark-accent");
      dot.classList.remove("bg-light-accent");
    } else {
      dot.classList.remove("bg-dark-accent");
      dot.classList.add("bg-light-accent");
    }
  };

  document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "ArrowRight") {
      nextSlide();
    }

    if (event.key === "ArrowLeft") {
      prevSlide();
    }
  });

  const startAutoplay = () => {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, autoplaySpeed);
  };

  const stopAutoplay = () => {
    clearInterval(intervalId);
  };

  const createToggleButton = () => {
    const btn = document.createElement("button");
    btn.innerText = "Pause";
    btn.className = "p-2 bg-gray-500 text-white rounded";

    btn.addEventListener("click", () => {
      if (isPlaying) {
        stopAutoplay();
        btn.innerText = "Play";
      } else {
        startAutoplay();
        btn.innerText = "Pause";
      }

      isPlaying = !isPlaying;
    });

    slider.appendChild(btn);
  };

  let startX = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      nextSlide();
    }

    if (endX - startX > 50) {
      prevSlide();
    }
  });

  let mouseStartX = 0;

  slider.addEventListener("mousedown", (e) => {
    mouseStartX = e.clientX;
  });

  slider.addEventListener("mouseup", (e) => {
    const mouseEndX = e.clientX;

    if (mouseStartX - mouseEndX > 50) {
      nextSlide();
    }

    if (mouseEndX - mouseStartX > 50) {
      prevSlide();
    }
  });

  if (autoplay) {
    startAutoplay();
    createToggleButton();
  }

  if (withArrows) {
    createArrows();
  }

  if (withDots) {
    createDots();
  }

  changeSlide();
}
