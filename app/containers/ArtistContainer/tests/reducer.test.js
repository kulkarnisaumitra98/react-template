import { artistContainerTypes, initialState, artistContainerReducer } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('ArtistContainer reducer tests', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(artistContainerReducer(undefined, {})).toEqual(state);
  });

  it('should ensure that the artistName attribute changes when REQUEST_GET_ARTISTS is dispatched', () => {
    const artistName = 'Armin Van Burren';
    const expectedResult = { ...state, artistName };
    expect(
      artistContainerReducer(state, {
        type: artistContainerTypes.REQUEST_GET_ARTISTS,
        artistName
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that songs data should be populated when SUCCESS_GET_ARTISTS is dispatched', () => {
    const data = { artistName: 'Armin Van Buuren', trackName: 'Tuvan', primaryGenreName: 'Trance' };
    const expectedResult = { ...state, artistsData: data };
    expect(
      artistContainerReducer(state, {
        type: artistContainerTypes.SUCCESS_GET_ARTISTS,
        data
      })
    ).toEqual(expectedResult);
  });

  it('should ensure error data is populated when FAILURE_GET_ARTISTS is dispatched', () => {
    const error = 'something_went_wrong';
    const expectedResult = { ...state, artistsError: { error }, artistsData: null };
    expect(
      artistContainerReducer(state, {
        type: artistContainerTypes.FAILURE_GET_ARTISTS,
        error
      })
    ).toEqual(expectedResult);
  });
});
