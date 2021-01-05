import * as constants from '../constants/constants';

const loadLawyersData = () => {
    return fetch(constants.url)
        .then((data) => data.json())
        .catch((error) => console.log(error));
}

export default loadLawyersData;
