import express from 'express';
import Mosque from "../models/mosque.model.js";
import { dbConnection } from '../config/db.config.js';
import { validationResult } from 'express-validator';


export const addMosque = async (req, res) => {
  const body = req.body;

  const errors = validationResult(body);

  if (!errors.isEmpty()) {
    res.status(400).json({
      errors: errors.array()
    });  
  }
  
  const mosque = new Mosque({
    name: body.name,
    address: body.address,
    link: body.link,
    jumat_start: body.jumat_start,
    jumat_end: body.jumat_end
  })

  try {
    const newMosque = await mosque.save();

    res.status(201).json({
      message: "mosque added succesfuly",
      mosque: newMosque
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error saving mosque to the database",
      error: error.message
    });
  }


  
  // const { name, address, jumat_start, jumat_end } = req.body;
};

export const mosques = async (req, res) => {

  let search = req.query.search;

  if (!search) {
    search = "";
  }

  try {

    const mosques = await Mosque.find({name: {$regex: search, $options: 'i'}}).sort({_id: -1});

    res.status(200).json({
      message: "Mosques fetched successfully",
      mosques: mosques
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching mosques",
      error: error.message
    });
  }
}

export const deleteMosque = async (req, res) => {
  const mosque = req.query.mosque;

  try {
    await Mosque.deleteOne({name: mosque});
    res.status(200).json({
      message: "Mosque deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting mosque",
      error: error.message
    });
  }
}

export const editMosque = async (req, res) => {
  const mosque = req.query.mosque;
  const body = req.body;

  try {
    await Mosque.updateOne({name: mosque}, body);
    res.status(200).json({
      message: "Mosque updated successfully"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating mosque",
      error: error.message
    });
  }
}