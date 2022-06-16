/* class HomePage {
    visitHomePage(){
        cy.visit('https://google.com')
    }
    clickHomeSearch(){
        cy.get('div[class="RNNXgb"]').click() //Search Bar
    }
    googleSearchGenerator(NoSubmit) {
        const myText = ["I have always wanted ","You'll never catch me alive facebook!",
            "Lorem Lipsum I cant speak latin", "My music tastes might need some improving.", "I hate bing"] //The text cypress will enter into the text field
        const randomNumber = Math.floor(Math.random() * myText.length) //Choose a random number between 0 and the # of phrases in myText
        cy.get('div[class="RNNXgb"]').type(myText[randomNumber]); //takes a random text and types it into the search field
        if(!NoSubmit) {
            cy.get('form').submit(); //submit the form
        }
    }
    clickSearchSuggestion(){
        cy.get('div[class="aajZCb"]').click() //Click on search suggestion
    }
}
export default HomePage
 */