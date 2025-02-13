const comics = [
    {
        title: "Vampirella",
        issues: "40",
        year: "2010",
        link: "../pInk/vampirella.html",
        idiom: "Brazilian Portuguese",
        cover: "https://www.dynamite.com/images/Vampi01-cov-Ross-RareVariant.jpg"
    },
    {
        title: "Incognito",
        issues: "06",
        year: "2008",
        link: "../pInk/incognito.html",
        idiom: "Brazilian Portuguese",
        cover: "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/2513399-01a_cropped.jpg"
    },
    {
        title: "Fatale",
        issues: "24",
        year: "2012",
        link: "../pInk/fatale.html",
        idiom: "Brazilian Portuguese",
        cover: "https://cdn.imagecomics.com/assets/i/releases/18505/fatale-1_ea3e77a5f9.jpg"
    },
    {
        title: "Kick-Ass",
        issues: "08",
        year: "2008",
        link: "/pInk/cumming.html",
        idiom: "Brazilian Portuguese",
        cover: "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/2515095-01_red.jpg"
    },
    {
        title: "The Walking Dead",
        issues: "193",
        year: "2003",
        link: "/pInk/cumming.html",
        idiom: "Brazilian Portuguese",
        cover: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-9340635.jpg?1729986063"
    },
];

const comicCardsContainer = document.getElementById('cards');
const nameSearch = document.getElementById('search');

function renderComics(comicsToRender) {
    comicCardsContainer.innerHTML = '';
    comicsToRender.forEach(comic => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="${comic.link}"><img src="${comic.cover}" alt="${comic.title} Cover"><a/>
            <div class="card-text">
                <h2>${comic.title}</h2>
                <p class="issue-year"><strong>Issues:</strong> ${comic.issues} | <strong>Release Year:</strong> ${comic.year} | <strong>Idiom:</strong> ${comic.idiom}</p>
            </div>
        `;
        comicCardsContainer.appendChild(card);
    });
}

function filterComics() {
    const searchTerm = nameSearch.value.toLowerCase();

    const filteredComics = comics.filter(comic =>
        comic.title.toLowerCase().includes(searchTerm)
    );

    renderComics(filteredComics);
}

nameSearch.addEventListener('input', filterComics);
window.addEventListener('load', renderComics(comics));