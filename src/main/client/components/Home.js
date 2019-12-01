// @flow
import React, { useState, useEffect } from 'react';
import {
    Keyboard,
    ScrollView,
    Text,
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
    Container,
    Input,
    InputContainer,
    Title,
    FooterButtons,
    MessageContainer,
    TopContainer,
    DeleteContainer,
} from './styles';
import config from '../config';

function Home() {
    const [title] = useState('');
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleSubmitInputText = async (message: String) => {
        setInputText('');
        Keyboard.dismiss();

        fetch(`${config.api.host}/api/message`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: message
        })
            .then((r) => r.json())
            .then((r) => setMessages(r))
            .catch((err) => console.log(err));
    };

    const handleDeleteMessage = async (message: Object) => {
        fetch(`${config.api.host}/api/message`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(message),
        })
            .then((r) => r.json())
            .then((r) => setMessages(r))
            .catch((err) => console.log(err));
    };
    
    const getMessages = async () => {
        const messageResponse: Object[] = await fetch(`${config.api.host}/api/message`)
            .then((r) => r.json())
            .catch((err) => console.log(err));

        setMessages(messageResponse);
    };
    
    useEffect(() => {
        getMessages();
    }, []);

    return (
        <Container behavior="padding" enabled>
            <TopContainer>
                <Title color="orange">{title}</Title>
            </TopContainer>
            <ScrollView>
                {messages.map((message) => (
                    <MessageContainer key={message.id}>
                        <Text>{message.id}</Text>
                        <Text>{message.message}</Text>
                        <DeleteContainer>
                            <FontAwesome
                                onPress={() => handleDeleteMessage(message)}
                                name="remove"
                                size={36}
                                color="white"
                            />
                        </DeleteContainer>
                    </MessageContainer>
                ))}
            </ScrollView>
            <FooterButtons>
                <InputContainer>
                    <Input
                        onChangeText={(text) => setInputText(text)}
                        value={inputText}
                    />
                    <AntDesign
                        onPress={() => inputText.trim().length > 0 
                            && handleSubmitInputText(inputText)
                        }
                        name="pluscircle"
                        size={48}
                        color={inputText.trim().length > 0 
                            ? "lightseagreen" 
                            : "gray"
                        }
                    />
                </InputContainer>
            </FooterButtons>
        </Container>
    );
}

export default Home;
