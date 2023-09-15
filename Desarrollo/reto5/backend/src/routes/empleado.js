const Empleado = require("../models/empleado");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const users = await Empleado.findAll();

  res.json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await Empleado.findByPk(id);

  if (!user) {
    return res.json({
      status: "error",
      msj: "No existe ningun usuario con el id proporcionado.",
    });
  }

  res.json(user);
});

router.post("/", async (req, res) => {
  const { documento, nombre, apellido, telefono, correo } = req.body;

  if (!documento || !nombre || !apellido) {
    return res.json({
      status: "error",
      msj: "Campos vacios.",
    });
  };

  const docEmpleado = await Empleado.findOne({ where: { documento } });
  if (docEmpleado) {
    return res.json({
      status: "error",
      msj: "Ya existe un empleado con el documento proporcionado.",
    });
  }

  const empleadoC = await Empleado.create({ documento, nombre, apellido, telefono, correo });

  res.json({
    status: "ok",
    msj: "Empleado creado correctamente.",
    data: empleadoC,
  });
});

router.put("/:id", async (req, res) => {
  const { id, documento, nombre, apellido, telefono, correo } = req.body;
  const idEmpleado = await Empleado.findByPk(id);

  if (!idEmpleado) {
    return res.json({
      status: "error",
      msj: "No existe ningun empleado con el id proporcionado.",
    });
  };

  if (!id || !documento || !nombre || !apellido) {
    return res.json({
      status: "error",
      msj: "Campos vacios.",
    });
  }

  if(idEmpleado.documento != documento){
    const docEmpleado = await Empleado.findOne({ where: { documento } });
    if (docEmpleado) {
      return res.json({
        status: "error",
        msj: "Ya existe un empleado con el documento proporcionado.",
      });
    }
  }

  await idEmpleado.update({ id, documento, nombre, apellido, telefono, correo });

  res.json({
    status: "ok",
    msj: "Empleado actualizado correctamente.",
    data: idEmpleado,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const idEmpleado = await Empleado.findByPk(id);

  if (!idEmpleado) {
    return res.json({
      status: "error",
      msj: "No existe ningun empleado con el id proporcionado.",
    });
  }

  await idEmpleado.destroy();

  res.json({
    status: "ok",
    msj: "Empleado eliminado correctamente.",
  });
});

module.exports = router;