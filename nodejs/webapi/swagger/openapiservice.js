const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 8080;
const server = {
  port: port,
  basic: {
    basePath: "/",
  },
  improved: {
    basePath: "/api",
  },
};

// Basic swagger definition
const BasicswaggerDefinition = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "webapi",
      description: `[http://localhost:${port}/api-docs/swagger.json](http://localhost:${port}/api-docs/swagger.json)`,
      version: "1.0.0",
    },
  },
  apis: ["./server.js"],
};

// Improved swagger definition
const ImprovedswaggerDefinition = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Weather Forecast API",
      description: `[http://localhost:${port}/api-docs/swagger.json](http://localhost:${port}/api-docs/swagger.json)<br>An API that predicts upcoming weather`,
      version: "v1.0.0",
      contact: {
        name: "Contoso",
        email: "api@contoso.com",
        url: "https://contoso.com/support",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}/api`,
      },
    ],
    tags: [
      {
        name: "Weather",
        description: "Weather forecast operations",
      },
    ],
  },
  apis: ["./server.js"],
};

const swaggerSpecs = {
  basic: swaggerJsdoc(BasicswaggerDefinition),
  improved: swaggerJsdoc(ImprovedswaggerDefinition),
};

const options = {
  explorer: true,
  swaggerOptions: {
    url: "/api-docs/swagger.json",
  },
};

const setupSwaggerUi = (app, specs, path = "/api-docs") => {
  app.use(path, swaggerUi.serve, swaggerUi.setup(specs, options));
};

module.exports = {
  server,
  swaggerSpecs,
  setupSwaggerUi,
};
