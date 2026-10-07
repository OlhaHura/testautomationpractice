import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    // General test settings
    timeout: 30_000,

    expect: {
        timeout: 10_000,
    },

    // Run tests in parallel
    fullyParallel: true,

    // CI settings
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    // Test report
    reporter: 'html',

    // Common settings
    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'off',
    },

    // Test projects
    projects: [
        {
            name: 'UI',
            testDir: './tests/e2e',

            use: {
                ...devices['Desktop Chrome'],
                baseURL: 'https://testautomationpractice.blogspot.com',
            },
        },

        {
            name: 'API',
            testDir: './tests/api',

            use: {
                baseURL: 'https://api.restful-api.dev',
            },
        },

        {
            name: 'Performance',
            testDir: './tests/performance',
            timeout: 60_000,

            use: {
                ...devices['Desktop Chrome'],
                baseURL: 'https://testautomationpractice.blogspot.com',
            },
        },
    ],
});
