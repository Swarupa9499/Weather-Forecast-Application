# Weather Forecast Application

## Objective
Develop a weather forecast application using JavaScript, HTML, and Tailwind CSS. The application retrieves weather data from an API and displays it in a user-friendly interface with features like location-based forecasts, current weather conditions, and extended forecasts.

## Features
1. **Location-Based Forecast:**
   - Search weather by city name or current location.
   - Dropdown for recently searched cities using local storage.
   - Fetch and display location-specific weather data (temperature, humidity, wind speed).
   - User input validation.

2. **Extended Forecast Display:**
   - Display extended forecasts for multiple days.
   - Organize forecast data in a visually appealing format.

3. **Error Handling:**
   - Handle API errors gracefully and display appropriate messages.

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/)

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/Swarupa9499/Weather-Forecast-Application.git
    cd weather-forecast-app
    ```

2. **Install Tailwind CSS:**
    ```bash
    npm install tailwindcss
    npx tailwindcss init
    ```

3. **Configure Tailwind CSS:**
    ```js
    // tailwind.config.js
    module.exports = {
        content: ["./index.html", "./app.js"],
        theme: {
            extend: {},
        },
        plugins: [],
    };
    ```
    ```css
    /* style.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. **Start the project:**
    - Open `index.html` in your browser using vs code.
    - Add your api key using openweathermap. You need to create account.

## Documentation
- Code is commented for better understanding and maintenance.
- Includes a `README.md` file with setup instructions.

## GitHub Repository
- [Weather Forecast Application](https://github.com/Swarupa9499/Weather-Forecast-Application.git)
