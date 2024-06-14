const sinon = require("sinon"); 

const mockAsync = (model, module, result = null) => {
  return sinon.stub(model, module).resolves(result);
}; // o mock é criado para simulação 

const RESPONSE = { //diz que a resposta deve ser um dado baseada em uma função
  json: function (data) {
    return data;
  },
  status: function (data) {
    return data;
  },
};

const HERO = {
    id: 1,
    name: "Bruce",
    power: "ser rico", 
    age: 37,
    secretIdentity: "Batman",
}


const GUN = {
    id: 1,
    attributes: {
        name: "batrang",
        type: "não letal",
    
        owner: {
          model: "Batmam",          
        },
     },
}

//diz que usaremos essas constatesem outro lugar, nos testes (exporta)
//Adicionei hero e gun que não são padrões
module.exports = {
  mockAsync,
  RESPONSE,
  HERO,
  GUN,
  
 
};