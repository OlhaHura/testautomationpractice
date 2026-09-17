import { expect, test } from '@playwright/test'

test.describe.parallel('API testing', () => {
    const baseUrl = 'https://rickandmortyapi.com/api'

    test('Simple API test', async ({ request }) => {
        const response = await request.get(`${baseUrl}/character`)
        expect(response.status()).toBe(200)
    })


    test('Parse JSON', async ({ request }) => {
        const response = await request.get(`${baseUrl}/character/3`)
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.id).toBe(3)
        expect(responseBody.species).toBe('Human')
        expect(responseBody.created).toBeTruthy()
    })
})