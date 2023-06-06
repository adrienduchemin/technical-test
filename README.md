# technical-test

## Production

`run yarn build && yarn start`

## Dev

`run yarn dev`

## Test

`run yarn test`

## How to try ?

Start the server

Run a POST request on http://localhost:3000/quest with a similar body
`{
    "claimed_at": "2022-03-15T10:44:22+0000",
    "access_condition": [
        {
            "type": "nft",
            "operator": "contains",
            "value": "0x1"
        },
        {
            "type": "date",
            "value": "2023-03-15T10:44:22+0000",
            "operator": "<"
        },
        {
            "type": "level",
            "value": "2",
            "operator": ">"
        }
    ],
    "user_data": {
        "completed_quests": [
            "94e2e33e-07e9-4750-8cea-c033d7706057"
        ],
        "nfts": [
            "0x1",
            "0x2"
        ],
        "level": 3
    },
    "submission_text": "aaa kayak Joyful."
}`
