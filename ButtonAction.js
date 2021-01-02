import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styled from 'styled-components';
import {AppContext, AppContext2, AppContext3, AppContext4} from './App';

const ButtonA: () => React$Node = ({value}) => {
  const [currentValue, setCurrentValue] = useContext(AppContext);
  const [memoValue, setMemoValue] = useContext(AppContext2);
  const [valueResult, setResultValue] = useContext(AppContext3);
  const [sign, setSign] = useContext(AppContext4);

  const onPress = () => {
    if (value === '+') {
      setSign('+');
      if (memoValue !== '') {
        setMemoValue(Number(currentValue) + Number(memoValue));
        setCurrentValue('');
      } else {
        setMemoValue(currentValue);
        setCurrentValue('');
        console.log(memoValue);
      }
    } else if (value === '-') {
      setSign('-');
      if (memoValue !== '') {
        setMemoValue(Number(memoValue) - Number(currentValue));
        setCurrentValue('');
      } else {
        setMemoValue(currentValue);
        setCurrentValue('');
        console.log(memoValue);
      }
    } else if (value === '*') {
      setSign('*');
      if (memoValue !== '') {
        if (Number(memoValue) !== 0 && Number(currentValue) !== 0) {
          setMemoValue(Number(memoValue) * Number(currentValue));
        }
        setCurrentValue('');
      } else {
        setMemoValue(currentValue);
        setCurrentValue('');
        console.log(memoValue);
      }
    } else if (value === '/') {
      setSign('/');
      if (memoValue !== '') {
        if (Number(memoValue) !== 0 && Number(currentValue) !== 0) {
          setMemoValue(Number(memoValue) / Number(currentValue));
        }
        setCurrentValue('');
      } else {
        setMemoValue(currentValue);
        setCurrentValue('');
        console.log(memoValue);
      }
    }

    if (value === '=') {
      if (sign === '+') {
        setResultValue(Number(currentValue) + Number(memoValue));
        setMemoValue(Number(currentValue) + Number(memoValue));
        setCurrentValue('');
      }
      if (sign === '-') {
        setResultValue(Number(memoValue) - Number(currentValue));
        setMemoValue(Number(memoValue) - Number(currentValue));
        setCurrentValue('');
      }
      if (sign === '*') {
        setResultValue(Number(memoValue) * Number(currentValue));
        setMemoValue(Number(memoValue) * Number(currentValue));
        setCurrentValue('');
      }
      if (sign === '/') {
        setResultValue(Number(memoValue) / Number(currentValue));
        setMemoValue(Number(memoValue) / Number(currentValue));
        setCurrentValue('');
      }
    }
  };
  return (
    <ButtonAction onPress={onPress}>
      <TextIn>{value}</TextIn>
    </ButtonAction>
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

const ButtonAction = styled(Button)`
  width: 19%;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #777777;
`;

const TextIn = styled(Text)`
  font-size: 40px;
  color: white;
`;

export default ButtonA;
