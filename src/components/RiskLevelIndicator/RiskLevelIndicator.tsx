import * as React from 'react';
import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading
} from '@chakra-ui/core';

interface RiskLevelIndicatorProps {
  uid: string;
}
const RiskLevelIndicator: React.FC<RiskLevelIndicatorProps> = ({ uid }) => {
  return (
    <Box p={5} my={12} shadow="sm" borderWidth="1px">
      <Heading>Risk Indicator</Heading>
      <Slider isDisabled size="lg" defaultValue={30}>
        <SliderTrack bg="red.100" />
        <SliderFilledTrack bg="tomato" />
        <SliderThumb size={6} />
      </Slider>
      <Text>Coming soon!</Text>
    </Box>
  );
};

export default RiskLevelIndicator;
