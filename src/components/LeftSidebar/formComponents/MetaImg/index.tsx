import MetaImgPreview from './MetaImgPreview';
import MetaImgUrl from './MetaImgUrl';
import InputLabel from '../InputLabel';
import HoverPopup from 'lib/HoverPopup';
import { useColorModeValue, Switch } from '@chakra-ui/react';
import { useState } from 'react';

export default function MetaImg() {
  const [useImgUrl, setUseImgUrl] = useState<boolean>(false);

  return (
    <>
      <InputLabel isFocus={false} value="Image" inputId="" infoTxt="Add a nice preview of your site">
        <HoverPopup text="Use Image Url" width="105px" textSize="0.65rem" top="20px">
          <Switch
            size="md"
            colorScheme={useColorModeValue('blue', 'teal')}
            onChange={() => setUseImgUrl((prevState: boolean) => !prevState)}
            isChecked={useImgUrl}
          />
        </HoverPopup>
      </InputLabel>
      {useImgUrl ? <MetaImgUrl /> : <MetaImgPreview />}
    </>
  );
}
