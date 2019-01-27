var te = require('../test')
var {By} = require('selenium-webdriver')

describe('GameTwist Test cases', function() {
    let test;
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
        test = new te.Test()
    });

// Test for successful login 
    it('Login home page', async function(done) {
        driver = await test.testing('blake2077','Gametwist123#')
        await driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('gametwist');
        });
        await driver.quit()
        done();
    });

// Test the navigation bar by clicking on the 'Slots' link and checking the URL changes to '/slots'
    it('Has a working nav', async function(done) {
        driver = await test.testing('blake2077','Gametwist123#')
        await driver.findElement(By.xpath("(//nav[@class= 'c-nav-primary__grid o-container']//following::a)[2]")).click();
        await driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('slots');
        });
        await driver.quit()
        done();
    });

// Test the navigation bar by clicking on the 'Bingo' link and checking the URL changes to '/bingo'
    it('Has a working nav', async function(done) {
        driver = await test.testing('blake2077','Gametwist123#')
        await driver.findElement(By.xpath("(//nav[@class= 'c-nav-primary__grid o-container']//following::a)[5]")).click();
        await driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('bingo');
        });
        await driver.quit()
        done();
    });

// Test the navigation bar by clicking on the 'Casino' link and checking the URL changes to '/casino'
    it('Has a working nav', async function(done) {
        driver = await test.testing('blake2077','Gametwist123#')
        await driver.findElement(By.xpath("(//nav[@class= 'c-nav-primary__grid o-container']//following::a)[3]")).click();
        await driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('casino');
        });
        await driver.quit()
        done();
    });

// Test the navigation bar by clicking on the 'Poker' link and checking the URL changes to '/poker'
    it('Has a working nav', async function(done) {
        driver = await test.testing('blake2077','Gametwist123#')
        await driver.findElement(By.xpath("(//nav[@class= 'c-nav-primary__grid o-container']//following::a)[4]")).click();
        await driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('poker');
        });
        await driver.quit()
        done();
    });

// // Test sending text
//     it('Sending text', function(done) {
//         var element = this.driver.findElement(selenium.By.name('ctl00$cphNavAndSearch$ctl01$gameSearch'));

//         element.sendKeys('Slot');

//         this.driver.getCurrentUrl().then(function(value) {
//             expect(value).toContain('poker');
//             done();
//         });
//     });

// // Selecting game 
//     it('Selecting game', function(done) {
//         this.driver.sleep(5000); 
//         var element = this.driver.findElement(selenium.By.xpath("//li[2]/a/div[2]/span"));

//         element.click();

//         this.driver.getCurrentUrl().then(function(value) {
//             expect(value).toContain('party');
//             done();
//         });
//     });

// // Logout 
//     it('Sending text', function(done) {
//         this.driver.sleep(5000); 
//         var element = this.driver.findElement(selenium.By.xpath("//*[@id='branding']/div[2]/div[1]/div[4]/ul/li[2]/div/span/span"));
        
// 	element.click();
        
// 	this.driver.sleep(5000); 
//         var element = this.driver.findElement(selenium.By.xpath("//header[@id='branding']/div[2]/div/div[4]/ul/li[2]/div/ul/li[7]/button"));

//         element.click();
// 	this.driver.sleep(5000); 

//         this.driver.getCurrentUrl().then(function(value) {
//             expect(value).toContain('en');
//             done();
//         });
//     });
});
