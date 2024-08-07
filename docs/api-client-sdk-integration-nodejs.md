<!-- markdownlint-disable MD033 -->
# API Client SDK Integration

You can create a client SDK from APIs registered on API Center using Visual Studio Code. This section will guide you through the integration process.

> To use this feature, you need to install the [API Center extension](https://marketplace.visualstudio.com/items?itemName=apidev.azure-api-center) in Visual Studio Code. In addition to that, you may be asked to install the [Microsoft Kiota](https://marketplace.visualstudio.com/items?itemName=ms-graph.kiota) extension.

1. Open the API Center extension, navigate down to the API definition, and right-mouse click on the API definition. Then choose the "Generate API Client" option.

   ![Context Menu: Generate API Client](./images/api-client-sdk-integration-nodejs-01.png)

1. When the pop-up modal appears, click the "Open" button.

   ![Pop-up: Open Microsoft Kiota](./images/api-client-sdk-integration-02.png)

1. When the Kiota extension opens, make sure that everything is selected and click the ▶️ button to generate an API client.

   ![Microsoft Kiota: Generate API Client](./images/api-client-sdk-integration-nodejs-03.png)

1. The prompt asks several questions in the order. Enter the following values:
   1. Choose a name for the client class 👉 `WeatherClient`
   1. Choose a name for the client class namespace 👉 `WebApp.ApiClients`
   1. Enter an output path relative to the root of the project 👉 `nodejs/webapp/src/ApiClients`
   1. Pick a language 👉 `TypeScript - preview`

1. After the client is generated, you can see the client class in the specified output path.

   ![Generated API Client](./images/api-client-sdk-integration-nodejs-04.png)

## Run the WebApp

1. While in the root of the project, run the following command to install the required packages and run the web application.

    ```bash
    cd nodejs/webapp && npm install && npm start
    ```

1. On `localhost:3000`, you will see the following UI, but when you navigate to the Weather page, you only see an empty table with no weather data.

    ![Web Application: Before data](./images/api-client-sdk-integration-nodejs-06.png)

1. Let's make a small modification to the code to make the client SDK work. Open `src/components/WeatherList.js` and uncomment all the commented out code.

> [!NOTE]
> This code sets up an anonymous authentication provider and a fetch request adapter to create a weather client. The `getWeatherForecast` function uses the client to fetch weather data from the API.

1. Refresh `localhost:3000` to load the weather data from your API in your web application.

1. Open the browser and navigate to `https://localhost:3000`.
1. You can see a table with weather forecast data from the WeatherForecast API.

   ![Web Application: Weather Forecast API](./images/api-client-sdk-integration-nodejs-05.png)

> [!NOTE]
> In case you run into the error below, navigate to `webapp/src/weatherClient.ts`, locate line `import { type WeatherforecastRequestBuilder, WeatherforecastRequestBuilderRequestsMetadata } from './weatherforecast/index.ts';` and change `/index.js` to `index.ts`
> ![Web Application: Weather Forecast API](./images/api-client-sdk-integration-nodejs-07.png)