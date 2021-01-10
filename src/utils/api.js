import * as constants from '../constants/constants';

function loadPeopleData() {
    return fetch(constants.url)
        .then((data) => data.json())
        .catch((error) => Promise.reject(error));
}

export default loadPeopleData;
