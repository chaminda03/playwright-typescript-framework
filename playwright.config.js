// @ts-check



const config = ({
  testDir: './tests',
 timeout: 40 * 1000,
 reporter: [['list'], ['html', { open: 'never' }]], 
  use:{

  browserName: 'chromium',
  headless: !!process.env.CI,
  screenshot: 'only-on-failure',
    // traces record typed values, including passwords, so keep them off in CI
    trace: process.env.CI ? 'off' : 'retain-on-failure',
  },

});
module.exports = config;

