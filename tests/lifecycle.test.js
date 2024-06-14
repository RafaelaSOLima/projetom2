//ESSA PAGINA É MEIO PADRÃO E FOI IMPORTADA DO PROJETO DO GRUPO NESSE CASO NÃO HAVERÃO AUTERAÇÕES NESSA PÁGINA


var sails = require("sails"); // Importa o módulo Sails.js para configurar o ambiente de teste.

// Configuração executada antes de todos os testes
before(function (done) {
  this.timeout(5000); // Define um limite de tempo para esta função (5 segundos).

  // Levanta a aplicação Sails com as configurações especificadas
  sails.lift(
    {
      hooks: { grunt: false, csrf: false }, // Desativa os hooks de Grunt e CSRF.
      log: { level: "warn" }, // Configura o nível de log como "warn".
    },
    function (err) {
      if (err) {
        return done(err); // Retorna o erro, se houver.
      }
      return done(); // Completa a função de configuração.
    }
  );
});

// Configuração executada após todos os testes
after(function (done) {
  // Baixa (desliga) a aplicação Sails
  sails.lower(done);
});