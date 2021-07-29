import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import FormCompleteRegister from './FormCompleteRegister/FormCompleteRegister';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../Redux/actions/user.actions';
import { useHistory } from 'react-router';

const CompletePerfil = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [dispatch, id]);

  // console.log('ID---->', id);
  // console.log('USER GOOGLE---->', data);
  // console.log('ROLES---->', user?.roles[0]?.name);

  const userGoogle = {
    firstName: data?.firstName,
    lastName: data?.lastName,
    image: data?.image,
    googleId: data?.googleId,
    email: data?.email,
    password: data?.email,
  };

  return (
    <div>
      <FormCompleteRegister id={id} userGoogle={userGoogle} />
    </div>
  );
};

export default CompletePerfil;
