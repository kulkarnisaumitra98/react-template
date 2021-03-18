/**
 *
 * Tests for Artist Container
 *
 */

import React from 'react';
import { timeout, renderProvider } from '@utils/testUtils';
import { fireEvent } from '@testing-library/dom';
import { ArtistContainerTest as ArtistContainer } from '../index';

describe('<ArtistContainer /> tests', () => {
  let mockGetArtist;

  beforeEach(() => {
    mockGetArtist = jest.fn();
  });
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<ArtistContainer dispatchGetArtists={mockGetArtist} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should dispatch getArtist on text change and dispatch clearArtists on empty text', async () => {
    const getArtistMock = jest.fn();
    const clearSearchArtist = jest.fn();
    const { getByTestId } = renderProvider(
      <ArtistContainer dispatchClearArtists={clearSearchArtist} dispatchGetArtists={getArtistMock} />
    );
    fireEvent.change(getByTestId('search-bar'), {
      target: { value: 'a' }
    });
    await timeout(500);
    expect(getArtistMock).toBeCalled();
    fireEvent.change(getByTestId('search-bar'), {
      target: { value: '' }
    });
    await timeout(500);
    expect(clearSearchArtist).toBeCalled();
  });
});
