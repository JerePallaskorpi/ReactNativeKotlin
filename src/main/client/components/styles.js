import styled from 'styled-components';
import Constants from 'expo-constants';

export const Title = styled.Text`
    font-size: 36px;
    padding: 8px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : 'white')};
`;

export const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 8px;
    flex: 1;
    color: lightgreen;
`;

export const TopContainer = styled.View`
    background: #fafafa;
    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.4);
    padding-top: ${ Constants.statusBarHeight };
    elevation: 2;
`;

export const MessageContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    background: #fafafa; 
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.3);
    padding-left: 10px;
    elevation: 1;
`;

export const Input = styled.TextInput`
    border-radius: 5px;
    background: white;
    width: 100px;
    flex: 1;
    padding: 8px;
    margin-right: 8px;
    border: 1px solid #dfdfdf;
`;

export const Container = styled.KeyboardAvoidingView`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    background: #ffffff;
`;

export const FooterButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 16px;
    background: #fafafa;
    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.4);
    elevation: 5;
`;

export const DeleteContainer = styled.View`
    background: #FF4A54;
    border-radius: 5px;
    padding: 5px 10px;
`;
