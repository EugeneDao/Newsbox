let url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=277f8ff1c93f4d7c98cbb220e9fc9d5b";
async function getApi(url) {
  const response = await fetch(url);
  let data = await response.json();
  let headlines = data.articles;
  headlines.forEach(element => {
    
  }
  console.log(headlines[0]);
}
getApi(url);

//       const data = await conn.json();
//       readAPI(json);
//       function readAPI(data) {
// const app = document.getElementById('app');
// const h1 = document.createElement('h1');
// h1.innerHTML = data.title;
//       }

function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
