import { test, expect } from '@playwright/test';
import logger from '../winstonLogger.config';
import { isValidDate } from '../src/utils/utils';

let cookie = "";

test.beforeAll("Autheniticate", async ({ request }) => {
  const response = await request.post("auth/login", {
    data: {
      username: "admin",
      password: "password",
    },
  });

  expect.soft(response.status()).toBe(200);
  const headers = response.headers();
  logger.debug(`headers >` + JSON.stringify(headers));
  cookie = headers["set-cookie"];
  logger.debug(`cookie ` + cookie);

})

test('Get booking summary with specific room id', async ({ request }) => {
  const response = await request.get("booking/summary?roomid=1");

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  logger.debug(`specific room id response >` + JSON.stringify(await responseBody));
  expect.soft(isValidDate(responseBody.bookings[0].bookingDates.checkin)).toBe(true);
  expect.soft(isValidDate(responseBody.bookings[0].bookingDates.checkout)).toBe(true);
});

test('Get all bookings with details', async ({ request }) => {
  const response = await request.get("booking/", {
    headers: { cookie: cookie }
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  logger.debug(`All bookings response >` + JSON.stringify(await responseBody));
});



