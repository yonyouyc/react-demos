import { call, put, takeEvery, delay } from 'redux-saga/effects'

// Our worker Saga: 将执行异步的 increment 任务
export function* addTodoAsync (action) {
  debugger
  console.log('i am here', action)
  yield delay(1000)
  yield put({ type: 'ADD_TODO', text: action.text })
}
function* watchIncrementAsync () {
  yield takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}
export default watchIncrementAsync