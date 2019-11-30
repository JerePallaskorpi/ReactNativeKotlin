import styled from 'styled-components';
import Constants from 'expo-constants';

export const Title = styled.Text`
    font-size: 24px;
    padding: 8px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : 'white')};
`;

export const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 8px;
    flex: 1;
`;

export const Input = styled.TextInput`
    border-radius: 5px;
    background: white;
    width: 100px;
    flex: 1;
    padding: 8px;
    margin-right: 8px;
`;

export const Container = styled.KeyboardAvoidingView`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    text-align: center;
    align-items: center;
    background: palevioletred;
    padding-top: ${Constants.statusBarHeight};
`;

export const FooterButtons = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin: 16px;
`;
