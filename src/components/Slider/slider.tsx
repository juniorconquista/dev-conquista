import React, { memo, useCallback, useRef, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSprings, a, useSpring } from 'react-spring';
import debounce from 'lodash/debounce';

import { Props } from './slider.types';
import { styles } from './slider.style';

const InstaCounter = ({ currentIndex, data }: any) => {
    const dots = [];
    for (const [index] of data.entries()) {
        dots.push(<Dot key={index} active={currentIndex - 1 === index} />);
    }
    return (
        <div style={{ ...styles.navigation }}>
            <div style={{ ...styles.dotcontainer }}>{dots}</div>
        </div>
    );
};

const Dot = ({ active }: { active: boolean }) => {
    const { transform, opacity } = useSpring({
        opacity: active ? 1 : 0.8,
        transform: active ? `scale(1.5)` : `scale(1)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <a.div
            //@ts-ignore
            style={{ opacity: opacity.to((o) => o), transform, ...styles.dot }}
        />
    );
};

const Slider: React.FC<Props> = ({
    items,
    itemWidth = 'full',
    visible = items.length - 2,
    style,
    children,
    showButtons = true,
    showCounter = true,
}) => {
    if (items.length <= 2) {
        console.warn(
            "The slider doesn't handle two or less items very well, please use it with an array of at least 3 items in length",
        );
    }
    const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    let width = itemWidth === 'full' ? windowWidth : Math.ceil(itemWidth);
    const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [
        items,
    ]);
    const getPos = useCallback(
        (i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
        [idx],
    );
    // Important only if specifyng width, centers the element in the slider
    const offset = 0;
    const [springs, set] = useSprings(items.length, (i) => ({
        x: (i < items.length - 1 ? i : -1) * width + offset,
    }));
    const prev = useRef([0, 1]);
    const index = useRef(0);
    const [active, setActive] = useState(1);
    const runSprings = useCallback(
        (y, vy, down, xDir, cancel, xMove) => {
            // This decides if we move over to the next slide or back to the initial
            if (!down) {
                index.current +=
                    ((-xMove + (width + xMove)) / width) * (xDir > 0 ? -1 : 1);
                // cancel()
            }
            if (index.current + 1 > items.length) {
                setActive((index.current % items.length) + 1);
            } else if (index.current < 0) {
                setActive(items.length + ((index.current + 1) % items.length));
            } else {
                setActive(index.current + 1);
            }
            // The actual scrolling value
            const finalY = index.current * width;
            // Defines currently visible slides
            const firstVis = idx(Math.floor(finalY / width) % items.length);
            const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1;
            set((i) => {
                const position = getPos(i, firstVis, firstVisIdx);
                const prevPosition = getPos(
                    i,
                    prev.current[0],
                    prev.current[1],
                );
                let rank =
                    firstVis -
                    (finalY < 0 ? items.length : 0) +
                    position -
                    firstVisIdx +
                    (finalY < 0 && firstVis === 0 ? items.length : 0);
                return {
                    // x is the position of each of our slides
                    x:
                        (-finalY % (width * items.length)) +
                        width * rank +
                        (down ? xMove : 0) +
                        offset,
                    // this defines if the movement is immediate
                    // So when an item is moved from one end to the other we don't
                    // see it moving
                    immediate:
                        vy < 0
                            ? prevPosition > position
                            : prevPosition < position,
                };
            });
            prev.current = [firstVis, firstVisIdx];
        },
        [idx, getPos, width, visible, set, items.length],
    );

    const bind = useDrag(
        ({
            offset: [x],
            vxvy: [vx],
            down,
            direction: [xDir],
            cancel,
            movement: [xMove],
        }) => {
            vx && runSprings(-x, -vx, down, xDir, cancel, xMove);
        },
    );

    const buttons = (next: number) => {
        index.current += next;
        runSprings(0, next, true, -0, () => {}, -0);
    };

    const debounceTransition = debounce(buttons, 10);

    return (
        <>
            {showButtons ? (
                <div style={{ ...styles.buttonsContainer }}>
                    <button
                        style={{ ...styles.prevButton }}
                        onClick={() => debounceTransition(-1)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    <button
                        style={{ ...styles.nextButton }}
                        onClick={() => debounceTransition(1)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            ) : null}
            <div {...bind()} style={{ ...style, ...styles.container }}>
                {springs.map(({ x }, i) => (
                    <a.div
                        key={i}
                        //@ts-ignore
                        style={{ ...styles.item, width, x }}
                        //@ts-ignore
                        children={children(items[i], i)}
                    />
                ))}
            </div>
            {showCounter ? (
                <InstaCounter currentIndex={active} data={items} />
            ) : null}
        </>
    );
};

const SliderContainer: React.FC<Props> = (props) => {
    const [width, setWidth] = useState(0);
    const measuredRef = useCallback((node) => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width);
        }
    }, []);

    return (
        <>
            <div
                ref={measuredRef}
                style={{
                    height: '100%',
                    position: 'relative',
                    width: 'calc(100% - 0px)',
                }}
            >
                {width !== 0 ? (
                    <Slider {...props} itemWidth={width}>
                        {props.children}
                    </Slider>
                ) : (
                    'null'
                )}
            </div>
        </>
    );
};

export default memo(SliderContainer);
