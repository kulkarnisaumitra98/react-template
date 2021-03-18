import { selectArtistContainer, selectArtistData, selectArtistError, selectArtistName } from '../selectors';

describe('ArtistContainer selector tests', () => {
  let mockedState;
  let artistName;
  let artistsData;
  let artistsError;

  beforeEach(() => {
    artistName = 'Armin';
    artistsData = { resultCount: 1, results: [{ artistName, trackName: 'Tuvan', primaryGenreName: 'Trance' }] };
    artistsError = 'There was some error while fetching the song details';

    mockedState = {
      artistContainer: {
        artistName,
        artistsData,
        artistsError
      }
    };
  });
  it('should select the artist container state', () => {
    const artistContainerSelector = selectArtistContainer();
    expect(artistContainerSelector(mockedState)).toEqual(mockedState.artistContainer);
  });
  it('should select the artist Name', () => {
    const songsSelector = selectArtistName();
    expect(songsSelector(mockedState)).toEqual(artistName);
  });

  it('should select artists data', () => {
    const artistsDataSelector = selectArtistData();
    expect(artistsDataSelector(mockedState)).toEqual(artistsData);
  });

  it('should select the artists error', () => {
    const artistsErrorSelector = selectArtistError();
    expect(artistsErrorSelector(mockedState)).toEqual(artistsError);
  });
});
