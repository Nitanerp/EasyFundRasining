class pageObjects{

    open () {
        return browser.url(`https://www.easyfundraising.org.uk/`)
    }

    get cookie () {
        return $("//a[text()='I accept']")
    }

    get search () {
        return $("//input[@name='q']")
    }

    get searchBtn () {
        return $("#causeSubmitSearch")
    }

    get causeText () 
    {
        return $("//p[text()='We found these for ']")
    }

    get moreCauseBtn () {
        return $("#primarySearchResultsShowMore")
    }

    get specificCause () {
        return $("#causesSearchItem11")
    }

    get message () {
        return $("//h1")
    }

    get causeName () {
        return $("//h1/span")
    }

    async searchCause (cause) {
        await this.cookie.click()
        await this.search.setValue(cause)
        await (await this.searchBtn).click()

    }

    async selectCause () {
        await (await this.moreCauseBtn).click()
        await (await this.specificCause).click()
    }


}

module.exports = new pageObjects();