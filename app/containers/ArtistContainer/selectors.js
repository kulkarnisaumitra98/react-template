import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

/**
 * Direct selector to the ArtistContainer state domain
 */

const selectArtistContainerDomain = state => state.artistContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ArtistContainer
 */

export const selectArtistContainer = () =>
  createSelector(
    selectArtistContainerDomain,
    substate => substate
  );

export const selectArtistData = () =>
  createSelector(
    selectArtistContainerDomain,
    substate => get(substate, 'artistsData', null)
  );

export const selectArtistError = () =>
  createSelector(
    selectArtistContainerDomain,
    substate => get(substate, 'artistsError', null)
  );

export const selectArtistName = () =>
  createSelector(
    selectArtistContainerDomain,
    substate => get(substate, 'artistName', null)
  );

export default selectArtistContainer;
