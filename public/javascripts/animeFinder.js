function getAllAnime(){
    fetch("https://api.aniapi.com/v1/anime", {
      "method": "GET",
      "headers": {}
    })
    .then(response => {
      let data = response.json().documents
      console.log(data);
    //   data.forEach(element => {
          
    //   });
    })
    .catch(err => {
      console.error(err);
    });
}

function getRecommend(){
    let value = document.getElementById("name").value
    console.log(value);
}