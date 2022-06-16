class HomePage {
    visitHomePage(){
        cy.visit('https://okcrovercentral.com')
    }
    findTextOnPage(text){
            cy.contains(text)
    }
    findElementOnPage(element, elementProperty,ID,click,type,text,select,value){
        if(click && !type){
            cy.get(`${element}[${elementProperty}="${ID}"]`).click()
        } else if (type && !click) {
            cy.get(`${element}[${elementProperty}="${ID}"]`).type(text)
        } else if (!type && !click && select){
            cy.get(`${element}[${elementProperty}="${ID}"]`).select(value)
        } else {
            cy.get(`${element}[${elementProperty}="${ID}"]`)
        }
    }
    findElementOnPageDeeper(element, elementProperty,ID, ID2, click){
        click ? cy.get(`${element}[${elementProperty}="${ID}"]`)
            .contains(`${ID2}`).click()
            : cy.get(`${element}[${elementProperty}="${ID}"]`)
                .contains(`${ID2}`);

    }

}
export default HomePage