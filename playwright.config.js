// @ts-check



const config = ({
  testDir: './tests',
 timeout: 40 * 1000,
 reporter: [['list'], ['html', { open: 'never' }]], 
  use:{

  browserName: 'chromium',
  headless: false,
  screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

});
module.exports = config;

