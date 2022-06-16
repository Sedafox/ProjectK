import HomePage from "../../integration/PageObject/HomePage"

const homePage = new HomePage();

describe('Goes to the Homepage', () =>{
    it('Should go to the homepage', () =>{
        homePage.visitHomePage()
    })
})

describe('Checks to See if Menu, Find Us, Call Us, and Write Us are Present', () => {
    it('Should find Menu, Find Us, Call us, and Write us elements', () =>{
        homePage.findTextOnPage('Menu')
        homePage.findTextOnPage('Find Us')
        homePage.findTextOnPage('Call Us')
        homePage.findTextOnPage('Write Us')
    })
})

describe('Checks to See if Our Services Button is on the page, and if it can be clicked', () => {
    it('Should find Our Services Button, and click it', () =>{
        homePage.findElementOnPage('p','id','rc-front-page-services-slider-text-button',true)
        cy.url("https://okcrovercentral.com/services") //I've arrived at the services page! Nothing more for me to do

    })
})

describe('Check to See if Write Us Page is functioning properly', () => {
    it('Should find Call us and Write Us buttons, and click it', () =>{
        homePage.visitHomePage()
        homePage.findElementOnPageDeeper('div','id','rc-call-to-action', 'Write Us', true)
        homePage.findElementOnPage('div','id','rc-cookies-disclaimer-close',true)
    })
    it('Should display "Hi, My name is" to the user', () => {
        homePage.findTextOnPage('Hi, my name is')
    })
    it('Should display "I\'m Writing In About"', () => {
        homePage.findTextOnPage('I\'m writing in about')
    })
    it('Should display "My Email Is" ', () => {
        homePage.findTextOnPage('My email is')
    })
    it('Should display "My Phone is" ', () => {
        homePage.findTextOnPage('My phone is')
    })
    it('Should display "I Just Wanted To Say:" ', () => {
        homePage.findTextOnPage('I just wanted to say:')
    })
    it('Should say in the Hi, my name is field: Your name here', () => {
        homePage.findElementOnPage('input', 'placeholder', 'Your name here')
    })
    it('Should say in the I\'m Writing In About field: Select an option', () => {
        homePage.findElementOnPage('select', 'class', 'form-control pseudo-placeholder')
    })
    it('Should say in the My Email Is field: Your email here', () => {
        homePage.findElementOnPage('input', 'placeholder', 'Your email here')
    })
    it('Should say in the My Phone Is field: Your email here', () => {
        homePage.findElementOnPage('input', 'placeholder', 'Your phone here')
    })
    it('Should say in the I Just Wanted To Say field: Your message here', () => {
        homePage.findElementOnPage('textarea', 'placeholder', 'Your message here')
    })
    it('Should have a captcha', () => {
        homePage.findElementOnPage('textarea','id','g-recaptcha-response')
    })
    it('Should require a Name, Topic, Email, Phone, and Message', () => {
        homePage.findElementOnPage('button','type','submit',true)
        homePage.findTextOnPage('Name is required')
        homePage.findTextOnPage('Topic is required')
        homePage.findTextOnPage('Email is required')
        homePage.findTextOnPage('Phone is required')
        homePage.findTextOnPage('Message is required')
    })
    it('Should not say Name is required if a Name is entered and Submit is pressed', () => {
        homePage.findElementOnPage('input','name','write-us-form-name',false,true,'My name is Jeff')
        homePage.findElementOnPage('button','type','submit',true)
        cy.contains('Name is required').should('not.exist')
    })
    it('Should not say Topic is required if a Topic is entered and Submit is pressed', () => {
        homePage.findElementOnPage('select','class','form-control pseudo-placeholder', false,
        false,null,true, "An issue with a car")
        homePage.findElementOnPage('button','type','submit',true)
        cy.contains('Topic is required').should('not.exist')
    })

    it('Should not say Email is required if a Email is entered and Submit is pressed', () => {
        homePage.findElementOnPage('input','name','write-us-form-email',false,true,'testeremail@test.org')
        homePage.findElementOnPage('button','type','submit',true)
        cy.contains('Email is required').should('not.exist')
    })

    it('Should not say Phone is required if a Phone Number is entered and Submit is pressed', () => {
        homePage.findElementOnPage('input','name','write-us-form-phone',false,true,'405-431-1127')
        homePage.findElementOnPage('button','type','submit',true)
        cy.contains('Phone is required').should('not.exist')
    })

    it('Should not say Message is required if a Message is entered and Submit is pressed', () => {
        homePage.findElementOnPage('textarea','name','write-us-form-message',false,true,'Hi Kyree! Long time no see. Your site is impressive. Two thumbs up!')
        homePage.findElementOnPage('button','type','submit',true)
        cy.contains('Message is required').should('not.exist')
    })

    it('Should now say reCAPTCHA is required', () => {
        cy.contains('reCAPTCHA is required').should('exist')
    })
    it('Should allow user to click the x to get out of it', () => {
        homePage.findElementOnPage('div','class',"rc-header-dropdown-close",true)
    })
    it('Should ensure that menu closed properly', () => {
        cy.contains('Hi, my name is').should('not.exist')
        cy.contains('I\'m writing in about').should('not.exist')
        cy.contains('My email is').should('not.exist')
        cy.contains('My phone is').should('not.exist')
        cy.contains('I just wanted to say:').should('not.exist')
    })
})

describe('Ensure that the user can visit the About Us page, Services page, Maintenance page, and News page from the home screen', () =>{
    it('Should be able to get to the About Us page from the menu ', () =>{
        homePage.visitHomePage()
        homePage.clickMenuBttn()
        homePage.findElementOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 first",true)
        cy.url().should('eq','https://okcrovercentral.com/about-us/')
    })
    it('Should be able to get to the Services page from the menu ', () =>{
        homePage.visitHomePage()
        homePage.clickMenuBttn()
        homePage.findElementOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 second",true)
        cy.url().should('eq','https://okcrovercentral.com/services/')
    })
    it('Should be able to get to the Maintenance page from the menu ', () =>{
        homePage.visitHomePage()
        homePage.clickMenuBttn()
        homePage.findElementOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6 third",true)
        cy.url().should('eq','https://okcrovercentral.com/maintenance/')
    })
    it('Should be able to get to the News page from the menu ', () =>{
        homePage.visitHomePage()
        homePage.clickMenuBttn()
        homePage.findElementOnPage('a','class',"rc-header-menu-single-link col-md-3 col-sm-6",true)
        cy.url().should('eq','https://okcrovercentral.com/news/')
    })
})

describe('Ensure that Find Us works from the menu bar', () =>{
    it('Should be able to get to the Find Us Page using the Menu bar', () =>{
        homePage.visitHomePage()
        homePage.findElementOnPage('img','alt','Find Rover Central', true)
        cy.contains('Get directions').should('exist')
    })
})

