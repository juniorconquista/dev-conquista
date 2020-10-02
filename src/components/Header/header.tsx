import React, { memo } from 'react';
import { css } from 'styled-components';
import { Box } from 'quarks-ui/dist/ds/subatomicParticles';
import { P } from 'quarks-ui/dist/ds/typography';
import { useTheme } from 'quarks-ui/dist/ds/hooks';

import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import Logo from '../Logo';

const Header: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            styling="row"
            position="fixed"
            top="0"
            width="100%"
            minHeight="50px"
            bg="background.default"
            padding="10px 15px"
            borderBottom="1px solid"
            borderColor="primary.default"
            justifyContent="space-between"
            css={css({
                zIndex: 10,
            })}
        >
            <Logo />
            <Box
                styling="row"
                css={css({
                    '@media (max-width: 600px)': {
                        a: {
                            display: 'none',
                        },
                    },
                })}
            >
                <a
                    href="https://www.linkedin.com/in/junior-conquista/"
                    rel="noreferrer"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                >
                    <Box styling="row" margin="5px">
                        <Linkedin
                            width="20px"
                            height="20px"
                            fill={theme.colors.text}
                        />
                        <P styling="base" pl="5px">
                            linkedin
                        </P>
                    </Box>
                </a>
                <a
                    href="https://github.com/juniorconquista/"
                    rel="noreferrer"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                >
                    <Box styling="row" margin="5px">
                        <Github
                            width="20px"
                            height="20px"
                            fill={theme.colors.text}
                        />
                        <P styling="base" pl="5px">
                            github
                        </P>
                    </Box>
                </a>
                <button
                    onClick={theme.toggleTheme}
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <Sun width="20px" height="20px" fill={theme.colors.text} />
                </button>
            </Box>
        </Box>
    );
};

export default memo(Header);
