function curriedDomain(protocol) {
  return function (domainName) {
    return function (tld) {
      return protocol + "://" + domainName + "." + tld;
    };
  };
}
console.log(curriedDomain("https")("example")("com"));
export { curriedDomain };
