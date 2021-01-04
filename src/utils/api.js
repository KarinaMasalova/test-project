const url = 'https://5ff1d38edb1158001748b5c2.mockapi.io/api/v1/users/';

const loadLawyersData = () => {
    return fetch(url)
        .then((data) => data.json())
        .catch((error) => console.log(error));
}

export default loadLawyersData;
