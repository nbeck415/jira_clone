import jwt, { SignOptions } from 'jsonwebtoken';

import { InvalidTokenError } from 'errors';

export const signToken = (payload: object, options?: SignOptions): string =>
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1000000 days',
    ...options,
  });

export const verifyToken = (token: string): any => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    throw new InvalidTokenError();
  }
};
