import { bindActionCreators } from "redux";
import actionCreators from "../store/actionCreators";
import { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
