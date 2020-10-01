import React, { memo } from 'react';
import { useTheme } from 'quarks-ui/dist/ds/hooks';
import { P } from 'quarks-ui/dist/ds/typography';
import { Box } from 'quarks-ui/dist/ds/subatomicParticles';

import { skills } from '../../utils/skills';
import { ReactComponent as Link } from '../../assets/icons/link.svg';
import InfiniteSlider from '../Slider';

const Carousel = () => {
    const theme = useTheme();
    return (
        <InfiniteSlider items={skills} style={{}} showButtons>
            {({ skills }: { skills: { name: string; url?: string }[] }) => (
                <Box height="100%" width="100%">
                    <Box
                        styling="grid"
                        width="100%"
                        gridTemplateColumns="repeat(2, 4fr)"
                        gridGap="10px"
                        position="relative"
                    >
                        {skills.map((skill) => (
                            <Box
                                styling="row"
                                bg="background.dark"
                                p="20px"
                                width="100%"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                            >
                                <Box
                                    styling="row"
                                    justifyContent="space-between"
                                    width="100%"
                                >
                                    <P styling="base">{skill.name}</P>
                                    {skill.url && (
                                        <a
                                            href={skill.url}
                                            rel="noreferrer"
                                            // eslint-disable-next-line react/jsx-no-target-blank
                                            target="_blank"
                                        >
                                            <Link
                                                width="15px"
                                                height="15px"
                                                fill={
                                                    theme.colors.secondary
                                                        .default
                                                }
                                            />
                                        </a>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </InfiniteSlider>
    );
};

export default memo(Carousel);
