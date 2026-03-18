import toastLib from "./toast.js";
import { initSlider } from "./slider.js";

const toasts = toastLib("top-left");

toasts.renderToast("Hello, World!", "success");
toasts.renderToast("Hello, World 2!", "warning");

initSlider({
  selector: "#mySlider",
  autoplay: true,
  autoplaySpeed: 1000,
  withDots: true,
  withArrows: true,
});

export const getSum = (a, b) => a + b;
