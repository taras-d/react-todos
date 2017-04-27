
export const TODO_ADD = 'TODO_ADD';
export const TODO_CHECK = 'TODO_CHECK';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_TEXT_CHANGE = 'TODO_TEXT_CHANGE';
 
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

export const todoTextChange = (text) => {
    return {
        type: TODO_TEXT_CHANGE,
        payload: text
    };
}
