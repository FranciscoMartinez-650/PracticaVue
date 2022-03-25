//Conjunto de pruebas testu

import { shallowMount } from "@vue/test-utils";

describe('Example Component', ()=> {

  test('Debe de ser mayor a 10', () => {

    //Arreglar
    let value = 8;
    //Estimulo
    value = value + 2
    //Observar Resultado
    expect(value).toBeGreaterThan(10)
  })
  

})