import { Request, Response } from 'express';
import { ResponseStatus } from '../util/interface';
import { IResponseStatus } from '../models/ResponseStatus';
import mongoose from 'mongoose';
import { prisma } from '../config/db';

export const getUserToDatabase = async (req: Request, res: Response) => {
    try {

        const users = await prisma.user.findMany();
        const response: ResponseStatus[] = users.map((user) => ({
            status: true, // Assuming you want to mark all users as active, adjust as necessary
            userId: user.userId, // Assuming userId is stored in `_id`
            collegeEmail: user.email, // Assuming email is used for collegeEmail
            collegeRollNumber: user.collegeRollNo, // Assuming roll number is part of the email
            numbers: user.numbers, // Example numbers, replace with actual data as needed
            alphabets: user.alphabet, // Example alphabets, replace with actual data
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