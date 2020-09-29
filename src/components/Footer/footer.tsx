import React, { memo } from 'react';
import { Box } from 'quarks-ui/dist/ds/subatomicParticles';
import { H3, P } from 'quarks-ui/dist/ds/typography';
import { useTheme } from 'quarks-ui/dist/ds/hooks';

import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Send } from '../../assets/icons/send.svg';
import { ReactComponent as Message } from '../../assets/icons/message.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import Logo from '../Logo';

const Footer: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            styling="row"
            width="100%"
            bg="primary.default"
            justifyContent="space-between"
            padding="0em 3em"
            minHeight="15em"
        >
            <Box styling="column">
                <Logo />
                <Box styling="row" mt="10px">
                    <Box styling="row" margin="5px">
                        <Linkedin
                            width="20px"
                            height="20px"
                            fill={theme.colors.text}
                        />
                    </Box>
                    <Box styling="row" margin="5px">
                        <Github
                            width="20px"
                            height="20px"
                            fill={theme.colors.text}
                        />
                    </Box>
                    <Box styling="row" margin="5px">
                        <Send
                            width="20px"
                            height="20px"
                            fill={theme.colors.text}
                        />
                    </Box>
                </Box>
            </Box>
            <Box styling="column" alignItems="flex-start">
                <H3 styling="base">Want to talk to me ?</H3>
                <Box styling="row" mt="10px">
                    <Message
                        width="20px"
                        height="20px"
                        fill={theme.colors.text}
                    />
                    <P styling="base" pl="5px">
                        conquista.engcomp@gmail.com
                    </P>
                </Box>
                <Box styling="row" mt="10px">
                    <Phone
                        width="20px"
                        height="20px"
                        fill={theme.colors.text}
                    />
                    <P styling="base" pl="5px">
                        (37) 99919-7681
                    </P>
                </Box>
            </Box>
        </Box>
    );
};

export default memo(Footer);
