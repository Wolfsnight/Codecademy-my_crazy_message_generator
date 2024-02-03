const name = [
  "Anna",
  "Ben",
  "Celeste",
  "Danni",
  "Emma",
  "Fred",
  "Gerta",
  "Hans",
];

const verb = [
  "lebt",
  "arbeitet",
  "wandert",
  "schläft",
  "kuschelt",
  "küsst",
  "ißt",
  "baded",
];

const pet = [
  "Wolf",
  "Löwe",
  "Dinosauier",
  "Pagagei",
  "Elefant",
  "Hai",
  "Schlange",
  "Kamel",
];

const place = [
  "in die Stadt",
  "auf den Mond",
  "im Dschungel",
  "auf die Alpen",
  "auf einen Bauernhof",
  "irgendwo im Nirgendwo",
  "zwischen Himmel und Hölle",
  "wo der Pfeffer wächst",
];

const random = (array) => {
  const number = array.lenth
  const randomNumber = Math.floor(Math.random() * number)
  return randomNumber
}
console.log(random(pet))
// "Anna" "lebt" mit "einen Wolf" "in die Stadt"
