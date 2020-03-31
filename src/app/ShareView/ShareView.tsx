import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useClipboard, Flex, Input, Button, Text } from '@chakra-ui/core';
import useProfileUrl from '../../hooks/useInviteUrl';
import QRCOde from '../../components/QRCode';
import PageHeader from '../../components/PageHeader';
import IconList from './IconList';

const ShareView = () => {
  const intl = useIntl();
  const { absoluteUrl: url } = useProfileUrl();
  const { onCopy, hasCopied } = useClipboard(url);
  return (
    url && (
      <>
        <PageHeader
          heading={intl.formatMessage({ id: 'ShareView.heading' })}
          lead={intl.formatMessage({ id: 'ShareView.lead' })}
        />
        <IconList />
        <Flex mb={2}>
          <Input value={url} isReadOnly />
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
