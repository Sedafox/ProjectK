class HomePage {
    visitHomePage(){
        cy.visit('https://okcrovercentral.com').as('Visit homes')
    }
    findTxtOnPage(text){ //find matching text in website
            cy.contains(text)
    }
    findElmntOnPage(element, elementProperty, ID){
        cy.get(`${element}[${elementProperty}="${ID}"]`)
    }
    clickElmnt(element, elementProperty, ID, click){
        cy.get(`${element}[${elementProperty}="${ID}"]`).click()
    }
    typeInElmnt(element, elementProperty, ID, text){
        cy.get(`${element}[${elementProperty}="${ID}"]`).click()
            .focused()
            .type(text)
    }
    selectElement(element, elementProperty, ID, choice){
        cy.get(`${element}[${elementProperty}="${ID}"]`).select(choice)
    }
    clickMenuBttn(){
        this.clickElmnt('a','aria-label','Menu') //Click Menu button on the main page
    }


    clickAboutUs(){
        this.clickElmnt('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 first") //Click AboutUs Button
    }

    clickService(){
        this.clickElmnt('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 second") //Click Service Button
    }
    clickMaintenance(){
        this.clickElmnt('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 third") //Click Maintenance button
    }
    clickNews(){
        this.clickElmnt('a','class',"rc-header-menu-single-link col-md-3 col-sm-6") //Click News button
    }

    closeCookiesWindow(){

    }
}
export default HomePage