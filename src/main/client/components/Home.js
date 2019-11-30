// @flow
import React, { useState, useEffect } from 'react';
import {
    Keyboard,
    ScrollView,
    Text,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
    Container, Input, InputContainer, Title, FooterButtons,
} from './styles';

function Home() {
    const [title] = useState('React Native Starter Kit');
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleSubmitInputText = async (text: string) => {
        setInputText('');
        Keyboard.dismiss();

        const messageResponse: Object = await fetch(`http://localhost:8080/api/message`, {
            method: 'POST',
            body: text,
        })
            .then((r) => r.json())
            .catch((err) => console.log(err));
        
        setMessages(messageResponse);
    };
    
    const getMessages = async () => {
        const messageResponse: Object[] = await fetch(`http://localhost:8080/api/message`)
            .then((r) => r.json())
            .catch((err) => console.log(err));

        setMessages(messageResponse);
    };
    
    useEffect(() => {
        getMessages();
    }, []);

    return (
        <Container behavior="padding" enabled>
            <ScrollView>
                <Title color="yellow">{title}</Title>
                {messages.map((message) => (
                    <Title key={message.id}>
                        <Text>{message.id}</Text>
                        <Text> - </Text>
                        <Text>{message.message}</Text>
                    </Title>
                ))}
            </ScrollView>
            <FooterButtons>
                <InputContainer>
                    <Input
                        onChangeText={(text) => setInputText(text)}
                        value={inputText}
                    />
                    <AntDesign
                        onPress={() => handleSubmitInputText(inputText)}
                        name="pluscircle"
                        size={48}
                        color="yellow"
                    />
                </InputContainer>
            </FooterButtons>
        </Container>
    );
}

export default Home;
