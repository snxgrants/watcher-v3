import { Box, Text, BoxProps, FlexProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Wrapper from '@/components/EmailSignup/Wrapper';
import EmailSignup from '@/components/EmailSignup';

interface EmailSectionProps extends BoxProps {
  byline?: string;
  innerProps?: FlexProps;
}

export default function EmailSection({
  byline = 'JOIN OUR NEWSLETTER',
  innerProps,
  ...props
}: EmailSectionProps) {
  const { pathname } = useRouter();
  return (
    <Wrapper
      minHeight={['180px', '180px', '180px', '158px']}
      height="fit-content"
      innerProps={innerProps}
      {...props}
    >
      <Box
        mr={[0, 0, 6, 6, 10]}
        height={[2, 2, 'unset', 'unset']}
        minWidth="40%"
      >
        <Text
          fontFamily="GT America"
          fontStyle="normal"
          fontSize="24px"
          color="white"
          textTransform="uppercase"
          mt={[6, 6, 0, 0]}
          sx={{ fontStretch: 'expanded' }}
          textAlign={{ base: 'center', md: 'unset' }}
          minWidth="100%"
        >
          {byline}
        </Text>
      </Box>
      <EmailSignup page={`${pathname}`} mt={[8, 8, 0, 0]} />
    </Wrapper>
  );
}
