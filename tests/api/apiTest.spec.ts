import { expect, test } from '@playwright/test'

test.describe.parallel('API testing', () => {
    const baseUrl = 'https://rickandmortyapi.com/api'

    test('Simple API test', async ({ request}) => {
        const response = await request.get(`${baseUrl}/character`)
        expect(response.status()).toBe(200)
    })
})