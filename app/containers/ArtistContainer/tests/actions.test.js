import { artistContainerCreators, artistContainerTypes } from '../reducer';

describe('ArtistContainer action tests', () => {
  it('has a type of REQUEST_GET_ARTISTS', () => {
    const expected = {
      type: artistContainerTypes.REQUEST_GET_ARTISTS,
      artistName: 'artistName'
    };
    expect(artistContainerCreators.requestGetArtists('artistName')).toEqual(expected);
  });
});
