const sinon = require("sinon");// Importa a biblioteca de assert do Node.js para verificar as condições dos testes em caso de aerro
const assert = require("assert"); // Importa a biblioteca de assert do Node.js para verificar as condições dos testes em caso de acerto
const controller = require("../../api/controllers/HeroesController"); // Importa o UserController que está sendo testado.
const { mockAsync, RESPONSE, HERO, GUN } = require("../util/index"); // Importa funções de utilidade e constantes necessárias para os testes.

// as bases para os testes foram pegas e adaptadas do projeto, mas a parte de testes dos controladores eu fiz no proprio projeto.


describe("HeroesController", () => { // Descreve um conjunto de testes para o UserController.

    // TESTE PARA CRIAR UM HEROI
    it("Should create a Hero", async () => { // Testa a função 'create' do controlador.
        const createStub = mockAsync(controller, "create", HERO); // Simula a função 'create' 
        const result = await controller.create({}, RESPONSE); // Chama a função 'create' com parâmetros e armazena o resultado.
        assert.strictEqual(createStub.calledOnce, true); // Verifica se a função 'create' foi chamada .
        assert.deepStrictEqual(result, HERO); // Verifica se o resultado da função é o esperado.
        createStub.restore(); // Reinicia a função 'create' 
    }); 

    it("Should handle error creating a hero", async () => { // Testa se o erro ao criar um novo Heroi age como esperado
        const errorMessage = "Erro ao criar Heroi";
        const createStub = sinon.stub(controller, "create").resolves({ error: errorMessage });
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(createStub.calledOnce, true);
        assert.strictEqual(result.error, errorMessage);
        createStub.restore();
    });

    // A PARTIR DAQUI NÃO VOU COMENTAR POIS A BASE É A MESMA

    //TESTE PARA LISTAR OS REGISTROS
    it ("Should list  heroes", async () => { 
        const listStub = mockAsync(controller, "list", HERO); 
        const result = await controller.list({}, RESPONSE);
        assert.strictEqual(listStub.calledOnce, true); 
        assert.deepStrictEqual(result, HERO); 
        listStub.restore();
    });

   
    // não consegui fazer com que o erro funcionasse mesmo adicionando um novo erro
    it("Should handle error LISTING heroes", async () => { 
        const errorMessage = "Erro ao criar Heroi";
        const listStub = sinon.stub(controller, "list").resolves({ error: errorMessage });
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(listStub.calledOnce, true);
        assert.strictEqual(result.error, errorMessage);
        listStub.restore();
    });

    //TESTE PARA CHAMAR HEROIS E ARMAS
    it ("Should listing heroes and guns", async () => { 
        const listStub = mockAsync(controller, "listwithgun", HERO, GUN); 
        const result = await controller.listwithgun({}, RESPONSE);
        assert.strictEqual(listStub.calledOnce, true); 
        assert.deepStrictEqual(result, HERO, GUN); 
        listStub.restore();
    });
    // também não consegui fazer com que esse teste de erros funcione
    it("Should handle error listing heroes and guns", async () => { 
        const errorMessage = "Erro ao chamar armas e";
        const listStub = sinon.stub(controller, "listwithgun").resolves({ error: errorMessage });
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(listStub.calledOnce, true);
        assert.strictEqual(result.error, errorMessage);
        listStub.restore();
    });







});