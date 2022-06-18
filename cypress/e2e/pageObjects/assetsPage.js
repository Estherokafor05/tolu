class Assets
{
getSpace(spacename)
    {
    cy.get('.sidebar__linklist-inner--with-star > .sidebar__link')
        .should('contain', spacename).click()
    }
getAssets()
    {
        
    cy.get('[href="#!/me/spaces/162399/assets"]')
        .should('contain', 'Assets')
        .click()
    }
uploadAssetbtn()
    {
    cy.get('.uk-button').contains('Confirm')
    .click()
    }
getAssetPage(spacename){
    this.getSpace(spacename)
    this.getAssets()
    }
selectRow1()
    {
    cy.get(':nth-child(1) > .list__flex > .list__select > input')
    .click()
    }
selectRow2()
{
    cy.get(':nth-child(2) > .list__flex > .list__select > input')
}
deleteAssets()
    {
    cy.get(':nth-child(1) > .list__flex > .list__select > input')
    .click()
    cy.get('.list__message_e').should('have.text', 'No assets found')
    }
createFolder()
{
    cy.get('.util__grow > .uk-width-1-1').type('Esther')
    cy.get('.uk-position-relative > .uk-button')
    .click()
}

}

export default Assets;