import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styled from 'styled-components';
import {AppContext, AppContext3} from './App';

const ButtonNew: () => React$Node = ({value}) => {
  const [currentValue, setCurrentValue] = useContext(AppContext);
  const [resultValue, setResultValue] = useContext(AppContext3);

  const onPress = () => {
    setCurrentValue(currentValue + value);
    setResultValue(currentValue + value);
  };
  return (
    <Button onPress={onPress}>
      <TextIn>{value}</TextIn>
    </Button>
  );
};

const Button = styled(TouchableOpacity)`
  display: flex;
  width: 32%;
  height: 100%;
  background-color: #555555;
  align-items: center;
  justify-content: center;
`;

const TextIn = styled(Text)`
  font-size: 40px;
  color: white;
`;
export default ButtonNew;
