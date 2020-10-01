export const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
    },
    item: {
        position: 'absolute',
        height: '100%',
        willChange: 'transform',
    },
    dotcontainer: {
        padding: '0.7rem 1rem',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        borderRadius: '99px',
        background: '#fff',
        width: '5px',
        height: '5px',
        margin: '.3rem',
        color: '#000',
    },
    buttonsContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        alignItems: 'center',
    },
    prevButton: {
        position: 'absolute',
        background: 'none',
        color: '#fff',
        border: 'none',
        marginLeft: '-30px',
    },
    nextButton: {
        marginRight: '-30px',
        position: 'absolute',
        background: 'none',
        color: '#fff',
        border: 'none',
        marginLeft: '-30px',
        right: 0,
    },
    navigation: {},
} as {
    [key: string]: React.CSSProperties;
};
