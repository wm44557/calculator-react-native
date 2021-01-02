/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import styled from 'styled-components';
const App: () => React$Node = () => {
  return (
    <Wrapper>
      <SafeAreaView>
        <CalculatorWrapper>
          <Result>
            <TextIn>{'RESULT'}</TextIn>
          </Result>
          <ButtonsContainer>
            <Line>
              <Button>
                <TextIn>{'1'}</TextIn>
              </Button>
              <Button>
                <TextIn>{'2'}</TextIn>
              </Button>
              <Button>
                <TextIn>{'3'}</TextIn>
              </Button>
            </Line>
            <Line>
              <Button>
                <TextIn>{'4'}</TextIn>
              </Button>
              <Button>
                <TextIn>{'5'}</TextIn>
              </Button>
              <Button>
                <TextIn>{'6'}</TextIn>
              </Button>
            </Line>
            <Line>
              <Button>
                <TextIn>{'7'}</TextIn>
              </Button>
              <Button>
                <TextIn>{'8'}</TextIn>
              </Button>
              <Button>
                <TextIn>{'9'}</TextIn>
              </Button>
            </Line>
            <LineAction>
              <Button>
                <TextIn>{'0'}</TextIn>
              </Button>
              <ButtonAction>
                <TextIn>{'+'}</TextIn>
              </ButtonAction>
              <ButtonAction>
                <TextIn>{'-'}</TextIn>
              </ButtonAction>
              <ButtonAction>
                <TextIn>{'*'}</TextIn>
              </ButtonAction>
              <ButtonAction>
                <TextIn>{'/'}</TextIn>
              </ButtonAction>
            </LineAction>
            <LineAction>
              <ResultAction>
                <TextIn>{'='}</TextIn>
              </ResultAction>
            </LineAction>
          </ButtonsContainer>
        </CalculatorWrapper>
      </SafeAreaView>
    </Wrapper>
  );
};
const Wrapper = styled(View)`
  background-color: #999999;
`;
const CalculatorWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Result = styled(View)`
  height: 15%;
  background-color: #333333;
`;
const ButtonsContainer = styled(View)`
  flex: 1;
`;
const Line = styled(View)`
  width: 100%;
  height: 17%;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
`;
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
const ResultAction = styled(Button)`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const LineAction = styled(Line)`
  margin-top: 20px;
`;
const TextIn = styled(Text)`
  font-size: 40px;
  color: white;
`;
export default App;
