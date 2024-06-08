const express = require("express"); // import express
swaggerJSDoc = require("swagger-jsdoc"); // import swagger-jsdoc to generate swagger doc
swaggerUi = require("swagger-ui-express"); // import swagger-ui-express to serve swagger docs
const {
  server,
  swaggerSpecs,
  setupSwaggerUi,
} = require("./swagger/openapiservice");

// JSDoc comments for api endpoints
/**
 * @swagger
 * /weatherforecast:
 *   get:
 *    description: Use to request weather data
 *    operationId: getWeatherData
 *    tags:
 *    - Weather
 *    responses:
 *     200:
 *      description: A successful response
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          type: object
 *          properties:
 *           date:
 *            type: string
 *            format: date
 *            description: Date of the weather forecast
 *            example: '2024-06-05'
 *           temperatureC:
 *            type: integer
 *            description: Temperature in Celsius
 *            example: 51
 *           summary:
 *            type: string
 *            description: Weather summary
 *            example: Cool
 *           temperatureF:
 *            type: integer
 *            description: Temperature in Fahrenheit
 *            example: 123
 */
const app = express();

// Random weather data
const generateRandomTemperature = () => Math.floor(Math.random() * 61) - 20;
const generateRandomSummary = () =>
  ["Hot", "Warm", "Mild", "Cool", "Bracing", "Scorching", "Freezing"][
    Math.floor(Math.random() * 7)
  ];

// Function to generate random weather data for a specified number of days
const generateRandomWeatherData = (numDays) => {
  const startDate = new Date();
  return Array.from({ length: numDays }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const temperatureC = generateRandomTemperature();
    const temperatureF = Math.round((temperatureC * 9) / 5 + 32);
    const summary = generateRandomSummary();
    return {
      date: date.toISOString().split("T")[0],
      temperatureC,
      summary,
      temperatureF,
    };
  });
};

// route to serve basic swagger JSON, Set up Swagger UI and redirect
app.get(
  `${server.basic.basePath.replace(/\/$/, "")}/weatherforecast`,
  (req, res) => {
    // Generate random weather data for the next 5 days
    const weatherData = generateRandomWeatherData(5);
    res.setHeader("Content-Type", "application/json");
    res.json(weatherData);
  }
);
app.get("/", (req, res) => {
  res.redirect(`${server.basic.basePath.replace(/\/$/, "")}/weatherforecast`);
});
setupSwaggerUi(app, swaggerSpecs.basic, "/swagger");
app.get("/api-docs/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpecs.basic);
});

// route to serve improved swagger JSON, Set up Swagger UI and redirect
// app.get(
//   `${server.improved.basePath.replace(/\/$/, "")}/weatherforecast`,
//   (req, res) => {
//     // Generate random weather data for the next 5 days
//     const weatherData = generateRandomWeatherData(5);
//     res.setHeader("Content-Type", "application/json");
//     res.json(weatherData);
//   }
// );
// app.get("/", (req, res) => {
//   res.redirect(
//     `${server.improved.basePath.replace(/\/$/, "")}/weatherforecast`
//   );
// });
// setupSwaggerUi(app, swaggerSpecs.improved, "/swagger");
// app.get("/api-docs/swagger.json", (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.send(swaggerSpecs.improved);
// });

app.listen(server.port, () => {
  console.log(`Server running on port ${server.port}`);
});
