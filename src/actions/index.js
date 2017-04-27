
export const TODO_ADD = 'TODO_ADD';
export const TODO_CHECK = 'TODO_CHECK';
export const TODO_REMOVE = 'TODO_REMOVE';
 
export const todoAdd = (text) => {
    let date = new Date();
    return {
        type: TODO_ADD,
        payload: {
            id: date.getTime(),
            checked: false,
            text,
            date
        }
    };
}

export const todoCheck = (id, checked) => {
    return {
        type: TODO_CHECK,
        payload: { id, checked }
    };
}

export const todoRemove = (id) => {
    return {
        type: TODO_REMOVE,
        payload: id
    };
}
