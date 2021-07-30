import { RequestHandler } from "express";
import Rating from "../models/Rating";
import Providers from "../models/Providers";
import Users from "../models/Users";
import Events from "../models/Events";

export const getAllRating: RequestHandler = async (req, res) => {
  try {
    let avgAssessment: number = 3.5;
    const provider = await Providers.findById(req.params.id);
    if (provider) {
      const foundRating = await Rating.find({ provider: provider });
      console.log("RATING ENCONTRADO: ", foundRating);
      if (foundRating) {
        let assessments: any[] = [];
        foundRating.map((rating: any) => assessments.push(rating.assessment));
        console.log("LISTA DE RESEÑAS: ", assessments);
        const count: number = assessments.length + 1;
        console.log("COUNT: ", count);
        avgAssessment += assessments.reduce(
          (prev: number, next: number) => (prev += next)
        );
        console.log("TOTAL: ", avgAssessment);
        avgAssessment /= count;
        console.log("PROMEDIO: ", avgAssessment);
        return res.send({
          message: `Éstas son las reseñas de ${provider.firstName}.`,
          data: { rating: avgAssessment, details: foundRating },
        });
      } else {
        return res.status(404).send({
          message: "No hay reseñas para mostrar por el momento.",
          data: avgAssessment,
        });
      }
    } else {
      return res.status(404).send({
        message: "Proveedor no encontrado.",
      });
    }
  } catch (error: any) {
    res.send(error);
  }
};
export const getOneRating: RequestHandler = async (req, res) => {
  try {
    const { id, idRt } = req.params;
    const provider = await Providers.findById(id);
    if (provider) {
      const foundRating = await Rating.findById({ id: idRt });
      if (foundRating) return res.send(foundRating);
      return res
        .status(404)
        .send({ message: "Reseña de prestador no encontrada" });
    }
  } catch (error) {
    res.send(error);
  }
};
export const createRating: RequestHandler = async (req, res) => {
  try {
    const { id, idProv } = req.params;
    const user = await Users.findById({ id: id });
    const provider = await Providers.findById({ id: idProv });
    const event = await Events.findById({ id: req.body.event });
    if (user) {
      let check = false;
      if (provider) {
        provider.rating.forEach((rating: any) => {
          if (rating.event === req.body.event) check = true;
        });
        if (check) {
          return res.status(300).send({
            message: `Ya se ha dejado una reseña a ${provider.firstName} por la reserva ${req.body.event}.`,
          });
        } else {
          const newRating = new Rating({
            ...req.body,
          });
          newRating.save();
          user.rating.push(newRating);
          user.save();
          provider.rating.push(newRating);
          provider.save();
          event.rating.push(newRating);
          event.save();
          return res.status(201).send({
            data: newRating,
            message: "Nueva reseña guardada con éxito.",
          });
        }
      } else res.status(404).send({ message: "Proveedor no encontrado." });
    }
  } catch (error: any) {
    res.status(500).send({
      message: "Ha habido un problema con tu pedido.",
    });
  }
};
