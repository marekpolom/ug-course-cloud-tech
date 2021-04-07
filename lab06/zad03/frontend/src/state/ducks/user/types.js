const CUR_USER = "user/CUR_USER";
const SET_FAV = "user/SET_FAV";
const UPD_AVATAR = "user/UPD_AVATAR";
const USER_EXIST = "user/USER_EXIST";

export const USER_GET_REQUEST = "@@user/USER_GET_REQUEST";
export const USER_GET_SUCCESS = "@@user/USER_GET_SUCCESS";
export const USER_GET_FAILURE = "@@user/USER_GET_FAILURE";

export const USER_POST_REQUEST = "@@user/USER_POST_REQUEST";
export const USER_POST_SUCCESS = "@@user/USER_POST_SUCCESS";
export const USER_POST_FAILURE = "@@user/USER_POST_FAILURE";

export const USER_PUT_REQUEST = "@@user/USER_PUT_REQUEST";
export const USER_PUT_SUCCESS = "@@user/USER_PUT_SUCCESS";
export const USER_PUT_FAILURE = "@@user/USER_PUT_FAILURE";

export const USER_DEL_REQUEST = "@@user/USER_DEL_REQUEST";
export const USER_DEL_SUCCESS = "@@user/USER_DEL_SUCCESS";
export const USER_DEL_FAILURE = "@@user/USER_DEL_FAILURE";

export const USER_EXISTS_REQUEST = "@@user/USER_EXISTS_REQUEST";
export const USER_EXISTS_SUCCESS = "@@user/USER_EXISTS_SUCCESS";
export const USER_EXISTS_FAILURE = "@@user/USER_EXISTS_FAILURE";

//====================
export const FAV_GET_REQUEST = "@@user/FAV_GET_REQUEST";
export const FAV_GET_SUCCESS = "@@user/FAV_GET_SUCCESS";
export const FAV_GET_FAILURE = "@@user/FAV_GET_FAILURE";

export const FAV_POST_REQUEST = "@@user/FAV_POST_REQUEST";
export const FAV_POST_SUCCESS = "@@user/FAV_POST_SUCCESS";
export const FAV_POST_FAILURE = "@@user/FAV_POST_FAILURE";

export const FAV_DEL_REQUEST = "@@user/FAV_DEL_REQUEST";
export const FAV_DEL_SUCCESS = "@@user/FAV_DEL_SUCCESS";
export const FAV_DEL_FAILURE = "@@user/FAV_DEL_FAILURE";

export const IS_FAV_REQUEST = "@@user/IS_FAV_REQUEST";
export const IS_FAV_SUCCESS = "@@user/IS_FAV_SUCCESS";
export const IS_FAV_FAILURE = "@@user/IS_FAV_FAILURE";

//=====================
export const AVATAR_GET_REQUEST = "@@user/AVATAR_GET_REQUEST";
export const AVATAR_GET_SUCCESS = "@@user/AVATAR_GET_SUCCESS";
export const AVATAR_GET_FAILURE = "@@user/AVATAR_GET_FAILURE";

export const AVATAR_POST_REQUEST = "@@user/AVATAR_POST_REQUEST";
export const AVATAR_POST_SUCCESS = "@@user/AVATAR_POST_SUCCESS";
export const AVATAR_POST_FAILURE = "@@user/AVATAR_POST_FAILURE";

const types = {
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAILURE,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
  USER_PUT_FAILURE,
  USER_DEL_REQUEST,
  USER_DEL_SUCCESS,
  USER_DEL_FAILURE,
  USER_EXISTS_REQUEST,
  USER_EXISTS_SUCCESS,
  USER_EXISTS_FAILURE,
  FAV_GET_REQUEST,
  FAV_GET_SUCCESS,
  FAV_GET_FAILURE,
  FAV_POST_REQUEST,
  FAV_POST_SUCCESS,
  FAV_POST_FAILURE,
  FAV_DEL_REQUEST,
  FAV_DEL_SUCCESS,
  FAV_DEL_FAILURE,
  IS_FAV_REQUEST,
  IS_FAV_SUCCESS,
  IS_FAV_FAILURE,
  AVATAR_GET_REQUEST,
  AVATAR_GET_SUCCESS,
  AVATAR_GET_FAILURE,
  AVATAR_POST_REQUEST,
  AVATAR_POST_SUCCESS,
  AVATAR_POST_FAILURE,
  USER_EXIST,
  CUR_USER,
  SET_FAV
};

export default types;