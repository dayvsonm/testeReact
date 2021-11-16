import React, { useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../../../components/Store/Context';
import UIButton from '../../../components/UI/Button/Button';

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({user, password}) {
  if(user === 'admin' && password === '123456'){
    return {token: '1234'};
  }

  return {error: 'Usuário ou senha inválidos'}
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,

    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token } =login(values);

    if (token) {
      setToken(token);
      return history.push('/')
    }

    setValues(initialState);
  }

  return (
    <div className="container">
      <div className="user-login">
        <div className="user_login__title__div">
          <h1 className="user-login__title">Parking Admin</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <input id="user" type="text" name="user" placeholder="USUÁRIO"
              onChange={onChange} value={values.user}  />
          </div>
          <div className="user-login__form-control">
            <input id="password" type="password" placeholder="SENHA" name="password"
              onChange={onChange} value={values.password} />
          </div>
          <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
          >
            Entrar
          </UIButton>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
