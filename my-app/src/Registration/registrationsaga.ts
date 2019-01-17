import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import callApi from '../Utilities/api';
import { registerFailed, registerSuccessful } from './actions';
import * as registerAction from './ActionTypes'

const API_ENDPOINT:string ='https://dog.ceo/api/breeds/image/random';

function* handleSave() {
    try {    
      const response = yield call(callApi, 'post', API_ENDPOINT,'')  
      const result = response.data;

      if (response.error) {
        yield put(registerFailed(result.error))
      } else {
        yield put(registerSuccessful(result))
      }
    } catch (err) {
      if (err instanceof Error) {
        yield put(registerFailed(err.stack!))
      } else {
        yield put(registerFailed('An unknown error occured.'))
      }
    }
  }

  function* watchSaveRequest() {
    yield takeEvery(registerAction.SAVE, handleSave)
  }

  export function* registrationSaga() {
    yield all([fork(watchSaveRequest)])
  }
  
  export default registrationSaga