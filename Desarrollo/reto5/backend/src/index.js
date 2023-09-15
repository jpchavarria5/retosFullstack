const express = require('express');
const cors = require("cors");
const empleado = require("./routes/empleado");
const premio = require("./routes/premio");
const puntajes = require("./routes/puntajes");
const app = express();
const db = require("./db/database");
const port = process.env.PORT || 9090;

(async () => {
  try {
      await db.authenticate()
      await db.sync();
      console.log("Entramos en la base de datos");
  } catch (error) {
      throw new Error(error)
  }
 
})();

app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.use('/empleado', empleado);

app.use('/premio', premio);

app.use('/puntajes', puntajes);

app.listen(port, () => {
  console.log("Server corriendo en el puerto: ", port);
});

