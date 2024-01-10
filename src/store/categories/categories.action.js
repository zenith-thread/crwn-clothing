import { createAction } from '../../helperFunctions/reducers-helper-functions'
import { CATEGORY_ACTION_TYPES } from './categories.types'

export const setCategories = (categories) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories)
