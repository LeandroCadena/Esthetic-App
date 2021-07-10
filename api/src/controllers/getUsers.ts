import { RequestHandler } from 'express';
import Users from '../models/Users';
import path from 'path';
import fs from 'fs-extra';

export const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = await Users.find(); // me devuelve un array con todos los usuarios que se encuentran en mi db
    return res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const getUser: RequestHandler = async (req, res) => {
  // para traer un solo usuario
  try {
    const userFound = await Users.findById(req.params.id);
    if (!userFound)
      return res.json(404).json({ message: 'El usuario no existe' });
    return res.json(userFound);
  } catch (error) {
    res.json(error);
  }
};

export const createUser: RequestHandler = async (req, res) => {
  const userFound = await Users.findOne({ email: req.body.email }); // busco en la db
  if (userFound)
    return res.status(301).json({ message: 'The user alredy exists' });
  const { firstName, lastName, gender, email, phone, password, file } =
    req.body;

  const dataUser = {
    image: `uploads\\${file}`,
    firstName,
    lastName,
    gender,
    email,
    phone,
    password,
  };
  const newUser = new Users(dataUser);
  const savedUser = await newUser.save();
  res.json(savedUser);
};

export const updateUser: RequestHandler = async (req, res) => {
  try {
    const userUpdate = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); // 1params id para buscar, 2params los datos para actualizar, 3params pasarle new para poder retornar el usuario con los datos actualizados
    if (!userUpdate) return res.status(204).json();
    return res.json(userUpdate);
  } catch (error) {
    res.send(error);
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    const userDelete = await Users.findByIdAndDelete(req.params.id);
    if (!userDelete) return res.status(204).json();
    if (userDelete) await fs.unlink(path.resolve(userDelete.image));
    return res.json({
      message: 'user deleted',
      userDelete,
    });
  } catch (error) {
    res.status(500).json({ message: 'something bad things 😅' });
  }
};

// export const assignService: RequestHandler = async (req, res) => {
//   const userWithService = await Users.findByIdAndUpdate(
//     req.params.id,
//     { $push: { services: req.body } },
//     {
//       new: true,
//     }
//   );
//   return res.json(userWithService);
// };

// export const removeService: RequestHandler = async (req, res) => {
//   const userWithService = await Users.findByIdAndUpdate(
//     req.params.id,
//     { $pull: { services: req.body } },
//     {
//       new: true,
//     }
//   );
//   return res.json(userWithService);
// };
