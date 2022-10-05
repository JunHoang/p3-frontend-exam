import React from 'react';
import { Box, Card, Flex, Heading } from "ui";
import { RenderTweetPropType } from '../types/propTypes';
import countTime from '../utils/countTime';

const RenderTweet = ({ tweet, currentTheme }: RenderTweetPropType) => {
    const { time, input } = tweet;
    const renderTime = countTime({ time });
    return (
        <Card mb={4} ml={4} p={3} >
            <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Heading as="h3">Name</Heading>
                <Box as="time" color={currentTheme !== "vintage" ? "lightgray" : "black"}>{renderTime}</Box>
            </Flex>
            <Box as="p" sx={{ pt: 2 }}>{input}</Box>
        </Card>
    )
}

export default RenderTweet