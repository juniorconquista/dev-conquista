import React from 'react';
import { Box } from 'quarks-ui/dist/ds/subatomicParticles';
import { H1, H4, P, Span } from 'quarks-ui/dist/ds/typography';

import { skills } from '../../utils/skills';

const Skills: React.FC = () => (
    <Box
        styling="row"
        bg="primary.dark"
        width="100%"
        p="5em"
        justifyContent="space-around"
    >
        <Box styling="column" alignItems="flex-start" width="55%" p="20px">
            <H4 styling="base" opacity="0.6" mb="20px">
                Skills
            </H4>
            <Box
                styling="grid"
                width="100%"
                gridTemplateColumns="repeat(3, 4fr)"
                gridGap="10px"
                maxHeight="300px"
                overflow="auto"
            >
                {skills.map((skill) => (
                    <Box
                        styling="row"
                        bg="background.dark"
                        p="20px"
                        width="100%"
                    >
                        <P styling="base">{skill.name}</P>
                    </Box>
                ))}
            </Box>
        </Box>
        <Box styling="column" alignItems="flex-start" width="45%" p="20px">
            <H4 styling="base" opacity="0.6" mb="20px">
                Introduce
            </H4>
            <H1 styling="base" mb="20px">
                Hi! my name is <u>Júnior Conquista</u>
            </H1>
            <P
                styling="base"
                opacity="0.6"
                mb="20px"
                textAlign="justify"
                letterSpacing="1px"
            >
                <Span color="secondary.dark">Frontend developer</Span> for about{' '}
                <Span color="secondary.default">4 years</Span> with a focus on
                developing custom applications, automation and integrations,
                passionate about{' '}
                <Span color="secondary.default">new technologies</Span> and
                always learning and challenging me. I recently worked on the
                development of a gamification application called{' '}
                <Span color="secondary.default">Robbyson:</Span> a "People
                Management" platform, where we have the challenge to improve and
                create new layouts for applications using{' '}
                <Span color="secondary.default">React</Span>.
            </P>

            <P styling="base" opacity="0.6" textAlign="justify">
                Currently, I work at a reference company in{' '}
                <Span color="secondary.default">innovation</Span>, digital
                transformation and development called{' '}
                <Span color="secondary.default">Raro Labs:</Span> What seems
                impossible, the solution that is not easily found, the project
                that requires <Span color="secondary.default">creativity</Span>{' '}
                and <Span color="secondary.default">dedication</Span>, all of
                this is part of our day-to-day.
            </P>
        </Box>
    </Box>
);

export default Skills;
