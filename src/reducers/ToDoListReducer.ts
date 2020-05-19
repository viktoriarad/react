import * as actionTypes from '../actions/types';

interface ITask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface IListReducer {
    tasks: Array<ITask>
    add: {
        title: string;
        description: string;
    }
    edit: {
        id: number,
        title: string,
        description: string
    }
}

const defaultState = (): IListReducer => {
    return ({
        tasks: [],
        add: {
            title: undefined,
            description: undefined
        },
        edit: {
            id: undefined,
            title: undefined,
            description: undefined
        }
    })
};

const clearStateTemporaryData = (state) => {
    state.add.title = undefined;
    state.add.description = undefined;
};

export default (state = defaultState(), action: any): IListReducer => {
    switch (action.type) {

        case actionTypes.ADD_TASK: {
            const newTask: ITask = {
                id: Date.now(),
                title: state.add.title,
                description: state.add.description,
                completed: false
            };

            clearStateTemporaryData(state);

            return Object.assign({}, state, {
                tasks: [...state.tasks, newTask]
            });
        }

        case actionTypes.DELETE_TASK: {
            return Object.assign({}, state, {
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            });
        }

        case actionTypes.SAVE_EDITED_TASK: {
            const otherTasks = state.tasks.filter(task => task.id !== state.edit.id);

            return Object.assign({}, state, {
                tasks: [...otherTasks, state.edit]
            });
        }

        case actionTypes.COMPLETE_TASK: {
            const otherTasks = state.tasks.filter(task => task.id !== action.id);
            const checkedTask = state.tasks.find(task => task.id === action.id);
            checkedTask.completed = true;

            return Object.assign({}, state, {
                tasks: [...otherTasks, checkedTask]
            });
        }

        case actionTypes.ADD_TASK_TITLE_CHANGED: {
            const add = Object.assign({}, state.add, {
                title: action.title
            });

            return Object.assign({}, state, {
                add: add
            });
        }

        case actionTypes.ADD_TASK_DESC_CHANGED: {
            const add = Object.assign({}, state.add, {
                description: action.description
            });

            return Object.assign({}, state, {
                add: add
            });
        }

        case actionTypes.UPDATE_EDIT_DATA: {
            return Object.assign({}, state, {
                edit: {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    completed: action.completed
                }
            });
        }

        case actionTypes.EDIT_TASK_TITLE_CHANGED: {
            const edit = Object.assign({}, state.edit, {
                title: action.title
            });
            return Object.assign({}, state, {
                edit: edit
            });
        }

        case actionTypes.EDIT_TASK_DESC_CHANGED: {
            const edit = Object.assign({}, state.edit, {
                description: action.description
            });
            return Object.assign({}, state, {
                edit: edit
            });
        }

        default: {
            return state;
        }
    }
};