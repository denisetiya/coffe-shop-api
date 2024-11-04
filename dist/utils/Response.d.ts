import { Response } from 'express';
declare const response: (res: Response, status: number, message?: string, data?: any, error?: string, header?: Record<string, string>) => void;
export default response;
