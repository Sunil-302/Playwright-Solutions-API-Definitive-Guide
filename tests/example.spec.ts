import { test, expect } from '@playwright/test';
import logger from '../winstonLogger.config';

test('Get booking summary', async ({ request }) => {
 const response =  await request.get("booking/summary?roomid=1");

 expect(response.status()).toBe(200);
 const responseBody = await response.json();
 logger.debug(JSON.stringify(responseBody));

});

