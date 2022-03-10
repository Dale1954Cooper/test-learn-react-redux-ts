import {useSelector, TypedUseSelectorHook} from "react-redux";
import { RootState } from "../store/reducers/combaineReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;