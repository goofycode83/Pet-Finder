
import express from "express";

const app = express();
const PORT = 3000;

app.get('/api/v1/pets', (req, res) => {
  const { pets } = req.params;
  res.send(`Hear are all the pets: ${pets}`);
  console.log(pets);
})

app.get('/api/v1/pets/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hear are all the pets: ${name}`);
  console.log(name);
})

app.get('/api/v1/pets/owner/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hear are all the pets: ${name}`);
  console.log(name);
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
