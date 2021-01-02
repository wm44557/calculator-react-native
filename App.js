import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import styled from 'styled-components';

import ButtonNew from './Button';
import ButtonA from './ButtonAction';

export const AppContext = React.createContext([{}, () => {}]);
export const AppContext2 = React.createContext([{}, () => {}]);
export const AppContext3 = React.createContext([{}, () => {}]);
export const AppContext4 = React.createContext([{}, () => {}]);

const App: () => React$Node = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [memoValue, setMemoValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [sign, setSign] = useState('');

  return (
    <AppContext.Provider value={[currentValue, setCurrentValue]}>
      <AppContext2.Provider value={[memoValue, setMemoValue]}>
        <AppContext3.Provider value={[resultValue, setResultValue]}>
          <AppContext4.Provider value={[sign, setSign]}>
            <Wrapper>
              <SafeAreaView>
                <CalculatorWrapper>
                  <Result>
                    <TextIn>{resultValue}</TextIn>
                  </Result>
                  <ButtonsContainer>
                    <Line>
                      <ButtonNew value={'1'} />
                      <ButtonNew value={'2'} />
                      <ButtonNew value={'3'} />
                    </Line>
                    <Line>
                      <ButtonNew value={'4'} />
                      <ButtonNew value={'5'} />
                      <ButtonNew value={'6'} />
                    </Line>
                    <Line>
                      <ButtonNew value={'7'} />
                      <ButtonNew value={'8'} />
                      <ButtonNew value={'9'} />
                    </Line>
                    <LineAction>
                      <ButtonNew value={'0'} />
                      <ButtonA value={'+'} />
                      <ButtonA value={'-'} />
                      <ButtonA value={'/'} />
                      <ButtonA value={'*'} />
                    </LineAction>
                    <LineAction>
                      <ButtonA value={'='} />
                    </LineAction>
                  </ButtonsContainer>
                </CalculatorWrapper>
              </SafeAreaView>
            </Wrapper>
          </AppContext4.Provider>
        </AppContext3.Provider>
      </AppContext2.Provider>
    </AppContext.Provider>
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

const LineAction = styled(Line)`
  margin-top: 20px;
`;
const TextIn = styled(Text)`
  font-size: 40px;
  color: white;
`;
export default App;
