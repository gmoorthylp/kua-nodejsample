const url = require('url');

const myUrl = new URL('http://kuathunai.com/hello.html?name=Kaneeshka&name1=kaari');

console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));
