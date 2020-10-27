import React, { useEffect, useState } from 'react';
import { useTheme } from 'quarks-ui/dist/ds/hooks';
import { Box } from 'quarks-ui';
import { H1, P } from 'quarks-ui';

import { ReactComponent as Link } from '../../assets/icons/link.svg';
import { ReactComponent as Eye } from '../../assets/icons/eye.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Fork } from '../../assets/icons/fork.svg';
import { Repository } from './projects.types';

const Projects: React.FC = () => {
    const [hasError, setErrors] = useState(false);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const theme = useTheme();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                'https://api.github.com/users/juniorconquista/repos?sort=stargazers_count',
            );
            res.json()
                .then((res) => setRepositories(res))
                .catch((err) => setErrors(err));
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (hasError) {
            console.log('hasError =>', hasError);
        }
    }, [hasError]);

    return (
        <Box
            styling="row"
            bg="background.default"
            width="100%"
            p={{ mobile: '2em', tablet: '2em', desktop: '5em' }}
            justifyContent="space-between"
        >
            <Box
                styling="grid"
                width="100%"
                gridTemplateColumns={{
                    mobile: 'repeat(1, 4fr)',
                    tablet: 'repeat(2, 4fr)',
                    desktop: 'repeat(3, 4fr)',
                }}
                gridGap="20px"
                position="relative"
            >
                <Box
                    styling="column"
                    alignItems="flex-start"
                    height="100%"
                    p={{ mobile: '5px', tablet: '10px', desktop: '20px' }}
                >
                    <H1 styling="base" mb="20px">
                        Tech Contributions
                    </H1>
                    <P styling="base" opacity="0.6">
                        My public repositories on GitHub
                    </P>
                </Box>
                {repositories
                    .filter((repository) => !repository.fork)
                    .map((repository) => (
                        <Box
                            styling="column"
                            bg="primary.default"
                            height="100%"
                            alignItems="flex-start"
                            p="20px"
                            key={repository.id}
                        >
                            <Box
                                styling="row"
                                justifyContent="space-between"
                                width="100%"
                            >
                                <H1 styling="base" mb="10px">
                                    {repository.name}
                                </H1>
                                <a
                                    href={repository.html_url}
                                    rel="noreferrer"
                                    // eslint-disable-next-line react/jsx-no-target-blank
                                    target="_blank"
                                >
                                    <Link
                                        width="15px"
                                        height="15px"
                                        fill={theme.colors.secondary.default}
                                    />
                                </a>
                            </Box>
                            <P
                                styling="base"
                                opacity="0.6"
                                lineHeight="18px"
                                letterSpacing="1px"
                            >
                                {repository.description}
                            </P>
                            <Box styling="row" mt="15px">
                                <Box styling="row" mr="15px">
                                    <Eye
                                        width="15px"
                                        height="15px"
                                        fill={theme.colors.secondary.default}
                                    />
                                    <P
                                        styling="base"
                                        ml="2px"
                                        color="secondary.default"
                                    >
                                        {repository.watchers_count}
                                    </P>
                                </Box>
                                <Box styling="row" mr="15px">
                                    <Star
                                        width="15px"
                                        height="15px"
                                        fill={theme.colors.secondary.default}
                                    />
                                    <P
                                        styling="base"
                                        ml="2px"
                                        color="secondary.default"
                                    >
                                        {repository.stargazers_count}
                                    </P>
                                </Box>
                                <Box styling="row" color="secondary.default">
                                    <Fork
                                        width="15px"
                                        height="15px"
                                        fill={theme.colors.secondary.default}
                                    />
                                    <P
                                        styling="base"
                                        ml="2px"
                                        color="secondary.default"
                                    >
                                        {repository.forks_count}
                                    </P>
                                </Box>
                            </Box>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

export default Projects;
