## Getting Started

1. `npm i`
2. `npm start`

## Connection Issue Notes

-   Reproduced 2 times
    -   once with notifications connecting but dock not connecting
        -   in this case there was over 500 logs of `Connection from client: playground, version: 1.20.0` in notifications
        -   assumtion is that this could be caused by infinite loop issue
        -   not sure whether there was a spike in memory usage but I keep the app running for like 5 mins and I didn't get crash dialog
    -   once with notifications not connecting
        -   the wasn't any indication of an infinite loop
        -   no spike in memory
        -   just attempt to connect to of-notifications-service-v1 3 times with `wait: true`
-   Both reproductions happened when `platform-api-ready` fired twice
-   In some trials, notifications connected and it took longer for dock to connect, cca 30sec after notifications connected - these were the cases where I thought I reproduced but it worked eventually
