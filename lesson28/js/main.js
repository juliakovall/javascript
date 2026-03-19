import toastLib from "./toast.js";
import { Slider } from "./slider-class.js";

const toasts = toastLib("top-left");

toasts.renderToast("Hello, World!", "success");
toasts.renderToast("Hello, World 2!", "warning");

const slider = new Slider({
  selector: "#mySlider",
  autoplay: true,
  withDots: true,
  withArrows: true,
  autoplaySpeed: 1000,
});

slider.init();

export const getSum = (a, b) => a + b;
