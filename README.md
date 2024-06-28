# Currency Converter App

## Overview
This Currency Converter application is built using Express.js for the backend and React for the frontend. It leverages the OpenExchangeRates API to fetch real-time currency exchange rates, allowing users to convert amounts from one currency to another with ease. The app is tested using Postman to ensure the backend functionality is accurate and reliable.

## Features
- **Real-time Currency Conversion**: Utilizes the OpenExchangeRates API to get the latest exchange rates.
- **Express.js Backend**: Handles API requests and responses efficiently.
- **React Frontend**: Provides a user-friendly interface for entering amounts and selecting currencies.
- **API Integration**: Seamlessly integrates with OpenExchangeRates for up-to-date exchange data.
- **Postman Testing**: Ensures the backend API endpoints work correctly and handle various cases.

## Technologies Used
- **Express.js**: Backend framework for creating RESTful API endpoints.
- **React**: Frontend library for building the user interface.
- **OpenExchangeRates API**: Provides current currency exchange rates.
- **Postman**: Tool for testing and verifying backend API endpoints.

## How It Works
1. **Frontend**: The React application allows users to input the amount they wish to convert and select the source and target currencies.
2. **API Call**: When the user submits the form, a request is sent to the Express.js backend.
3. **Backend**: The Express.js server handles the request, fetches the current exchange rates from the OpenExchangeRates API, and calculates the converted amount.
4. **Response**: The calculated conversion result is sent back to the React frontend and displayed to the user.

## Usage
1. Clone the repository and install the required dependencies:
    ```bash
    git clone https://github.com/your-username/currency-converter-app.git
    cd currency-converter-app
    npm install
    ```
2. Obtain an API key from OpenExchangeRates and set it up in the backend by creating a `.env` file with the following content:
    ```env
    OPENEXCHANGERATES_API_KEY=your_api_key_here
    ```
3. Start the Express.js server:
    ```bash
    npm start
    ```
4. Run the React application:
    ```bash
    npm run dev
    ```
5. Use Postman to test the backend endpoints and ensure they are functioning correctly.

This app provides a straightforward and efficient way to convert currencies using real-time exchange rates, making it a valuable tool for users needing quick and accurate currency conversions.
![Screenshot 2024-06-29 015059](https://github.com/praneeth724/CurrencyConveter/assets/116500216/eff7f377-8eb9-4b70-bd0a-df4ce7667e0c)


