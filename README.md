# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


```jsx
<div>
  <p>Amount: </p>
  <p>Status: Paid or Pending</p>
  <p>Description: </p>
  <p>Card Number: </p>
  <p>Card Type: </p>
  <p>Card Holder Name: </p>
  <p>Payment Date: </p>
</div>
```

```json
[
  {
    "id": "1",
    "cardNumber": "1234 5678 9012 3456",
    "cardType": "Visa",
    "cardOwner": "John Doe",
    "date": "2024-01-01",
    "amount": 100,
    "description": "Payment for groceries"
  },
  {
    "id": "2",
    "cardNumber": "9876 5432 1098 7654",
    "cardType": "Mastercard",
    "cardOwner": "Alice Smith",
    "date": "2024-01-05",
    "amount": 50,
    "description": "Payment for utilities"
  },
  {
    "id": "3",
    "cardNumber": "2468 1357 8024 6913",
    "cardType": "American Express",
    "cardOwner": "Bob Johnson",
    "date": "2024-01-10",
    "amount": 200,
    "description": "Payment for rent"
  },
  {
    "id": "4",
    "cardNumber": "8642 9753 1086 2435",
    "cardType": "Discover",
    "cardOwner": "Emily Brown",
    "date": "2024-01-15",
    "amount": 75,
    "description": "Payment for internet"
  },
  {
    "id": "5",
    "cardNumber": "1111 2222 3333 4444",
    "cardType": "Visa",
    "cardOwner": "David Wilson",
    "date": "2024-01-20",
    "amount": 120,
    "description": "Payment for dining out"
  },
  {
    "id": "6",
    "cardNumber": "5555 6666 7777 8888",
    "cardType": "Mastercard",
    "cardOwner": "Emma Taylor",
    "date": "2024-01-25",
    "amount": 90,
    "description": "Payment for entertainment"
  }
]
```