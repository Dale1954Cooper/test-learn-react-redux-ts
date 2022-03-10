import {useDispatch} from "react-redux";
import {bindActionCreators} from 'redux';

import ActionsCreator from '../store/actionCreators/allActions';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionsCreator, dispatch)
}