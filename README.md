# Bank of Flatitron
  Bank of Flatitron is a React application that displays a list of the recent bank transactions, among other features.

## Instructions

For this project, I will be building out a React application that displays a list of your recent bank transactions, among other features

##Api npoint
https://api-test-7h6w.onrender.com/transactions"
## Setup
After cloning the the project:, to your local machine:-
1. Run `npm install` in your terminal.
2. Run `npm run server`
3. In a new terminal, run `npm start`. This will run your React app



The app uses [Semantic UI](https://semantic-ui.com/)



## Endpoints

The base URL for your backend is: `http://localhost:8001`

## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.

### Endpoints for Core Deliverables

#### GET /transactions

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": "number",
},

Example Response:

```json
{
 "transactions": [
   {
     "id": 1,
     "date": "2019-12-01",
     "description": "Paycheck from Bob's Burgers",
     "category": "Income",
     "amount": 1000
}]
   },


 ## As a user, I can:

-See a table of all transactions.
-Fill out and submit the form to add a new transaction. This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*
-Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.