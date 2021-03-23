import createDataContext from './createDataContext';
import tracker from '../api/tracker'
import { AsyncStorage } from '@react-native-async-storage/async-storage'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return {
        ...state,
        errorMessage: action.payload
      }
    case 'SIGNUP': 
      return {
        errorMessage: '',
        token: action.payload
      }
    default:
      return state;  
  }
};

const signup = (dispatch) => async ({ email, password }) => {
    //TODO make api request to signup
    try{
      console.log(`payload: ${email} and ${JSON.stringify(password)}`)
      const response = await tracker.post('/signup', { email, password });
      console.log(response.data);
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'SIGNUP', payload: response.data.token });

    } catch(err) {
      console.log(err.message);
      dispatch({ type: 'ADD_ERROR', payload : 'Something went wrong with signup'})
    }
}

const signin = (dispatch) => {
  return ({ email, password }) => {

  }
}

const signout = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { token: null, errorMessage: '' }
);