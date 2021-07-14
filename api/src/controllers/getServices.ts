import { RequestHandler } from 'express';
import Services from '../models/Services';
import path from 'path';
import fs from 'fs-extra';

export const createService: RequestHandler = (req, res) => {
  const { name, price, description, file } = req.body;

  const dataService = {
    image: `uploads\\${file}`,
    name,
    price,
    description,
  };
  const newService = new Services(dataService);
  newService
    .save()
    .then((result: any) => {
      return res.status(200).json(result);
    })
    .catch((err: Error) => {
      return res.status(301).json(err);
    });
};

export const getServices: RequestHandler = (req, res) => {
  Services.find()
    .then((result: any) => {
      return res.status(200).json(result);
    })
    .catch(() => {
      return res.status(404).json({ message: 'No se encontraron servicios' });
    });
};

export const getServiceDetail: RequestHandler = (req, res) => {
  Services.findById(req.params.id)
    .then((result: any) => {
      return res.status(200).json(result);
    })
    .catch(() => {
      return res.status(404).json({ message: 'Este servicio no existe' });
    });
};

export const getServiceDetailByName: RequestHandler = (req, res) => {
  Services.findOne({ name: req.params.serviceName })
    .then((result: any) => {
      return res.status(200).json(result);
    })
    .catch(() => {
      return res.status(404).json({ message: 'Este servicio no existe' });
    });
};

export const deleteService: RequestHandler = async (req, res) => {
  Services.findByIdAndDelete(req.params.id)
    .then((result: any) => {
      fs.unlink(path.resolve(result.image));
      return res.status(200).json({ message: 'service deleted', result });
    })
    .catch(() => {
      return res.status(404).json({ message: 'Este servicio no existe' });
    });
};
