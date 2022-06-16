class HomePage {
    visitHomePage(){
        cy.visit('https://okcrovercentral.com')
    }
    findTxtOnPage(text){ //find matching text in website
            cy.contains(text)
    }
    findElmntOnPage(element, elementProperty, ID, click, type, text, select, value){
        if(click && !type){ //If the coder wants it to click the element, and not type
            cy.get(`${element}[${elementProperty}="${ID}"]`).click()
        } else if (type && !click) { //If the coder wants it to type and not click
            cy.get(`${element}[${elementProperty}="${ID}"]`).type(text)
        } else if (!type && !click && select){ //If the coder wants it to select an element and not type/click it
            cy.get(`${element}[${elementProperty}="${ID}"]`).select(value)
        } else { //Else, just verify that the element exists
            cy.get(`${element}[${elementProperty}="${ID}"]`)
        }
    }
    findElementOnPageDeeper(element, elementProperty,ID, ID2, click){ //Gets an Element, then finds a child of that element containing ID2
        click ? cy.get(`${element}[${elementProperty}="${ID}"]`) //if click=true, click that element
            .contains(`${ID2}`).click()
            : cy.get(`${element}[${elementProperty}="${ID}"]`) //if click=false, just get the element
                .contains(`${ID2}`);

    }
    clickMenuBttn(){
        this.findElmntOnPage('a','aria-label','Menu',true) //Click Menu button on the main page
    }
    clickSubmit(){ //Clicks submit on form
        this.findElmntOnPage('button','type','submit',true) //click submit
    }

    clickAboutUs(){
        this.findElmntOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 first",true) //Click AboutUs Button
    }

    clickService(){
        this.findElmntOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 second",true) //Click Service Button
    }
    clickMaintenance(){
        this.findElmntOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 third",true) //Click Maintenance button
    }
    clickNews(){
        this.findElmntOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6",true) //Click News button
    }
}
export default HomePage