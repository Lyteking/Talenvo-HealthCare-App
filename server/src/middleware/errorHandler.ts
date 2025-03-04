import type { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import type { AppError } from '../utils/customErrors';

const errorHandler = (err: AppError | Error, req: Request, res: Response, next: NextFunction) => {
  const error = err as AppError;
  error.statusCode = error.statusCode || 500;
  error.status = error.statusCode >= 400 && error.statusCode < 500 ? 'fail' : 'error';

  // Handle MongoDB duplicate key error
  if (err.name === 'MongoServerError' && (err as any).code === 11000) {
    const field = Object.keys((err as any).keyValue)[0];
    error.statusCode = 400;
    error.status = 'fail';
    error.message = `${field} already exists`;
    error.isOperational = true;
  }

  // Handle MongoDB validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values((err as any).errors).map((err: any) => err.message);
    error.statusCode = 400;
    error.status = 'fail';
    error.message = `Validation Error: ${errors.join('. ')}`;
    error.isOperational = true;
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    error.statusCode = 401;
    error.status = 'fail';
    error.message = 'Invalid token';
    error.isOperational = true;
  }

  if (err.name === 'TokenExpiredError') {
    error.statusCode = 401;
    error.status = 'fail';
    error.message = 'Token expired';
    error.isOperational = true;
  }

  logger.error('Error', error);

  if (process.env.NODE_ENV === 'development') {
    res.status(error.statusCode).json({
      status: error.status,
      error: error,
      message: error.message,
      stack: error.stack
    });
  } else if (process.env.NODE_ENV === 'production') {
    const prodError = { ...error };
    prodError.message = error.message;
    
    if (error.isOperational) {
      res.status(error.statusCode).json({
        status: error.status,
        message: error.message
      });
    } else {
      res.status(500).json({
        status: 'error',
        message: 'Server Error!, Something went wrong!'
      });
    }
  }
};

export default errorHandler;