import { expect, test } from '@playwright/test'

test.describe.parallel('API testing', () => {

    test('Test 10: GET Request', async ({ request }) => {
        const response = await request.get('/objects')
        expect(response.status()).toBe(200)
    })


    test('Test 20: GET Request. Parse JSON', async ({ request }) => {
        const response = await request.get('/objects/5')
        const responseBody = await response.json()

        expect(response.status()).toBe(200)
        expect(responseBody.id).toBe('5')
        expect(responseBody.name).toBe('Samsung Galaxy Z Fold2')
        expect(responseBody.data['color']).toBe('Brown')
    })


    test('Test 30: POST Request', async ({ request }) => {
        const response = await request.post('/objects', {
            data: {
                name: 'Apple MacBook 18',
                data: {
                    year: 2026,
                    price: 1999.99,
                    'CPU model': 'Intel Core i11',
                    'Hard disk size': '128 TB'
                }
            }
        });

        expect(response.status()).toBe(200)

        const responseBody = await response.json()
        expect(responseBody.id).toBeTruthy()
        expect(responseBody.createdAt).toBeTruthy()
        expect(responseBody.name).toBe('Apple MacBook 18')
        expect(responseBody.data.year).toBe(2026)
        expect(responseBody.data.price).toBe(1999.99)
        expect(responseBody.data['CPU model']).toBe('Intel Core i11')
        expect(responseBody.data['Hard disk size']).toBe('128 TB')
    });


    test('Test 40: DELETE Request', async ({ request }) => {
        // Create object
        const createResponse = await request.post('/objects', {
            data: {
                name: 'Apple MacBook 100',
                data: {
                    year: 2050,
                    price: 39999.99,
                    'CPU model': 'Intel q77',
                    'Hard disk size': '999 TB'
                }
            }
        });

        expect(createResponse.status()).toBe(200);
        const createdObject = await createResponse.json();
        const objectId = createdObject.id;

        // Delete object
        const deleteResponse = await request.delete(`/objects/${objectId}`);

        expect(deleteResponse.status()).toBe(200);
        const deleteResponseBody = await deleteResponse.json();
        expect(deleteResponseBody.message).toContain('deleted');
    });

})