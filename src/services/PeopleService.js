import { service } from './Service';
import { url } from '../constants/constants';

export default class PeopleService {
    constructor() {
        this.service = service;
    }

    loadPeopleData() {
        return this.service.get(url);
    }
}

export const peopleService = new PeopleService();
