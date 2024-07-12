// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./data/db");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const seriesRoutes = require("./routes/seriesRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

// Configurar CORS
const corsOptions = {
  origin: "http://localhost:5173", // Cambia esto al origen de tu cliente
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas de la API
app.use("/api", userRoutes);
app.use("/api", movieRoutes);
app.use("/api", seriesRoutes);
app.use("/api", commentRoutes);

// Rutas de las páginas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/series", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "series.html"));
});

app.get("/peliculas", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "peliculas.html"));
});

app.get("/favoritos", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "favoritos.html"));
});

app.get("/cuenta", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "cuenta.html"));
});

// Sincronización de la base de datos
db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
    const port = 3030;
    app.listen(port, () => {
      console.log(`Servidor escuchando en ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });

// Configurar CORS
app.use(cors());

app.use(express.json());

// Rutas de la API
app.use("/api", userRoutes);

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Sincronización de la base de datos
db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
    const port = 3030;
    app.listen(port, () => {
      console.log(`Servidor escuchando en ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });
