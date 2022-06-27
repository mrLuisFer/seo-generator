import { useGetInputStates } from 'hooks/useGetInputStates';

export const useHasTextOnInputs = (): boolean => {
  const { descriptionTextarea, titleInput, author, ogUrl } = useGetInputStates();

  const hasInputText: boolean =
    titleInput.length > 5 ||
    descriptionTextarea.length > 5 ||
    titleInput.length > 5 ||
    author.length > 5 ||
    ogUrl.length > 5;

  return hasInputText;
};
