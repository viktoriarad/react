import * as Types from './types'

export const onAddTask = () => ({
  type: Types.ADD_TASK
});

export const onDeleteTask = (id) => ({
  type: Types.DELETE_TASK,
  id: id
});

export const onSaveEditedTask = (id) => ({
  type: Types.SAVE_EDITED_TASK,
  id: id
});

export const onTaskComplete = (id) => ({
  type: Types.COMPLETE_TASK,
  id: id
});

export const onChangeTitle = (text) => ({
  type: Types.ADD_TASK_TITLE_CHANGED,
  title: text
});

export const onChangeDescription = (text) => ({
  type: Types.ADD_TASK_DESC_CHANGED,
  description: text
});

export const onLoadEditForm = ({id, title, description, completed}) => ({
  type: Types.UPDATE_EDIT_DATA,
  id: id,
  title: title,
  description: description,
  completed: completed
});

export const onEditTitle = (text) => ({
  type: Types.EDIT_TASK_TITLE_CHANGED,
  title: text
});

export const onEditDescription = (text) => ({
  type: Types.EDIT_TASK_DESC_CHANGED,
  description: text
});