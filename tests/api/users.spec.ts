import { test, expect } from '../../fixtures/test-data-fixtures'
import compareResponseWithRequest from '../../helpers/compareResponseWithRequest'
import runQuery from '../../helpers/dbUtils'

test.describe.configure({mode: 'serial'})

test.describe('users', () => {
  let userId

  test('Create a new student using Post', async ({ request, userData }) => {
    const response = await request.post(process.env.API_ENDPOINT, {
      // headers: {
      //   Accept: 'application/json',
      //   Authorization: 'Bearer 123123123123123'
      // }
      data: userData.postRequestBody,
    })

    const statusCode = response.status()
    console.log('Status code: ' + statusCode)

    expect(response.ok()).toBeTruthy()

    const responseBody = await response.json()
    console.log(responseBody)
    console.log(responseBody.FIRST_NAME)

    userId = responseBody.STUDENT_ID
    console.log(userId + ' THIS IS ID')


    compareResponseWithRequest(responseBody, userData.postRequestBody)

    const query = `SELECT * FROM Users WHERE email = '${userData.postRequestBody.EMAIL}'`

    const result = await runQuery(query)
    console.log(result)

    expect(result).toBeDefined()
    expect(result.length).toBe(1)
  })

  test('Get the created user', async ({ request, userData }) => {
    console.log(`${process.env.API_ENDPOINT}/${userId}`)
    const response = await request.get(`${process.env.API_ENDPOINT}/${userId}`)

    expect(response.ok()).toBeTruthy()

    const responseBody = await response.json()

    compareResponseWithRequest(responseBody, userData.postRequestBody)
  })


  test('Update a request using PUT', async ({ request, userData }) => {
    const response = await request.put(`${process.env.API_ENDPOINT}/${userId}`, {
      data: userData.putRequestBody
    })

    expect(response.ok()).toBeTruthy()
    const responseBody = await response.json()
    console.log(JSON.stringify(responseBody, null, 2))
  })

  test('Delete the user using DELETE', async ({ request, userData }) => {
    const response = await request.delete(`${process.env.API_ENDPOINT}/${userId}`)
    expect(response.ok()).toBeTruthy()
  
    const query = `SELECT * FROM users WHERE email = '${userData.putRequestBody.EMAIL}'`
    const result = await runQuery(query)

    expect(result.length).toBe(0)
  })
})