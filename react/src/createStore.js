/* createStore函数， 它接受的参数叫 reducer， reducer 是一个函数， 
细心的朋友会发现， 它其实是一个纯函数（ Pure Function）
reducer(state,action) */
function createStore(reducer) {
    let state = null
    const listeners = [];
    const subsrcibe = l => listeners.push(l);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    }
    dispatch({})
    return {
        getState,
        dispatch,
        subsrcibe
    }
}
