/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type DateOnly, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Weatherforecast}
 */
export function createWeatherforecastFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWeatherforecast;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoWeatherforecast(weatherforecast: Partial<Weatherforecast> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "date": n => { weatherforecast.date = n.getDateOnlyValue(); },
        "summary": n => { weatherforecast.summary = n.getStringValue(); },
        "temperatureC": n => { weatherforecast.temperatureC = n.getNumberValue(); },
        "temperatureF": n => { weatherforecast.temperatureF = n.getNumberValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeWeatherforecast(writer: SerializationWriter, weatherforecast: Partial<Weatherforecast> | undefined = {}) : void {
    writer.writeDateOnlyValue("date", weatherforecast.date);
    writer.writeStringValue("summary", weatherforecast.summary);
    writer.writeNumberValue("temperatureC", weatherforecast.temperatureC);
    writer.writeNumberValue("temperatureF", weatherforecast.temperatureF);
    writer.writeAdditionalData(weatherforecast.additionalData);
}
export interface Weatherforecast extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Date of the weather forecast
     */
    date?: DateOnly;
    /**
     * Weather summary
     */
    summary?: string;
    /**
     * Temperature in Celsius
     */
    temperatureC?: number;
    /**
     * Temperature in Fahrenheit
     */
    temperatureF?: number;
}
/**
 * Builds and executes requests for operations under /weatherforecast
 */
export interface WeatherforecastRequestBuilder extends BaseRequestBuilder<WeatherforecastRequestBuilder> {
    /**
     * Use to request weather data
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Weatherforecast[]>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Weatherforecast[] | undefined>;
    /**
     * Use to request weather data
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const WeatherforecastRequestBuilderUriTemplate = "{+baseurl}/weatherforecast";
/**
 * Metadata for all the requests in the request builder.
 */
export const WeatherforecastRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: WeatherforecastRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "sendCollection",
        responseBodyFactory:  createWeatherforecastFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
