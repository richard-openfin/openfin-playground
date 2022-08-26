## Getting Started

1. `npm i`
2. `npm start`

## How to reproduce the issue

1. Have 2 monitors
2. Have primary monitor positioned above secondary monitor
3. Have them scaled differently i.e. primary monitor at 150% and secondary monitor at 100%
4. Start the app and keep generating windows until you see anomalies in their size. Expected behaviour is to have all generated windows with same size.

Important thing here is that the window must be initially created outside of the primary monitor bounds but only if they're created where they're overlapping secondary monitor with different scale.
