const Premio = require('../models/premio');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const premios = await Premio.findAll();

  res.json(premios);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const premio = await Premio.findByPk(id);

  if (!premio) {
    return res.json({
      status: 'error',
      msj: 'No existe ningun premio con el id proporcionado.',
    });
  }

  res.json(premio);
});

router.post('/', async (req, res) => {
  const { nombrePremio, descripcion, valor } = req.body;

  if (!nombrePremio || !valor) {
    return res.json({
      status: 'error',
      msj: 'Campos vacios.',
    });
  }

  const premioRepetido = await Premio.findOne({ where: { nombrePremio } });
  if (premioRepetido) {
    return res.json({
      status: 'error',
      msj: 'Ya existe un premio con el nombre proporcionado.',
    });
  }

  const premioC = await Premio.create({ nombrePremio, descripcion, valor });

  res.json({
    status: 'ok',
    msj: 'Premio creado correctamente.',
    data: premioC,
  });
});

router.put('/:id', async (req, res) => {
  const { idPremio, nombrePremio, descripcion, valor } = req.body;
  const premioId = await Premio.findByPk(idPremio);

  if (!premioId) {
    return res.json({
      status: 'error',
      msj: 'No existe ningun premio con el id proporcionado.',
    });
  }

  if (!idPremio || !nombrePremio || !valor) {
    return res.json({
      status: 'error',
      msj: 'Campos vacios.',
    });
  }

  if(premioId.nombrePremio != nombrePremio){
    const premioRepetido = await Premio.findOne({ where: { nombrePremio } });
    if (premioRepetido) {
      return res.json({
        status: 'error',
        msj: 'Ya existe un premio con el nombre proporcionado.',
      });
    }
  }

  await premioId.update({ nombrePremio, descripcion, valor });

  res.json({
    status: 'ok',
    msj: 'Premio actualizado correctamente.',
    data: premioId,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const idPremio = await Premio.findByPk(id);

  if (!idPremio) {
    return res.json({
      status: 'error',
      msj: 'No existe ningun premio con el id proporcionado.',
    });
  }

  await idPremio.destroy();

  res.json({
    status: 'ok',
    msj: 'Premio eliminado correctamente.',
  });
});

module.exports = router;