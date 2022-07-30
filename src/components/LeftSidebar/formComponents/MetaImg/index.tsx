import MetaImgPreview from './MetaImgPreview';
import MetaImgUrl from './MetaImgUrl';
import InputLabel from '../InputLabel';
import HoverPopup from 'lib/HoverPopup';
import { useColorModeValue, Switch, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useGetInputStates } from 'hooks/useGetInputStates';

export default function MetaImg() {
  const [useImgUrl, setUseImgUrl] = useState<boolean>(false);
  const { setImgUrl } = useGetInputStates();

  const handleChangeImg = () => {
    setUseImgUrl((prevState: boolean) => !prevState);
    setImgUrl('');
  };

  return (
    <Box maxWidth={!useImgUrl && '500px'}>
      <InputLabel isFocus={false} value="Image" inputId="metaImgUrl" infoTxt="Add a nice preview of your site">
        <HoverPopup text="Use Domain Url" width="105px" textSize="0.65rem" top="20px">
          <Switch
            size="md"
            colorScheme={useColorModeValue('blue', 'teal')}
            onChange={handleChangeImg}
            isChecked={useImgUrl}
          />
        </HoverPopup>
      </InputLabel>
      {useImgUrl ? <MetaImgUrl /> : <MetaImgPreview />}
    </Box>
  );
}
