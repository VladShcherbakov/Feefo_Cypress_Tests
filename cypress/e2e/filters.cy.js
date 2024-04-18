import SearchResultsPage from "../pages/SearchResultsPage";

const fullNumberOfItems = 8
const azSorting = 'Name - (A - Z)'
const zaSorting = 'Name - (Z - A)'
const allCategories = 'All Categories'
const businessServices = 'Business Services'
const platinumWinners = 'Platinum winners'
const fiveStarsText = '5 stars'
const firstComapny = '&Keep'
const lastCompany = 'www.cape-cove.com'
const goldWinners = 'Gold winners'

beforeEach(() => {
    SearchResultsPage.visit()
})

describe('filters feature', () => {
    it('select category', () => {
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(allCategories)
        SearchResultsPage.clickCategoryCombobox()
        SearchResultsPage.selectCategoryOption(businessServices)
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(businessServices)
        SearchResultsPage.waitNumberOfCardItemsFound(fullNumberOfItems)
        SearchResultsPage.waitCardItemBadgeHasText(businessServices)
    })

    it('select award level', () => {
        SearchResultsPage.clickAwardLevelCombobox()
        SearchResultsPage.selectAwardLevelOption(platinumWinners)
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(platinumWinners)
        SearchResultsPage.waitNumberOfCardItemsFound(fullNumberOfItems)
    })

    it('select five star rating', () => {
        SearchResultsPage.clickStarRatingCombobox()
        SearchResultsPage.selectFiveStarOption()
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(fiveStarsText)
        SearchResultsPage.waitNumberOfCardItemsFound(fullNumberOfItems)
        SearchResultsPage.waitCardItemFiveStarRating()
    })

    it('sort results by name', () => {
        //sort a - z
        SearchResultsPage.clickSortByCombobox()
        SearchResultsPage.selectSortByOption(azSorting)
        SearchResultsPage.waitNumberOfCardItemsFound(fullNumberOfItems)
        SearchResultsPage.waitCardItemHasTitle(firstComapny)
        SearchResultsPage.waitCardItemHasNotTitle(lastCompany)

        //sort z - a
        SearchResultsPage.clickSortByCombobox()
        SearchResultsPage.selectSortByOption(zaSorting)
        SearchResultsPage.waitNumberOfCardItemsFound(fullNumberOfItems)
        SearchResultsPage.waitCardItemHasTitle(lastCompany)
        SearchResultsPage.waitCardItemHasNotTitle(firstComapny)
    })

    it('select multiple filters', () => {
        const expectedNumberOfFoundMerchants = 7

        SearchResultsPage.clickCategoryCombobox()
        SearchResultsPage.selectCategoryOption(businessServices)

        SearchResultsPage.clickStarRatingCombobox()
        SearchResultsPage.selectFiveStarOption()

        SearchResultsPage.clickAwardLevelCombobox()
        SearchResultsPage.selectAwardLevelOption(goldWinners)

        SearchResultsPage.waitNumberOfCardItemsFound(expectedNumberOfFoundMerchants)
    })
})