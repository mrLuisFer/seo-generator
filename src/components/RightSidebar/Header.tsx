import { Box, Heading, Button, useColorModeValue, Fade } from '@chakra-ui/react';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { Dispatch, SetStateAction, useState } from 'react';
import Portal from 'components/common/Portal';
import MetaTagsModal from 'components/MetaTagsModal';
import { useHasTextOnInputs } from 'hooks/useHasTextOnInputs';
import { BiArrowFromLeft } from 'react-icons/bi';
import { useBoolean } from '@chakra-ui/react';
import { useShowPreviewCtx } from 'context/ShowPreview';

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const hasTextOnInputs = useHasTextOnInputs();
  const [flag, setFlag] = useBoolean();
  const { setShowPreview } = useShowPreviewCtx();

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading
          as="h2"
          fontSize="1rem"
          m="0"
          display="flex"
          alignItems="center"
          gridGap="0.4rem"
          onMouseEnter={setFlag.toggle}
          onMouseLeave={setFlag.toggle}
        >
          Preview
          <Fade in={flag}>
            <Box
              as="span"
              display={{ base: 'none', lg: 'block' }}
              fontSize="1.4rem"
              cursor="pointer"
              opacity={flag ? '1' : '0'}
              title="Click to hide preview"
              onClick={() => setShowPreview(false)}
            >
              <BiArrowFromLeft />
            </Box>
          </Fade>
        </Heading>
        <GenerateMetatagsBtn setIsOpen={setIsOpenModal} />
      </Box>
      {isOpenModal && hasTextOnInputs && (
        <Portal id="metatags">
          <MetaTagsModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
        </Portal>
      )}
    </>
  );
}

export const GenerateMetatagsBtn = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const hasTextOnInputs = useHasTextOnInputs();

  const handleGenerateTags = () => {
    if (hasTextOnInputs) {
      setIsOpen(true);
    }

    // TODO: make an error message if there is no text on inputs
  };

  return (
    <Button
      bg={useColorModeValue('white', 'fill.300')}
      color={useColorModeValue('fill.300', 'white')}
      border="1.5px solid"
      borderColor={useColorModeValue('border.100', 'fill.300')}
      fontWeight="normal"
      display="flex"
      gridGap="0.5rem"
      transition="0.2s ease"
      cursor="default"
      _hover={{
        background: 'fill.300',
        color: 'white',
        borderColor: 'fill.300',
        filter: useColorModeValue('', 'brightness(1.2)'),
      }}
      onClick={handleGenerateTags}
    >
      <RiCodeSSlashFill />
      Generate MetaTags
    </Button>
  );
};
