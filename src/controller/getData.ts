import { Request, Response } from 'express';
import { ResponseStatus } from '../util/interface';
import { IResponseStatus } from '../models/ResponseStatus';
import mongoose from 'mongoose';

export const getUserToDatabase = async (req: Request, res: Response) => {
    try {

        const savedUser = await mongoose.model<IResponseStatus>('User').find();
        const response: ResponseStatus[] = savedUser.map((user) => ({
            status: true, // Assuming you want to mark all users as active, adjust as necessary
            userId: user.userId, // Assuming userId is stored in `_id`
            collegeEmail: user.collegeEmail, // Assuming email is used for collegeEmail
            collegeRollNumber: user.collegeRollNumber, // Assuming roll number is part of the email
            numbers: user.numbers, // Example numbers, replace with actual data as needed
            alphabets: user.alphabets, // Example alphabets, replace with actual data
        }));

        res.status(200).json(response);

    } catch (e) {
        const response: ResponseStatus = {
            status: false,
            userId: null,
            collegeEmail: null,
            collegeRollNumber: null,
            numbers: null,
            alphabets: null
        }
        res.status(500).json(response);
    }
}