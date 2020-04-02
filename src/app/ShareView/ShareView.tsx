import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useClipboard, Flex, Input, Button, Text } from '@chakra-ui/core';
import useProfileUrl from '../../hooks/useInviteUrl';
import QRCOde from '../../components/QRCode';
import PageHeader from '../../components/PageHeader';
import IconList from './IconList';
import { useState } from 'react';

const ShareView = () => {
  const intl = useIntl();
  const { absoluteUrl: url } = useProfileUrl();
  const { onCopy, hasCopied } = useClipboard(url);
  const [message, setMessage] = useState();

  React.useEffect(() => {
    if (url) {
      setMessage("This is me on Contact Tracing App. Join me so we can keep each other safe. " + url)
    }
  }, [url])

  return (
    url && (
      <>
        <PageHeader
          heading={intl.formatMessage({ id: 'ShareView.heading' })}
          lead={intl.formatMessage({ id: 'ShareView.lead' })}
        />
        <IconList />
        <Flex mb={2}>
          <Input type="text" value={message} onChange={(e: React.FormEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)} />
          <Button onClick={onCopy} ml={2}>
            {hasCopied
              ? intl.formatMessage({ id: 'ShareView.copied' })
              : intl.formatMessage({ id: 'ShareView.copy' })}
          </Button>
        </Flex>

        <Text mt={10}>{intl.formatMessage({ id: 'ShareView.scan' })}</Text>

        <QRCOde />
      </>
    )
  );
};

export default ShareView;
