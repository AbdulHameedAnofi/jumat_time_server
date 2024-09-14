import {body} from 'express-validator'

export const addMosqueValidator = [
    body('name')
        .isString().withMessage('Name must be string')
        .notEmpty().withMessage('Name is required'),
    body('address')
        .isString().withMessage('Address must be a string')
        .notEmpty().withMessage('Address is required'),
    body('link')
        .isString().withMessage('map link must be a string')
        // .matches(/^(https?:\/\/)?(www\.)?google\.com\/maps\/place\/.+$/)
        .matches(/^(https?:\/\/)?(www\.)?maps\.app\/.goo.gl\/.+$/).withMessage('Link must be a valid Google Maps URL'),
    body('jumat_start')
        .isString().withMessage('Jumat start time must be a string')
        .matches(/^\d{2}:\d{2}$/).withMessage('Jumat start time must be in HH:MM format'),
    body('jumat_end')
        .isString().withMessage('Jumat end time must be a string')
        .matches(/^\d{2}:\d{2}$/).withMessage('Jumat end time must be in HH:MM format'),
];