import React from 'react';
import { css } from 'styled-components';
import { Box } from 'quarks-ui/dist/ds/subatomicParticles';
import { H2, H3, P } from 'quarks-ui/dist/ds/typography';
import { useTheme } from 'quarks-ui/dist/ds/hooks';

import { ReactComponent as ReactJs } from '../../assets/icons/reactjs.svg';
import { ReactComponent as Javascript } from '../../assets/icons/javascript.svg';
import { ReactComponent as Typescript } from '../../assets/icons/typescript.svg';
import { ReactComponent as Jest } from '../../assets/icons/jest.svg';
import { ReactComponent as Bb } from '../../assets/icons/bg.svg';

const About: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            styling="row"
            bg="background.default"
            width="100%"
            p={{ mobile: '2em', tablet: '2em', desktop: '4em' }}
            mt="50px"
            justifyContent="space-between"
            position="relative"
            overflow="hidden"
        >
            <Box
                styling="column"
                alignItems="flex-start"
                width={{ mobile: '100%', tablet: '100%', desktop: '50%' }}
            >
                <H3 styling="base" bg="secondary.default" p="10px" mb="20px">
                    Frontend Developer
                </H3>
                <H2 styling="base" letterSpacing="2px" mb="30px">
                    Hello, I'm Júnior Conquista, web developer for over 4 years.
                </H2>
                <P styling="base" opacity="0.8" mb="20px">
                    I enjoy building solutions web e mobile
                </P>
                <Box
                    styling="row"
                    borderWidth="2px"
                    borderStyle="solid"
                    borderColor="secondary.default"
                    padding="10px"
                >
                    <P color="secondary.default" fontWeight="bold" fontSize={5}>
                        Say hi!
                    </P>
                </Box>
            </Box>
            <Box
                display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
                css={css({
                    zIndex: 9,
                })}
            >
                <Jest
                    width="100px"
                    height="100px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
                <Typescript
                    width="100px"
                    height="100px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
                <Javascript
                    width="100px"
                    height="100px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
                <ReactJs
                    width="100px"
                    height="100px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
            </Box>
            <Box
                position="absolute"
                right="0px"
                display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
                css={css({
                    zIndex: 8,
                    svg: {
                        height: '320px',
                        width: 'auto',
                        '@media (max-width: 1020px)': {
                            display: 'none',
                        },
                    },
                })}
            >
                <Bb color={`${theme.colors.primary.default}`} />
            </Box>
        </Box>
    );
};

export default About;
