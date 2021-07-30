import { RequestHandler } from "express";
import Rating from "../models/Rating";
import Providers from "../models/Providers";

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

    const provider = await Providers.findById(req.params.id);
    if (provider) {
      const foundRating = await Rating.find({ provider: provider });
      if (foundRating.length)

        return res.send({
          message: `Éstas son las reseñas de ${provider.firstName}.`,
          data: foundRating,
        });

      } else {
        return res.status(404).send({
          message: "No hay reseñas para mostrar por el momento.",
          data: avgAssessment,
        });
      }

      return res.status(201).send({
        message: "Sin reseñas por el momento.",
      });

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
