/*
import HomePage from "../../integration/PageObject/HomePage"
import SearchPage from "../../integration/PageObject/SearchPage"

const homePage = new HomePage();
const searchPage = new SearchPage();

describe('User ability to clear search bar after searching', () => {
  it('GIVEN the user visits google.com', () => {
      homePage.visitHomePage()

  })
    it('AND the user clicks the search bar', () => {
        homePage.clickHomeSearch()//Click the Search element
    })
    it('AND the user types in something to the search bar and hits submit', () => {
        homePage.googleSearchGenerator();
    })
    it('THEN user verifies the ability to clear the search bar', () => {
        searchPage.clickSearchBar() //clicks the search bar
        cy.focused().clear(); //Takes the focused element and clears it
    })
})
*/
