import { Track } from '../../components/ListItem';

const INITIAL_STATE = {
  favorites: [] as Track[],
  favoritesId: [] as number[],
  player: false,
  currentTrack: { cover: '', name: '', link: '', preview: '' },
};

export const track = (state = INITIAL_STATE, action: any) => {
  if (action.type === 'ADD_FAVORITE') {
    return {
      ...state,
      favorites: [...state.favorites, action.favorite],
      favoritesId: [...state.favoritesId, action.favoritesId],
    };
  }

  if (action.type === 'DELETE_FAVORITE') {
    return {
      ...state,
      favorites: state.favorites.filter(
        (fav: any) => fav.id !== action.favorite.id
      ),
      favoritesId: state.favoritesId.filter(
        (fav: any) => fav !== action.favoritesId
      ),
    };
  }

  if (action.type === 'TOGGLE_PLAYER') {
    return { ...state, player: action.player };
  }

  if (action.type === 'CURRENT_TRACK') {
    return {
      ...state,
      currentTrack: {
        cover: action.currentTrack.cover,
        name: action.currentTrack.name,
        link: action.currentTrack.link,
        preview: action.currentTrack.preview,
      },
    };
  }

  return state;
};
