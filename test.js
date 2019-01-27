var { Builder, By } = require('selenium-webdriver');

class Test {
    // Delay
    delay(ms) {
      return new Promise(res1 => setTimeout(res1, ms));
    }

    async testing(Username, Password) {
      let driver = await new Builder().forBrowser('chrome').build();
      try {
        await driver.get('https://www.gametwist.com/en/');
        await this.delay(5000)
        await driver.findElement(By.xpath("// a[text() = 'Login']")).click();
        await this.delay(5000)
        await driver.findElement(By.id('username')).sendKeys(Username);
        await driver.findElement(By.id('password')).sendKeys(Password);
        await this.delay(5000)
        await driver.findElement(By.xpath("// input[@id = 'password'] //following::button")).click();
        await this.delay(5000)
      } catch (e) {
        console.log(e)
      }
      finally {
        await this.delay(5000)
        //await driver.quit();
        return await driver
      }
    }
  }
  
  let t = new Test()
  //t.testing('blake2077','Gametwist123#') 
  
  module.exports = {
    Test: Test
  }