import { RequestHandler } from "express";
import Rating from "../models/Rating";
import Providers from "../models/Providers";

export const getAllRating: RequestHandler = async (req, res) => {
  try {
<<<<<<< HEAD
    const provider = await Providers.findById(req.params.id);
    if (provider) {
      const foundRating = await Rating.find({ provider: provider });
      if (foundRating.length)
=======
    let avgAssessment: number = 4;
    const provider = await Providers.findById(req.params.id);
    if (provider) {
      const foundRating = await Rating.find({ provider: provider });
      if (foundRating.length) {
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
>>>>>>> af0a8fe310c3f32ff63acd3440967ce88717fe64
        return res.send({
          message: `Éstas son las reseñas de ${provider.firstName}.`,
          data: foundRating,
        });
<<<<<<< HEAD
      return res.status(201).send({
        message: "Sin reseñas por el momento.",
      });
=======
      } else {
        res.status(200).send({
          message: "No hay reseñas para mostrar por el momento.",
          data: avgAssessment,
        });
      }
>>>>>>> af0a8fe310c3f32ff63acd3440967ce88717fe64
    } else {
      res.status(404).send({
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
