import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Heading } from '@chakra-ui/core';
import { useStores } from '../../hooks/useStore';

const JunkView: React.FC = () => {
  const { counterStore } = useStores();
  return (
    <>
      <Heading>Junk</Heading>
      <div>{counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
    </>
  );
};

export default observer(JunkView);
