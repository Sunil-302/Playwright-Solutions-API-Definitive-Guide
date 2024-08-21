# Playwright-Solutions-API-Definitive-Guide


# Playwright-Solutions-API-Definitive-Guide

## Playwright API Automation Project

This project demonstrates how to use Playwright for API automation testing with TypeScript, including conditional logging based on environment variables.

## Running Tests

### Without Debug Logs

To run the tests without debug logs:
```powershell
$env:LOG_LEVEL = "info"; npx playwright test 
```

### With Debug Logs

To run the tests with debug logs:

```powershell
 $env:LOG_LEVEL = "debug"; npx playwright test
 ```

### Running Specific project

To run tests for a specific project (e.g., Chromium) without debug logs:

```powershell
$env:LOG_LEVEL = "info"; npx playwright test --project=chromium
```



