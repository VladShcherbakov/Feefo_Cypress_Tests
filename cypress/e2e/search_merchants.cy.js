import SearchResultsPage from "../pages/SearchResultsPage"

const merchant = 'Orla James'
const secondMerchant = 'Gray Line Orlando'
const partialMerchantName = 'Orla'
const retailText = 'Retail'
const nonExistingMerchant = 'BlaBlaBla'
const travelAndTourismText = 'Travel & Tourism'
const tempestMerchant = 'Tempest Photography'
const businessOption = 'Business Services'
const awardOption = 'Exceptional winners'
const awardPlatinumOption = 'Platinum winners'

beforeEach(() => {
    SearchResultsPage.visit()
})

describe('search merchant feature', () => {
    it('successfully search a merchant', () => {
        const expectedNumberOfFoundMerchants = 1

        SearchResultsPage.typeSearchMerchantInput(merchant)
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(merchant)
        SearchResultsPage.waitNumberOfCardItemsFound(expectedNumberOfFoundMerchants)
        SearchResultsPage.waitCardItemHasTitle(merchant)
        SearchResultsPage.waitCardItemBadgeHasText(retailText)
    })

    it('search a non-existent merchant', () => {
        const expectedNumberOfFoundMerchants = 0

        SearchResultsPage.typeSearchMerchantInput(nonExistingMerchant)
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(nonExistingMerchant)
        SearchResultsPage.waitNumberOfCardItemsFound(expectedNumberOfFoundMerchants)
        SearchResultsPage.waitNoResultsTitle()
        SearchResultsPage.waitCardItemNotPresent()
    })

    it('search with a partial merchant name', () => {
        const expectedNumberOfFoundMerchants = 2

        SearchResultsPage.typeSearchMerchantInput(partialMerchantName)
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(partialMerchantName)
        SearchResultsPage.waitNumberOfCardItemsFound(expectedNumberOfFoundMerchants)
        SearchResultsPage.waitCardItemHasTitle(merchant)
        SearchResultsPage.waitCardItemBadgeHasText(retailText)
        SearchResultsPage.waitCardItemHasTitle(secondMerchant)
        SearchResultsPage.waitCardItemBadgeHasText(travelAndTourismText)
    })

    it('search a merchant with filters', () => {
        const expectedNumberOfFoundMerchants = 1

        //type merchant
        SearchResultsPage.typeSearchMerchantInput(tempestMerchant)
        SearchResultsPage.waitResourceFilterSearchResultsTextHasText(tempestMerchant)

        //select category
        SearchResultsPage.clickCategoryCombobox()
        SearchResultsPage.selectCategoryOption(businessOption)

        //select rating
        SearchResultsPage.clickStarRatingCombobox()
        SearchResultsPage.selectFiveStarOption()

        //select award
        SearchResultsPage.clickAwardLevelCombobox()
        SearchResultsPage.selectAwardLevelOption(awardOption)

        //assertions
        SearchResultsPage.waitCardItemHasTitle(tempestMerchant)
        SearchResultsPage.waitCardItemBadgeHasText(businessOption)
        SearchResultsPage.waitNumberOfCardItemsFound(expectedNumberOfFoundMerchants)
    })

    it('no results for a merchant with filters', () => {
      const expectedNumberOfFoundMerchants = 1

      //type merchant
      SearchResultsPage.typeSearchMerchantInput(tempestMerchant)
      SearchResultsPage.waitResourceFilterSearchResultsTextHasText(tempestMerchant)

      //select category
      SearchResultsPage.clickCategoryCombobox()
      SearchResultsPage.selectCategoryOption(businessOption)

      //select rating
      SearchResultsPage.clickStarRatingCombobox()
      SearchResultsPage.selectFiveStarOption()

      //select award
      SearchResultsPage.clickAwardLevelCombobox()
      SearchResultsPage.selectAwardLevelOption(awardPlatinumOption)

      //assertions
      SearchResultsPage.waitNoResultsTitle()
      SearchResultsPage.waitCardItemNotPresent()
  })
})