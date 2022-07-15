import { BehaviorSubject } from 'rxjs';
import data from '../data.json';

const observable = new BehaviorSubject(data);

export default observable;
