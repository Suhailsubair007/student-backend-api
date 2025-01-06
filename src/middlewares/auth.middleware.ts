// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// export const authenticate = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(401).json({ message: 'Access denied' });

//     const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
//     if (!roles.includes(decoded.role)) {
//       return res.status(403).json({ message: 'Forbidden' });
//     }
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };
