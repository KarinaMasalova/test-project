const url = 'https://swapi.dev/api/planets/';

const loadPlanetData = () => {
    return fetch(url)
        .then((data) => data.json())
        .catch((error) => console.log(error));
}

export default loadPlanetData;
