/// <reference types="Cypress" />

const url = "https://www.serasa.com.br/ecred/simulador/";

describe("POST", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(url);
  });
  it("Realizar uma simulação de R$ 1.000 em 6 vezes", () => {
    cy.get("#slider-range")
      .invoke("val", 1000)
      .trigger("change", { force: true });
  });
  it("Realizar uma simulação de R$ 4.000 em 12 vezes", () => {
    cy.get("#slider-range")
      .invoke("val", 4000)
      .trigger("change", { force: true });
    cy.get("#slider-range-month").invoke("val", 12).trigger("change");
  });
  it("Realizar uma simulação de R$ 6.000 em 24 vezes", () => {
    cy.get("#slider-range")
      .invoke("val", 4000)
      .trigger("change", { force: true });
    cy.get("#slider-range-month").invoke("val", 12).trigger("change");
  });
});
