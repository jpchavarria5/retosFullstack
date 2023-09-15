const Puntajes = require("../models/puntajes");
const Empleado = require("../models/empleado");
const Premio = require("../models/premio");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const puntajes = await Puntajes.findAll();

  res.json(puntajes);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const puntaje = await Puntajes.findByPk(id);

  if (!puntaje) {
    return res.json({
      status: "error",
      msj: "No existe ningun puntaje con el id proporcionado.",
    });
  }

  res.json(puntaje);
});

router.post("/", async (req, res) => {
  const { idEmpleado, idPremio, puntosObtenidos, fecha } = req.body;
  const empleadoId = await Empleado.findByPk(idEmpleado);
  const premioId = await Premio.findByPk(idPremio);

  if (!idEmpleado || !idPremio || !puntosObtenidos || !fecha) {
    return res.json({
      status: "error",
      msj: "Campos vacios.",
    });
  }

  if (!empleadoId) {
    return res.json({
      status: "error",
      msj: "No existe ningun empleado con el id proporcionado.",
    });
  }

  if (!premioId) {
    return res.json({
      status: "error",
      msj: "No existe ningun premio con el id proporcionado.",
    });
  }

  /* const puntajeWithPremioId = await Puntajes.findOne({where: { idPremio }});

  if (puntajeWithPremioId) {
    return res.json({
      status: "error",
      msj: "Ya existe un puntaje con el premio proporcionado.",
    });
  } */

  const puntajeC = await Puntajes.create({ idEmpleado, idPremio, puntosObtenidos, fecha });

  res.json({
    status: "ok",
    msj: "Puntaje creado correctamente.",
    data: puntajeC,
  });
});

router.put("/:id", async (req, res) => {
  const { idPuntaje, idEmpleado, idPremio, puntosObtenidos, fecha } = req.body;
  const puntajeId = await Puntajes.findByPk(idPuntaje);
  const empleadoId = await Empleado.findByPk(idEmpleado);
  const premioId = await Premio.findByPk(idPremio);

  if (!puntajeId) {
    return res.json({
      status: "error",
      msj: "No existe ningun puntaje con el id proporcionado.",
    });
  }

  if (!idPuntaje || !idEmpleado || !idPremio || !puntosObtenidos || !fecha) {
    return res.json({
      status: "error",
      msj: "Campos vacios.",
    });
  }

  if (!empleadoId) {
    return res.json({
      status: "error",
      msj: "No existe ningun empleado con el id proporcionado.",
    });
  }
  
  if (!premioId) {
    return res.json({
      status: "error",
      msj: "No existe ningun premio con el id proporcionado.",
    });
  }
  
  /* const puntajeWithPremioId = await Puntajes.findOne({where: { idPremio }});

  if (puntajeWithPremioId) {
    return res.json({
      status: "error",
      msj: "Ya existe un puntaje con el premio proporcionado.",
    });
  } */

  await puntajeId.update({ idEmpleado, idPremio, puntosObtenidos, fecha });

  res.json({
    status: "ok",
    msj: "Puntaje actualizado correctamente.",
    data: puntajeId,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const puntaje = await Puntajes.findByPk(id);

  if (!puntaje) {
    return res.json({
      status: "error",
      msj: "No existe ningun puntaje con el id proporcionado.",
    });
  }

  await puntaje.destroy();

  res.json({
    status: "ok",
    msj: "Puntaje eliminado correctamente.",
  });
});

module.exports = router;