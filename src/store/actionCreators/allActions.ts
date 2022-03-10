import * as UserActionCreators from './userActionCreatоr'
import * as TodosActionCreators from './todoActionCreator'

export default {
    ...UserActionCreators,
    ...TodosActionCreators
}