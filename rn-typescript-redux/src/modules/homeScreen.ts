const SET_TEXT = 'homeScreen/SET_TEXT' as const;

export const setText = (text: string) => ({ type: SET_TEXT, payload: text });

type HomeScreenAction = ReturnType<typeof setText>;

type HomeScreenState = {
  text: string;
};

const initialState: HomeScreenState = {
  text: '',
};

export default function reducer(
  state: HomeScreenState = initialState,
  action: HomeScreenAction,
) {
  switch (action.type) {
    case SET_TEXT:
      return { text: action.payload };
    default:
      return state;
  }
}
