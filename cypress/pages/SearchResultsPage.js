class SearchResultsPage {
    elements = {
        searchMerchantsInput: () => cy.get('[data-aqa-id="resource-filter-search-input-box"]'),
        resourceFilterSearchResultsText: () => cy.get('[data-aqa-id="resource-filter-search-results-text"]'),
        cardItem: () => cy.get('[data-aqa-id="card-base-item"]'),
        cardItemTitle: () => cy.get('[data-aqa-id="card-base-item"] h4 span'),
        cardItemFiveStarsRating: () => cy.get('[aria-label*="Rating - 5 Stars"]'),
        noResultsTitle: () => cy.get('h4[class*="H4"]'),
        cardItemBadgeTitile: () => cy.get('div[class*="DefaultBadge"] span'),
        categoryCombobox: () => cy.get('[aria-labelledby="feefo-dropdown-Category-label"] button'),
        categoryDropdownOption: () => cy.get('[data-aqa-id="category-dropdown-menu"] span'),
        awardLevelCombobox: () => cy.get('[aria-labelledby="feefo-dropdown-Award_Level-label"] button'),
        awardLevelDropdownOption: () => cy.get('[data-aqa-id="award-level-dropdown-menu"] span'),
        starRatingCombobox: () => cy.get('[aria-labelledby="feefo-dropdown-Star_Rating-label"] button'),
        fiveStarRatingDropdownOption: () => cy.get('#feefo-dropdown-Star_Rating-item-4 span'),
        sortByCombobox: () => cy.get('[aria-labelledby="feefo-dropdown-Sort_By-label"] button'),
        sortByDropdownOption: () => cy.get('#feefo-dropdown-Sort_By-menu span'),
    }

    visit() {
        cy.visit('search-reviews/search-results')
    }

    typeSearchMerchantInput(merchant) {
        this.elements.searchMerchantsInput().type(merchant)
    }

    waitResourceFilterSearchResultsTextHasText(text) {
        this.elements.resourceFilterSearchResultsText().contains(text)
    }

    waitNumberOfCardItemsFound(count) {
        this.elements.cardItem().should('have.length', count)
    }

    waitCardItemNotPresent() {
        this.elements.cardItem().should('not.exist')
    }

    waitCardItemHasTitle(title) {
        this.elements.cardItemTitle().contains(title)
    }

    waitCardItemHasNotTitle(title) {
        this.elements.cardItemTitle().should('not.contain.text', title)
    }

    waitNoResultsTitle() {
        this.elements.noResultsTitle().should('have.text', 'No Results')
    }

    waitCardItemBadgeHasText(badgeText) {
        this.elements.cardItemBadgeTitile().contains(badgeText)
    }

    clickCategoryCombobox() {
        this.elements.categoryCombobox().click()
    }

    selectCategoryOption(option) {
        this.elements.categoryDropdownOption().contains(option).click()
    }

    clickAwardLevelCombobox() {
        this.elements.awardLevelCombobox().click()
    }

    selectAwardLevelOption(option) {
        this.elements.awardLevelDropdownOption().contains(option).click()
    }

    clickStarRatingCombobox() {
        this.elements.starRatingCombobox().click()
    }

    selectFiveStarOption() {
        this.elements.fiveStarRatingDropdownOption().click()
    }

    waitCardItemFiveStarRating() {
        this.elements.cardItemFiveStarsRating().should('be.visible')
    }

    clickSortByCombobox() {
        this.elements.sortByCombobox().click()
    }

    selectSortByOption(option) {
        this.elements.sortByDropdownOption().contains(option).click()
    }
}

module.exports = new SearchResultsPage();