## How to test?

1. `npm i openfin-notifications-error-unhandled.tgz`
2. `npm start`
3. Observe that the app started is a blank window and there is error in the console
4. kill all openfin processes
5. `npm run clean`
6. `npm i openfin-notifications-error-handled.tgz`
7. `npm start`
8. Observe that the application is now showing content even when there is an error in the console
