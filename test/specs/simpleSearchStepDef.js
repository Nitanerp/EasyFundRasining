const StepDef = require('../pageobjects/simpleSearchPageObject');

describe('Search for a cause', ()=> {
    
    it('Validate the homepage', async ()=> {
        await StepDef.open();
        expect(await browser.getTitle()).toEqual('Fundraising | Charity Fundraising Online | Easyfundraising')

    })

    it('Enter the Cause to serach', async ()=> {
        
        await StepDef.searchCause('cause')
        await expect(StepDef.causeText).toHaveTextContaining('We found these for ')
    })

    it('Select the Cause', async ()=> {
        await StepDef.selectCause()
        await expect(StepDef.message).toBePresent()
    })
})