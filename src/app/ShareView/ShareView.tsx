import * as React from 'react';
import {
  useClipboard,
  Flex,
  Input,
  Button,
  Text
} from '@chakra-ui/core';
import useProfileUrl from '../../hooks/useInviteUrl';
import QRCOde from '../../components/QRCode';
import PageHeader from '../../components/PageHeader';
import IconList from './IconList';

const ShareView = () => {
  const { absoluteUrl: url } = useProfileUrl();
  const { onCopy, hasCopied } = useClipboard(url);
  return (
    url && (
      <>
        <PageHeader
          heading="Share your Profile"
          lead="Send this link to your friends &amp; family to connect."
        />
        <IconList />
        <Flex mb={2}>
          <Input value={url} isReadOnly />
          <Button onClick={onCopy} ml={2}>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>

        <Text mt={10}>Or get your friends to scan:</Text>

        <QRCOde />
      </>
    )
  );
};

export default ShareView;
