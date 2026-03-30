console.log("#11. JavaScript homework example file");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidUrl(url) {
  const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
  return regex.test(url);
}

export { isValidEmail, isValidUrl };
