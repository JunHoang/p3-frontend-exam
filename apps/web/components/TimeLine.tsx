import React, { useState } from 'react';
import { TimeLinePropType } from '../types/propTypes';
import NoTweet from './NoTweet';
import RenderTweet from './RenderTweet';

const TimeLine = ({ tweetList, currentTheme }: TimeLinePropType) => {

    const [counter, setCounter] = useState(0);

    setInterval(() => {
        setCounter(counter + 1);
    }, 60000);


    const showTweet = () => {
        if (!tweetList) {
            return <NoTweet />
        }
        return (
            <>
                {tweetList.map((tweet, index: number) => (
                    <RenderTweet
                        key={index}
                        tweet={tweet}
                        currentTheme={currentTheme}
                    />
                ))}
            </>
        )
    }

    return (
        <>
            {showTweet()}
        </>
    )
}

export default TimeLine