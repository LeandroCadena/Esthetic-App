import React from 'react';
import { useParams } from 'react-router';
import FormCompleteRegister from './FormCompleteRegister/FormCompleteRegister';

const CompletePerfil = () => {
  const { id } = useParams();
  return (
    <div>
      <FormCompleteRegister id={id} />
    </div>
  );
};

export default CompletePerfil;
