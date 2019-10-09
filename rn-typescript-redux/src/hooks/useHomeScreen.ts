import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../stores';
import { setText } from '../stores/homeScreen';

export default function useHomeScreen() {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.homeScreen.text);

  const onChangeText = (text: string) => {
    dispatch(setText(text));
  };

  return {
    text,
    onChangeText,
  };
}
