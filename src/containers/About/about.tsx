import React from 'react';
import { css } from 'styled-components';
import { Box } from 'quarks-ui/dist/ds/subatomicParticles';
import { H2, H3, P } from 'quarks-ui/dist/ds/typography';
import { useTheme } from 'quarks-ui/dist/ds/hooks';

import { ReactComponent as ReactJs } from '../../assets/icons/reactjs.svg';
import { ReactComponent as Javascript } from '../../assets/icons/javascript.svg';
import { ReactComponent as Typescript } from '../../assets/icons/typescript.svg';
import { ReactComponent as Jest } from '../../assets/icons/jest.svg';
import BG from '../../assets/img/bg.png';

const About: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            styling="row"
            bg="background.dark"
            width="100%"
            p="5em"
            mt="50px"
            justifyContent="space-between"
            css={css({
                backgroundImage: `url(${BG})`,
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            })}
        >
            <Box styling="column" alignItems="flex-start" width="45%">
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
            <Box>
                <Jest
                    width="120px"
                    height="120px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
                <Typescript
                    width="120px"
                    height="120px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
                <Javascript
                    width="120px"
                    height="120px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
                <ReactJs
                    width="120px"
                    height="120px"
                    color={`${theme.colors.text}26`}
                    style={{ margin: '10px' }}
                />
            </Box>
        </Box>
    );
};

export default About;
