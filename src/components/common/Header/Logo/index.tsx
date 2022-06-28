import NextLink from 'next/link';
import { Flex, Heading, Text, Link } from '@chakra-ui/react';
import { SiSpringCreators } from 'react-icons/si';

export default function Logo() {
  return (
    <NextLink href="/" key="home">
      <Link display="flex" alignItems="center" gridGap="0.3rem" _hover={{ textDecoration: 'none' }}>
        <Text
          color="fill.300"
          p="0.3rem"
          transition="0.25s ease-out"
          borderRadius="10px"
          _hover={{ background: 'fill.300', color: 'white' }}
        >
          <SiSpringCreators size="2rem" />
        </Text>
        <Heading as="h1" size="md" userSelect="none">
          SEO Generator
        </Heading>
      </Link>
    </NextLink>
  );
}
