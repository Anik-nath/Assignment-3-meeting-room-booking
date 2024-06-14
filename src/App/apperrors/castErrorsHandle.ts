import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from './erros.utils';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'ID is invalid',
    errorSources,
  };
};

export default handleCastError;
