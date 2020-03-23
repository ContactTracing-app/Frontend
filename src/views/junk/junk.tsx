import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Heading } from '@chakra-ui/core';
import { useStores } from '../../hooks/useStore';

const JunkView: React.FC = () => {
  const { counterStore, userStore } = useStores();
  return (
    <>
      <Heading>Junk</Heading>
      <pre>{JSON.stringify(userStore, null, 2)}</pre>
      <div>{counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
    </>
  );
};

export default observer(JunkView);
