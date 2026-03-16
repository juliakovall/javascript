console.log("#8. JavaScript homework example file");

function createDomElement(tagName, textContent, container) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  container.appendChild(element);
  return element;
}

function setUserInfoCookie(key, value) {
  const encoded = encodeURIComponent(`${key}=${value}`);
  const date = new Date();
  date.setSeconds(date.getSeconds() + 10);
  document.cookie = `userInfo=${encoded}; expires=${date.toUTCString()}; path=/`;
  console.log("User info saved in cookie");
}

function saveUserInfo(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
  const value = sessionStorage.getItem(key);
  console.log(`Retrieved ${key}: ${value}`);
  return value;
}

export { createDomElement, setUserInfoCookie, saveUserInfo, getUserInfo };

const container = document.body;
createDomElement("p", "Hello", container);

setUserInfoCookie("language", "en");

saveUserInfo("username", "JuliaK");
console.log(getUserInfo("username"));
