import HomePage from "../../integration/PageObject/HomePage"

const homePage = new HomePage();

describe('Goes to the Homepage', () =>{
    it('Should go to the homepage', () =>{
        homePage.visitHomePage() //visit the home page!
    })
})

describe('Checks to See if Menu, Find Us, Call Us, and Write Us are Present', () => {
    it('Should find Menu, Find Us, Call us, and Write us elements', () =>{
        homePage.findTxtOnPage('Menu') //If the text exists on the page... Its a pass!
        homePage.findTxtOnPage('Find Us')
        homePage.findTxtOnPage('Call Us')
        homePage.findTxtOnPage('Write Us')
    })
})

describe('Checks to See if Our Services Button is on the page, and if it can be clicked', () => {
    it('Should find Our Services Button, and click it', () =>{
        homePage.clickElmnt('a','href','https://okcrovercentral.com/services') //Finds the extra service button thats in the middle of the page, and clicks it
        cy.url().should('eq','https://okcrovercentral.com/services/')//I've arrived at the services page! Nothing more for me to do

    })
})

describe('Check to See if Write Us Page is functioning properly', () => {
    it('Should find Call us and Write Us buttons, and click it', () =>{
         homePage.clickElmnt('a','onclick','triggerHeaderWriteUs()', ) //Find a div, with an id of 'rc-call-to-action', with a child that contains 'Write Us', and click it!
    })
    it('Should close the cookies pop-up', () =>{ //If the cookies window exists, close it!
        cy.get('div[id="rc-cookies-disclaimer-close"]')
            .then((val) => {
                homePage.clickElmnt('div','id','rc-cookies-disclaimer-close')
            })
    })

    it('Should display "Hi, My name is" to the user', () => {
            homePage.findTxtOnPage('Hi, my name is') //Ensure the text exists
    })



    it('Should display "I\'m Writing In About"', () => {
        homePage.findTxtOnPage('I\'m writing in about')
    })
    it('Should display "My Email Is" ', () => {
        homePage.findTxtOnPage('My email is')
    })
    it('Should display "My Phone is" ', () => {
        homePage.findTxtOnPage('My phone is')
    })
    it('Should display "I Just Wanted To Say:" ', () => {
        homePage.findTxtOnPage('I just wanted to say:')
    })
    it('Should say in the Hi, my name is field: Your name here', () => {
        homePage.findElmntOnPage('input', 'placeholder', 'Your name here') //does an input, with placeholder='Your name here' exist?
    })
    it('Should say in the I\'m Writing In About field: Select an option', () => {
        homePage.findElmntOnPage('select', 'class', 'form-control pseudo-placeholder') //does a select field, with class='form-control pseudo-placeholder' exist?
    })
    it('Should say in the My Email Is field: Your email here', () => {
        homePage.findElmntOnPage('input', 'placeholder', 'Your email here')
    })
    it('Should say in the My Phone Is field: Your email here', () => {
        homePage.findElmntOnPage('input', 'placeholder', 'Your phone here')
    })
    it('Should say in the I Just Wanted To Say field: Your message here', () => {
        homePage.findElmntOnPage('textarea', 'placeholder', 'Your message here')
    })
    it('Should have a captcha', () => {
        homePage.findElmntOnPage('textarea','id','g-recaptcha-response') //does the captcha exist?
    })
    it('Should require a Name, Topic, Email, Phone, and Message', () => {
        homePage.clickElmnt('button','type','submit') //click that submit button so we can see what is required for the contact us form
        homePage.findTxtOnPage('Name is required')
        homePage.findTxtOnPage('Topic is required')
        homePage.findTxtOnPage('Email is required')
        homePage.findTxtOnPage('Phone is required')
        homePage.findTxtOnPage('Message is required')
    })
    it('Should not say Name is required if a Name is entered and Submit is pressed', () => {
        homePage.typeInElmnt('input','name','write-us-form-name','My name is Jeff') //enter 'My name is Jeff' into the name form
        homePage.clickElmnt('button','type','submit') //click submit
        cy.contains('Name is required').should('not.exist') //Make sure that pesky 'Name is required' error isn't hanging around since we filled in a name
    })
    it('Should not say Topic is required if a Topic is entered and Submit is pressed', () => {
        homePage.selectElement('select','class','form-control pseudo-placeholder',  "An issue with a car") //This was a long one. Basically we are passing arguments saying 'select the options menu, and pick "An issue with a car"'
        homePage.clickSubmit()
        cy.contains('Topic is required').should('not.exist') // Make sure that pesky 'Topic is required' error isn't hanging around since we filled in a topic (an issue with a car)
    })

    it('Should not say Email is required if a Email is entered and Submit is pressed', () => {
        homePage.typeInElmnt('input','name','write-us-form-email','testeremail@test.org') //enter an email into the email field
        homePage.clickSubmit()
        cy.contains('Email is required').should('not.exist') //Email required shouldn't be a thing anymore
    })
        //See comments for above it statements
    it('Should not say Phone is required if a Phone Number is entered and Submit is pressed', () => {
        homePage.typeInElmnt('input','name','write-us-form-phone','405-431-1127')
        homePage.clickSubmit()
        cy.contains('Phone is required').should('not.exist')
    })

    it('Should not say Message is required if a Message is entered and Submit is pressed', () => {
        homePage.typeInElmnt('textarea','name','write-us-form-message','Hi Kyree! Long time no see. Your site is impressive. Two thumbs up!')
        homePage.clickSubmit()
        cy.contains('Message is required').should('not.exist')
    })

    it('Should now say reCAPTCHA is required', () => {
        cy.contains('reCAPTCHA is required').should('exist') //We want to see this error message
    })
    it('Should allow user to click the x to get out of it', () => {
        homePage.clickElmnt('div','class',"rc-header-dropdown-close") //click the div that contains the exit button
    })
    it('Should ensure that menu closed properly', () => { //The below elements in this it statement shouldn't exist, as the menu is closed.
        cy.contains('Hi, my name is').should('not.exist')
        cy.contains('I\'m writing in about').should('not.exist')
        cy.contains('My email is').should('not.exist')
        cy.contains('My phone is').should('not.exist')
        cy.contains('I just wanted to say:').should('not.exist')
    })
})

describe('Ensure that the user can visit the About Us page, Services page, Maintenance page, and News page from the home screen', () => {
    beforeEach(() => {
        homePage.visitHomePage()
        homePage.clickMenuBttn()
    })
    it('Should be able to get to the About Us page from the menu ', () => {
        homePage.clickAboutUs()
        cy.url().should('eq', 'https://okcrovercentral.com/about-us/') //url should equal about-us
    })
    it('Should be able to get to the Services page from the menu ', () => {
        homePage.clickService()
    })
    it('Should be able to get to the Maintenance page from the menu ', () => {
        homePage.clickMaintenance()
    })
    it('Should be able to get to the News page from the menu ', () => {
        homePage.clickNews()
            })
})

describe('Ensure that Find Us works from the menu bar', () =>{
    it('Should be able to get to the Find Us Page using the Menu bar', () =>{
        homePage.visitHomePage()
        homePage.clickElmnt('img','alt','Find Rover Central') //Click the Find Us Button
        cy.contains('Get directions').should('exist') //does Get directions exist?
    })
})

