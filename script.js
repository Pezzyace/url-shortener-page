const urlInput = document.getElementById('urlInput');
const shortenBtn = document.getElementById('shortenBtn');


shortenBtn.addEventListener("click", () => {
  const url = urlInput.value;

  shortenUrl(url);
})

async function shortenUrl(url){
  try{
    const res = await fetch('https://api.shrtco.de/v2/shorten?url=${url}');
    const data = res.json();

    const newUrl = document.createElement('div');
    newUrl.innerHtml = `
      <div>
       button class="" id="copyBtn">Copy</button>
      </div>
    `

    result.prepend(newUrl);
    const copyBtn = document.querySelector('#copyBtn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent)
    })
    input.value = "";

  }catch (error) {
    console.log(error);
  }
}



// var endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";


// function getUrl() {
//   var url = urlInput.value;
//   var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");

//   if(!protocol_ok){
//     newUrl = "https://"+url;
//     return newUrl;
//   }else {
//     return url;
//   }
// }

// function getRandom() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 5; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//   return text;
// }

// function genHash(){
//   if (window.location.hash == ""){
//       window.location.hash = getRandom();
//   }
// }

// shortenBtn.addEventListener("click", () => {
//   var longUrl = getUrl();
//   send_request(longUrl);
// })

// function send_request(url) {
//   this.url = url;
//   $.ajax({
//     'url': endpoint + "/" + window.location.hash.substr(1),
//     'type': 'POST',
//     'data': JSON.stringify(this.url),
//     'dataType': 'json',
//     'contentType': 'application/json; charset=utj-8'
//   })
// }
