import React from 'react';
import { Box, Card, Flex, Heading } from "ui";

const NoTweet = () => {
    return (
        <Card mb={4} ml={4} p={3} >
            <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Heading as="h3">Name</Heading>
                <Box as="time" color="lightgray">time ago</Box>
            </Flex>
            <Box as="p" sx={{ pt: 2 }}>Create your own tweet</Box>
        </Card>
    )
}

export default NoTweet