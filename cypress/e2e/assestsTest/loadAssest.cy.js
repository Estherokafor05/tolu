import Login from "../pageObjects/loginPage";
import Assets from "../pageObjects/assetsPage";

describe('Assets page', () => {
  const login = new Login()
  const assets = new Assets()

  beforeEach(() => {
      cy.visit("/")
      login.loginFunction("okaforesther55@gmail.com", "Bible@123")
  })

  it('should verify that user can access asset page', () => {
    assets.getSpace("Your first space")
    assets.getAssets()
    
  })

  it('should verify that user can upload assets', () => {
    assets.getAssetPage("Your first space")
    cy.fixture('IMG_8118.HEIC')
    cy.get('.upload-select').attachFile('IMG_8118.HEIC')
    assets.uploadAssetbtn()
    cy.waitUntil( () => {
     cy.get( ".uk-icon-spin uk-icon-refresh")
     
    })
     
  })

  it('should verify that user can select and replace asset', () => {
    assets.getAssetPage("Your first space")
    assets.selectRow()
    cy.fixture('IMG_8119.HEIC')
    cy.get('.upload-select').attachFile('IMG_8119.HEIC')
    assets.uploadAssetbtn()
    

  })

  it('should verify that user is able to delete assets', () => {
    assets.getAssetPage("Your first space")
    assets.selectRow2()
    assets.deleteAssets()
  })

  it('should verify user can add a foldername' , () => {
    assets.getAssetPage("Your first space")
    assets.createFolder()
  })
})