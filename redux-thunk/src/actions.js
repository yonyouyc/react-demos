/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_LOADING = 'SET_LOADING'
/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function addTodoAsync (text) {
  // return { type: ADD_TODO, text }
  // 改成function 使用redux-thunk处理异步
  return dispatch => {
    dispatch(setLoading(true))
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(text)
      }, 2000)
    }).then(function (text) {
      dispatch(setLoading(false))
      dispatch(addTodo(text))
    })
  }
}
export function addTodo (text) {
  return { type: ADD_TODO, text }
}
export function setLoading (loading) {
  return { type: SET_LOADING, loading }
}

export function toggleTodo (index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter (filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}