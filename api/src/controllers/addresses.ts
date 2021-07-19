import { RequestHandler } from 'express';
import Addresses from '../models/Addresses';
import Providers from '../models/Providers';
import Users from '../models/Users';

export const getAllAddresses: RequestHandler = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const provider = await Providers.findById(req.params.id);
    if (user) {
      const foundAddress = await Addresses.find({ user: user });
      if (foundAddress) return res.send(foundAddress);
      return res.status(404).send({
        message: "El usuario no registra ningún domicilio al momento.",
      });
    } else if (provider) {
      const foundAddress = await Addresses.find({ provider: provider });
      if (foundAddress) return res.send(foundAddress);
      return res.status(404).send({
        message: "El prestador no registra ningún domicilio al momento.",
      });
    }
  } catch (error: any) {
    res.send(error);
  }
};

export const getOneAddress: RequestHandler = async (req, res) => {
  try {
    const { id, idAd } = req.params;
    const user = await Users.findById(id);
    const provider = await Providers.findById(id);
    if (user) {
      const foundAddress = await Addresses.findById({ id: idAd });
      if (foundAddress) return res.send(foundAddress);
      return res
        .status(404)
        .send({ message: "Domicilio de usuario no encontrado" });
    } else if (provider) {
      const foundAddress = await Addresses.findById({ id: idAd });
      if (foundAddress) return res.send(foundAddress);
      return res
        .status(404)
        .send({ message: "Domicilio de prestador no encontrado" });
    }
  } catch (error: any) {
    res.send(error);
  }
};

export const createAddress: RequestHandler = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const provider = await Providers.findById(req.params.id);
    let check = false;
    if (user) {
      user.addresses.forEach((address: any) => {
        if (address.name === req.body.name) check = true;
      });
      if (check) {
        return res.status(300).send({
          message: `Ya tienes una domicilio llamado ${req.body.name}. Quieres agregar tu nuevo domicilio con otro nombre o registrar uno nuevo?`,
        });
      } else {
        console.log("USER: ", user.id);
        const newAddress = new Addresses({
          ...req.body,
          user: user.id,
        });
        newAddress.save();
        user.addresses.push(newAddress);
        user.save();
        return res.status(201).send({
          data: newAddress,
          message: `Nuevo domicilio ${newAddress.name} guardado con éxito.`,
        });
      }
    } else if (provider) {
      let check = false;
      provider?.addresses.forEach((address: any) => {
        if (address.name === req.body.name) check = true;
      });
      if (check) {
        return res.status(300).send({
          message: `Ya tienes una domicilio llamado ${req.body.name}. Quieres agregar tu nuevo domicilio con otro nombre o registrar uno nuevo?`,
        });
      } else {
        console.log("PROVIDERS: ", provider.id);
        const newAddress = new Addresses({
          ...req.body,
          provider: provider.id,
        });
        newAddress.save();
        provider?.addresses.push(newAddress);
        provider?.save();
        return res.status(201).send({
          data: newAddress,
          message: `Nuevo domicilio ${newAddress.name} guardado con éxito.`,
        });
      }
    }
  } catch (error: any) {
    res.status(500).send({
      message: 'Ha habido un problema con tu pedido.',
    });
  }
};

export const updateAddress: RequestHandler = async (req, res) => {
  try {
    const { id, idAd } = req.params;
    const user = await Users.findById(id);
    const provider = await Providers.findById(id);
    if (user) {
      const updateAddress = await Addresses.findByIdAndUpdate(idAd, req.body, {
        new: true,
      });
      if (updateAddress)
        return res.status(201).send({
          data: updateAddress,
          message: "Domicilio actualizado con éxito.",
        });
      return res
        .status(404)
        .send({ message: "Domicilio de usuario no encontrado" });
    } else if (provider) {
      const updateAddress = await Addresses.findByIdAndUpdate(idAd, req.body, {
        new: true,
      });
      if (updateAddress)
        return res.status(201).send({
          data: updateAddress,
          message: "Domicilio actualizado con éxito.",
        });
      return res
        .status(404)
        .send({ message: "Domicilio de prestador no encontrado" });
    }
    if (provider) {
      const updateAddress = await Addresses.findByIdAndUpdate(idAd, req.body, {
        new: true,
      });
      if (!updateAddress)
        return res
          .status(404)
          .send({ message: 'No encontramos el domicilio solicitado' });
      return res.status(201).send({
        data: updateAddress,
        message: 'Domicilio actualizado con éxito.',
      });
    }
  } catch (error: any) {
    res.status(500).send({ message: 'Ha habido un problema con tu pedido' });
  }
};

export const deleteAddress: RequestHandler = async (req, res) => {
  try {
    const { id, idAd } = req.params;
    const user = await Users.findById(id);
    const provider = await Providers.findById(id);
    if (user) {
      const deleteAddress = await Addresses.findByIdAndDelete(idAd);
      if (deleteAddress)
        return res.send({
          message: `Domicilio ${deleteAddress.name} eliminado con éxito.`,
        });
      return res
        .status(404)
        .send({ message: "Domicilio de usuario no encontrado" });
    } else if (provider) {
      const deleteAddress = await Addresses.findByIdAndDelete(idAd);
      if (deleteAddress)
        return res.send({
          message: `Domicilio ${deleteAddress.name} eliminado con éxito.`,
        });
      return res
        .status(404)
        .send({ message: "Domicilio de prestador no encontrado" });
    }
  } catch (error: any) {
    res.status(500).send({ message: 'Ha habido un problema con tu pedido' });
  }
};
