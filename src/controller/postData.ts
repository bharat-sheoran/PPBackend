import { Request, Response } from 'express';
import { ResponseStatus } from '../util/interface';
import { IResponseStatus } from '../models/ResponseStatus';
import mongoose from 'mongoose';

export const addUserToDatabase = async (req: Request, res: Response) => {
    const { userId, collegeEmail, collegeRollNumber, numbers, alphabets } = req.body;
    console.log(userId);
    try {

        const newUser: IResponseStatus = new mongoose.models.User({
            userId,
            collegeEmail,
            collegeRollNumber,
            numbers,
            alphabets
        })

        // Save the new user to the database
        const savedUser = await newUser.save();
        const response: ResponseStatus = {
            status: true,
            userId: savedUser.userId,
            collegeEmail: savedUser.collegeEmail,
            collegeRollNumber: savedUser.collegeRollNumber,
            numbers: savedUser.numbers,
            alphabets: savedUser.alphabets
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