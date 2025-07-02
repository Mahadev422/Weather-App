# Weather App

A modern Weather App built with **React**, **Vite**, **TailwindCSS**, and **react-icons**. This app fetches and displays real-time weather data using a public Weather API.

## Features

- 🌤️ Real-time weather updates for any city
- 🔍 City search functionality
- 📍 Displays temperature, weather conditions, humidity, wind speed, etc.
- 🖼️ Clean and responsive UI with TailwindCSS
- 🎨 Weather condition icons via react-icons
- ⚡️ Lightning-fast development with Vite

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [Weather API](https://openweathermap.org/api) (or the API you chose)

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Weather API Key**

   - Create a `.env` file in the project root:
     ```
     VITE_WEATHER_API_KEY=your_api_key_here
     ```
   - Replace `your_api_key_here` with your actual API key from [OpenWeatherMap](https://openweathermap.org/api) or your chosen API provider.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the app**

   Go to [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## Usage

- Enter the name of a city in the search bar.
- Get instant weather information including temperature, humidity, wind, and more.
- Enjoy a fully responsive and visually appealing weather dashboard.

## Customization

- **Change Theme**: Modify TailwindCSS config or styles as you like.
- **Icons**: Explore more icons from [react-icons](https://react-icons.github.io/react-icons/).
- **API Provider**: Swap out for your preferred weather API.

## License

[MIT](LICENSE)

---

Made with ❤️ using React and Vite.
