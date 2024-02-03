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
  "spielt",
  "ißt",
  "badet",
];

const pet = [
  "einen Wolf",
  "ein Löwe",
  "ein Dinosauier",
  "einen Pagagei",
  "ein Elefant",
  "ein Hai",
  "eine Schlange",
  "einen Kamel",
];

const place = [
  "in die Stadt",
  "auf den Mond",
  "im Dschungel",
  "auf die Alpen",
  "auf einen Bauernhof",
  "irgendwo im Nirgendwo",
  "zwischen Himmel und Hölle",
  "da, wo der Pfeffer wächst",
];

const random = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);

  return randomNumber
}

const massageGenerator = () => {
  const randomName = name[random(name)]
  const randomVerb = verb[random(verb)];
  const randomPet = pet[random(pet)];
  const randomPlace = place[random(place)];

  console.log(`${randomName} ${randomVerb} mit ${randomPet} ${randomPlace}.`);
}

massageGenerator()
