import { RequestHandler } from "express";
import Providers from "../models/Providers";

export const getAllProviders: RequestHandler = async (req, res) => {
  try {
    const prov = await Providers.find();
    return res.send(prov);
  } catch (error) {
    res.send(error);
  }
};
// export const getProviderByName: RequestHandler = async (req, res) => {
//   const { name } = req.query;
//   try {
//     const foundProv = await Providers.findOne({ name: name });
//     if (foundProv) return res.send(foundProv);
//     return res.send(404).send({
//       message: `No encontramos ningún proveedor con el nombre ${name}. Lamentamos los inconvenientes`,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };
export const getProviderById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const foundProv = await Providers.findById(id);
    if (foundProv) return res.send(foundProv);
    return res.send(404).send({
      message: `Proveedor con id ${id} no encontrado. Lamentamos los inconvenientes`,
    });
  } catch (error) {
    res.send(error);
  }
};
export const createProvider: RequestHandler = async (req, res) => {
  try {
    const foundProv = await Providers.findOne({ email: req.body.email });
    if (foundProv)
      return res.status(301).send({
        message:
          "Lo sentimos. Ese email ya ha sido registrado. Recordar contraseña",
      });
    const newProvider = new Providers(req.body);
    newProvider.save();
    return res.status(202).send({
      data: newProvider,
      message: `Proveedor ${newProvider.firstName} creado satisfactoriamente`,
    });
  } catch (error: any) {
    res.status(404).send({
      message: "Algo salió mal. Por favor vuelve a intentarlo.",
    });
  }
  // <<< PASAR VALIDACION ORTOGRÁFICA Y DE DOMINIO AL FRONT >>>
  // validator: function (v: string) {
  //   return /\S@\S.\mail.\S/.test(v);
  // },
  // message: "Por favor ingresar un email válido",
};
export const updateProvider: RequestHandler = async (req, res) => {
  const updateProv = await Providers.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!updateProv) return res.status(202).send();
  return res.send(updateProv);
};
export const deleteProvider: RequestHandler = async (req, res) => {
  const deleteProv = await Providers.findByIdAndDelete(req.params.id);
  if (!deleteProv) return res.status(202).send();
  return res.send();
};
