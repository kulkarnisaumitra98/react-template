import { generateApiClient } from '@utils/apiUtils';
const artistApi = generateApiClient('itunes');

export const getArtistsApi = artistName => artistApi.get(`/search?term=${artistName}`);
