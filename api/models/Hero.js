module.exports = {
  
  attributes: {
    // adicionei "string para fazer com que funcione o sails lift, pois deu erro avisando que aqui estava vazio."
    name: {
      type: "string",
      required: true,
    },
    power: {
      type: "string",
      required: true,
    },
    age: {
      type: "integer",
      required: true,
    },
    secretIdentity: {
      type: "string",
      required: true,
    },
  },
};
