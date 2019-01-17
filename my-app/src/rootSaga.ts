import { all, fork} from 'redux-saga/effects';
import registrationSaga from './Registration/registrationsaga';

export default function* root() {
    yield all([
        fork(registrationSaga),
    ])
}