import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, deleteCookie } from "../../Shared/Cookie";
import { apis } from "../../Shared/api";
import history from "../../index";
import axios from "axios";

//action
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const CHANGE_PROFILE = "CHANGE_PROFILE";

//action creator
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const changeProfile = createAction(CHANGE_PROFILE, (file) => ({ file }));

//initialState
const initialState = {
  is_login: false,
};

//thunk-> put으로 수정.
const changeProfileDB = (file, token) => {
  console.log(file);
  const image = new FormData();
  image.append("multipartFile", file);
  return function (dispatch, getState) {
    axios.put("http://13.209.10.125/api/profile", image, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  };
};

const registerDB = (ID, Nickname, PWD, Check) => {
  return function (dispatch, getState) {
    apis
      .signup(ID, Nickname, PWD, Check)
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loginDB = (username, password) => {
  return function (dispatch, getState) {
    apis
      .login(username, password)
      .then((res) => {
        const auth = res.headers.authorization.split(" ")[1];
        setCookie("token", auth, 3);
        localStorage.setItem("username", username);
        dispatch(setUser({ username: username }));
        history.push("/");
      })
      .catch((err) => {
        window.alert("없는 회원정보 입니다! 회원가입을 해주세요!");
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState) {
    deleteCookie("token");
    localStorage.removeItem("username");
    dispatch(logOut());
    history.replace("/login");
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  registerDB,
  loginDB,
  logOutDB,
  changeProfileDB,
};

export { actionCreators };
