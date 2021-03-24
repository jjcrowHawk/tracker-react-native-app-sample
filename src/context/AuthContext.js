import createDataContext from './createDataContext';
import tracker from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from './../utils/navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return {
        ...state,
        errorMessage: action.payload
      }
    case 'SIGNUP': 
    case 'SIGNIN':
      return {
        errorMessage: '',
        token: action.payload
      }
    case 'SIGNOUT':
      return {
        errorMessage: '',
        token: null
      }
    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, errorMessage: '' }
    default:
      return state;  
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  console.log(`try sign in token: ${JSON.stringify(token)}`)
  if(token){
    dispatch({ type: 'SIGNIN', payload: token })
    navigate('TrackList')
  } else {
    navigate('loginFlow')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'CLEAR_ERROR_MESSAGE'})
}

const signup = (dispatch) => async ({ email, password }) => {
    //TODO make api request to signup
    try{
      console.log(`payload: ${email} and ${JSON.stringify(password)}`)
      const response = await tracker.post('/signup', { email, password });
      console.log(response.data);
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'SIGNUP', payload: response.data.token });

      navigate('TrackList');

    } catch(err) {
      console.log(err.message);
      dispatch({ type: 'ADD_ERROR', payload : 'Something went wrong with signup'})
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try{
      console.log(`payload: ${email} and ${JSON.stringify(password)}`)
      const response = await tracker.post('/signin', { email, password });
      console.log(response.data);
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'SIGNIN', payload: response.data.token });

      navigate('TrackList');

    } catch(err) {
      console.log(err.message);
      dispatch({ type: 'ADD_ERROR', payload : 'Something went wrong with sign in'})
    }
}

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'SIGNOUT'});

  navigate('loginFlow');
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);