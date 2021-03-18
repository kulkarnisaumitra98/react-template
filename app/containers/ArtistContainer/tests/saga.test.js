/**
 * Test ArtistContainer sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, call, put } from 'redux-saga/effects';
import { getArtistsApi } from '@services/artistApi';
import { apiResponseGenerator } from '@utils/testUtils';
import artistSaga, { getArtists } from '../saga';
import { artistContainerTypes } from '../reducer';

describe('ArtistContainer saga tests', () => {
  const generator = artistSaga();
  const artistName = 'Armin';
  const trackName = 'Tuvan';
  const primaryGenreName = 'Trance';
  let getSongsGenerator = getArtists({ artistName });

  it('should start task to watch for REQUEST_GET_ARTISTS action', () => {
    expect(generator.next().value).toEqual(takeLatest(artistContainerTypes.REQUEST_GET_ARTISTS, getArtists));
  });

  it('should ensure that the action FAILURE_GET_ARTISTS is dispatched when the api call fails', () => {
    const res = getSongsGenerator.next().value;
    expect(res).toEqual(call(getArtistsApi, artistName));
    const errorResponse = {
      errorMessage: 'There was an error while fetching songs informations.'
    };
    expect(getSongsGenerator.next(apiResponseGenerator(false, errorResponse)).value).toEqual(
      put({
        type: artistContainerTypes.FAILURE_GET_ARTISTS,
        error: errorResponse
      })
    );
  });

  it('should ensure that the action SUCCESS_GET_ARTISTS is dispatched when the api call succeeds', () => {
    getSongsGenerator = getArtists({ artistName });
    const res = getSongsGenerator.next().value;
    expect(res).toEqual(call(getArtistsApi, artistName));
    const songsResponse = {
      resultCount: 1,
      results: [{ artistName, trackName, primaryGenreName }]
    };
    expect(getSongsGenerator.next(apiResponseGenerator(true, songsResponse)).value).toEqual(
      put({
        type: artistContainerTypes.SUCCESS_GET_ARTISTS,
        data: songsResponse
      })
    );
  });
});
