import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import FormCompleteRegister from './FormCompleteRegister/FormCompleteRegister';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, LoginUser } from '../../Redux/actions/user.actions';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import gif from '../../giff/loading.gif';
import { UserContext } from '../../index';
import './CompletePerfil.scss';

const CompletePerfil = () => {
  const { setUser } = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userData);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (data) {
      if (data.roles) {
        if (data.roles[0]?.name === 'user') {
          dispatch(LoginUser({ email: data.email, password: data.email })).then(
            (response) => {
              setUser(response?.data ?? data);
              toast.success(
                `👍 Bienvenido ${data.firstName}. Un gran día te espera!`,
                {
                  position: toast.POSITION.TOP_CENTER,
                }
              );
              history.push('/');
              window.location.reload(true);
            }
          );
        } else if (data.roles[0]?.name === 'provider') {
          dispatch(LoginUser({ email: data.email, password: data.email })).then(
            (response) => {
              setUser(response?.data ?? data);
              toast.success(
                `👍 Bienvenido ${data.firstName}. Un gran día te espera!`,
                {
                  position: toast.POSITION.TOP_CENTER,
                }
              );
              history.push('/user/provider');
            }
          );
        }
      }
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setCheck(true);
    }, 4000);
  }, []);

  const userGoogle = {
    firstName: data?.firstName,
    lastName: data?.lastName,
    image: data?.image,
    googleId: data?.googleId,
    email: data?.email,
    confirm: true,
    password: data?.email,
  };
  console.log('DATA COMPLETE PROFILE', data);
  return (
    <div>
      {!check ? (
        <div className='loading-login'>
          <img src={gif} alt='loading' className='img-loading' />
        </div>
      ) : (
        <FormCompleteRegister id={id} userGoogle={userGoogle} />
      )}
    </div>
  );
};

export default CompletePerfil;
