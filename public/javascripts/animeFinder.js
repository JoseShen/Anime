function getAllAnime() {
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

function getResources() {
    fetch("https://api.aniapi.com/v1/resources/1.0/0", {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            let selectableGenres = data.data.genres
            let divGenre = document.getElementById("genres") // Genre Div
            let unorderList = document.createElement("ul")
            unorderList.id = "limheight"
            selectableGenres.forEach(genre => {
                // Add a checkbox for each genre
                let listItem = document.createElement("li")
                let genreCheckbox = document.createElement("input")
                let label = document.createElement("label")

                label.innerText = genre
                label.htmlFor = genre
                genreCheckbox.className = "genre"
                genreCheckbox.type = "checkbox"
                genreCheckbox.id = genre
                genreCheckbox.value = genre

                listItem.appendChild(label)
                listItem.appendChild(genreCheckbox)
                listItem.appendChild(document.createElement("br"))

                unorderList.appendChild(listItem)
            });
            divGenre.appendChild(unorderList)
        })
        .catch(err => {
            console.error(err);
        });
}

function getRecommend() {
    let checkboxes = document.getElementsByClassName("genre")

    let selectableGenres = ""
    for (let index = 0; index < checkboxes.length; index++) {
        const element = checkboxes[index];
        // console.log(element.checked);
        if (element.checked) {
            selectableGenres += element.value + ","
        }

    }

    let found = document.getElementById("found")
    let foundanime = document.getElementById("foundanime")
    foundanime.remove()
    foundanime = document.createElement("div")
    foundanime.id = "foundanime"
    found.appendChild(foundanime)

    let nsfw = document.getElementById("nsfw").checked
    // console.log(`https://api.aniapi.com/v1/anime?genres=${selectableGenres}&nsfw=${nsfw}`);

    let url = ""

    if (selectableGenres.length == 0) {
        url = `https://api.aniapi.com/v1/anime?nsfw=${nsfw}`
    }
    else {
        url = `https://api.aniapi.com/v1/anime?genres=${selectableGenres}&nsfw=${nsfw}`
    }
    console.log(url);
    fetch(url, {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(data => {
            // let found = document.getElementById("found")
            // let foundanime = document.getElementById("foundanime")
            // foundanime.remove()
            // foundanime = document.createElement("div")
            // foundanime.id = "foundanime"
            // found.appendChild(foundanime)

            data.data.documents.forEach((anime) => {
                let title = document.createElement("h1")
                let img = document.createElement("img")
                let animediv = document.createElement("div")
                let link = document.createElement("a")

                link.href = `https://anilist.co/anime/${anime.anilist_id}`
                animediv.className = "anime"
                img.src = anime.cover_image
                img.width = 230
                img.height = 329

                link.appendChild(img)
                title.innerText = anime.titles.en



                animediv.appendChild(title)
                animediv.appendChild(link)
                foundanime.appendChild(animediv)
            })

        })
        .catch(err => {
            console.error(err);
        });

    // https://api.aniapi.com/v1/anime?title=One%20Piece&formats=0,1&status=1&year=1999&season=3&genres=Pirates,War,Cyborg&
}

function chooseRandom() {
    let foundAnime = document.getElementById("foundanime")
    let foundAnimeLength = foundAnime.children.length
    if (foundAnimeLength != 0) {
        window.location.href = foundAnime.children[getRandomInt(foundAnimeLength)].children[1].href;
    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}