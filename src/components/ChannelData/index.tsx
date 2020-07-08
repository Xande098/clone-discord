import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return <Container>
        <Messages ref={messagesRef}>
            <ChannelMessage
                author='Alexandre Sobota'
                date='28/07/2020'
                content='Hoje é meu aniversário!'
            />

            <ChannelMessage
                author='Guilherme Rodz'
                date='28/07/2020'
                content={
                    <>
                        <Mention>@Alexandre Sobota</Mention> Legal, Parabéns!
                    </>
                }
                hasMention
                isBot
            />

            <ChannelMessage
                author='Alexandre Sobota'
                date='28/07/2020'
                content='Obrigado!'
            />

            <ChannelMessage
                author='Guilherme Rodz'
                date='28/07/2020'
                content={
                    <>
                        <Mention>@Alexandre Sobota</Mention>, me carrega no LOL e CS de novo por favor?
                    </>
                }
                hasMention
                isBot
            />

            <ChannelMessage
                author='Alexandre Sobota'
                date='28/07/2020'
                content={
                    <>
                        <Mention>@Guilherme Rodz</Mention> Sim, vamos jogar!
                    </>
                }
                hasMention
            />

            <ChannelMessage
                author='Mariana Gamer'
                date='28/07/2020'
                content={
                    <>
                        Parabéns <Mention>@Alexandre Sobota</Mention>!
                    </>
                }
                hasMention
                isBot
            />

            <ChannelMessage
                author='Alexandre Sobota'
                date='28/07/2020'
                content={
                    <>
                        <Mention>@Mariana Gamer</Mention> Obrigado!
                    </>
                }
                hasMention
            />

            <ChannelMessage
                author='Guilherme Rodz'
                date='28/07/2020'
                content={
                    <>
                        <Mention>@Alexandre Sobota</Mention> Blz, obrigado Xandão!
                    </>
                }
                hasMention
                isBot
            />

            <ChannelMessage
                author='Mariana Gamer'
                date='28/07/2020'
                content={
                    <>
                        Vou jogar também!! <Mention>@Alexandre Sobota</Mention>!
                    </>
                }
                hasMention
                isBot
            />

            <ChannelMessage
                author='Alexandre Sobota'
                date='28/07/2020'
                content={
                    <>
                        <Mention>@Mariana Gamer</Mention> Sim, vamos lá mostrar como se joga!
                    </>
                }
                hasMention
            />


        </Messages>

        <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre" />
            <InputIcon />
        </InputWrapper>
    </Container>;
};

export default ChannelData;