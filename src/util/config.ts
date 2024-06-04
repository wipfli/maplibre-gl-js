import type {RequestParameters, GetResourceResponse} from './ajax';

/**
 * This method type is used to register a protocol handler.
 * Use the abort controller for aborting requests.
 * Return a promise with the relevant resource response.
 */
export type AddProtocolAction = (requestParameters: RequestParameters, abortController: AbortController) => Promise<GetResourceResponse<any>>

export type FeaturePropertiesTransform = (source: string, sourceLayer: string, tileID: string, geometryType: string, featureID: number, properties: { [_: string]: string | number | boolean }) => void

/**
 * This is a global config object used to store the configuration
 * It is available in the workers as well.
 * Only serializable data should be stored in it.
 */
type Config = {
    MAX_PARALLEL_IMAGE_REQUESTS: number;
    MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME: number;
    MAX_TILE_CACHE_ZOOM_LEVELS: number;
    REGISTERED_PROTOCOLS: {[x: string]: AddProtocolAction };
    FEATURE_PROPERTIES_TRANSFORM: FeaturePropertiesTransform;
    WORKER_URL: string;
};

export const config: Config = {
    MAX_PARALLEL_IMAGE_REQUESTS: 16,
    MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME: 8,
    MAX_TILE_CACHE_ZOOM_LEVELS: 5,
    REGISTERED_PROTOCOLS: {},
    FEATURE_PROPERTIES_TRANSFORM: null,
    WORKER_URL: ''
};
