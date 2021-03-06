const initialState = [];

export default function episodeReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_EPISODES_SUCCESS":
      return [...state, action.episodes];

    default:
      return state;
  }
}
