class FormPage {
    clickSubmit(){ //Clicks submit on form
        cy.get(`button[type="submit"]`).click()//click submit
    }
}
export default FormPage