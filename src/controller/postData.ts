import { Request, Response } from 'express';
import { ResponseStatus } from '../util/interface';
import { IResponseStatus } from '../models/ResponseStatus';
import { prisma } from '../config/db';

export const addUserToDatabase = async (req: Request, res: Response) => {
    const {username, dob, userId, collegeEmail, collegeRollNumber, numbers, alphabets } = req.body;
    console.log(req.body);
    try {

        const savedUser = await prisma.user.create({
            data: {
                username: username,
                userId: userId,
                email: collegeEmail,
                collegeRollNo: collegeRollNumber,
                numbers: numbers,
                alphabet: alphabets,
                dob: dob
            },
        });

        console.log(savedUser);

        const response: ResponseStatus = {
            status: true,
            userId: savedUser.userId,
            collegeEmail: savedUser.email,
            collegeRollNumber: savedUser.collegeRollNo,
            numbers: savedUser.numbers,
            alphabets: savedUser.alphabet
        }

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