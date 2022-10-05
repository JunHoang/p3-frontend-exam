import { useState, useEffect } from "react";
import { Button, Box, Card, Flex, Heading, ThemeProvider, themes } from "ui";
import { ListPropType } from '../types/propTypes';
import Form from '../components/Form';
import TimeLine from '../components/TimeLine';

type AvailableThemes = keyof typeof themes;

export default function Challenge() {
  const defaultTheme: AvailableThemes = "nineties";
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>(defaultTheme);
  const [tweetList, setTweetList] = useState<Array<ListPropType>>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('localTweetList') as string);
    setTweetList(data);
  }, []);


  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Flex sx={{ justifyContent: "center", maxWidth: "850px", margin: "64px auto" }}>
        <Box sx={{ width: "33%" }} >
          <Card sx={{ p: 4 }}>
            <Heading as="h1">
              Welcome back, Human!
            </Heading>
            <Form tweetList={tweetList} setTweetList={setTweetList} />

            <Heading as="h5" mt={4} mb={2}>Theme switcher</Heading>
            <Flex sx={{ alignItems: "center", justifyContent: "space-between", gridAutoFlow: 'dense' }}>
              <Button onClick={() => setCurrentTheme("modern")}>Modern</Button>
              <Button onClick={() => setCurrentTheme("nineties")}>90s</Button>
              <Button onClick={() => setCurrentTheme("vintage")}>Vintage</Button>
            </Flex>
          </Card>
        </Box>

        <Box sx={{ width: "66%" }}>
          <TimeLine tweetList={tweetList} currentTheme={currentTheme} />
        </Box>
      </Flex>
    </ThemeProvider >
  );
}
