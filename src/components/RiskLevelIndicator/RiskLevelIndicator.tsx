import * as React from 'react';
import {
  Box,
  Text,
  Stack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
  Flex,
  Feature,
  Button
} from '@chakra-ui/core';
const riskLevelOptions = require('./riskleveldata.json');
interface RiskLevelIndicatorProps {
  uid: string;
}
const RiskLevelIndicator: React.FC<RiskLevelIndicatorProps> = ({ uid }) => {
  //TODO get value from api on medical status
  const defaultValue = 15;

  const checkRiskStatus = () => {
    let riskStatus = riskLevelOptions[0];

    // Check riskStatus based on risk indicator number from api
    switch (true) {
      case defaultValue >= 0 && defaultValue < 25:
        break;
      case defaultValue >= 25 && defaultValue < 50:
        riskStatus = riskLevelOptions[1];

        break;
      case defaultValue >= 50 && defaultValue < 75:
        riskStatus = riskLevelOptions[2];
        break;

      case defaultValue >= 75:
        riskStatus = riskLevelOptions[3];
        break;

      default:
        break;
    }

    return (
      <Flex flexDirection="row" width="100%" rounded="sm">
        <Flex
          justifyContent="center"
          w="40%"
          p="8"
          bg={riskStatus.color}
          color="white"
        >
          <Text color="white" fontSize="xl" fontWeight="bold">
            {riskStatus.level}
          </Text>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          w="60%"
          p="8"
          border="2px"
          borderColor={riskStatus.color}
        >
          {riskStatus.message}
        </Flex>
      </Flex>
    );
  };

  return (
    <Flex
      flexDirection="column"
      p={5}
      my={12}
      shadow="sm"
      borderWidth="1px"
      justify="center"
      align="center"
    >
      {checkRiskStatus()}

      {/* <Slider size="lg" defaultValue={defaultValue}>
        <SliderTrack bg="red.100" />
        <SliderFilledTrack bg="tomato" />
        <SliderThumb size={6} />
      </Slider> */}

      <Button
        mt={4}
        variantColor="purple"
        type="submit"
        size="lg"
        width="200px"
      >
        Start Logging
      </Button>
    </Flex>
  );
};

export default RiskLevelIndicator;
