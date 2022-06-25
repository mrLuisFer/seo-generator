import InputForm from '../InputForm';
import { useGetInputStates } from 'hooks/useGetInputStates';

export default function MetaImgUrl() {
  const { imgUrl, setImgUrl } = useGetInputStates();

  return (
    <InputForm
      placeholder="https://unsplash.com/someimg"
      inputId="metaImgUrl"
      marginBottom="0.5rem"
      state={imgUrl}
      setState={setImgUrl}
    />
  );
}
