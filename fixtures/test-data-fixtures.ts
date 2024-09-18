import { test as base } from '@playwright/test'
import userData from '../test-data/userData.json'

export const test = base.extend({
  USERDATA: async ({}, use) => {
    await use(userData)
  },
})

export { expect } from '@playwright/test'
