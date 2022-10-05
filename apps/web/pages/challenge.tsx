import { useState, useEffect, useMemo } from "react";
import { Button, Box, Card, Flex, Heading, Input, ThemeProvider, themes, Text } from "ui";

type AvailableThemes = keyof typeof themes;
type ListPropType = {
  time: number,
  input: string,
}
type TweetPropType = {
  tweet: ListPropType,
}
type TimeProp = {
  time: number,
}

const TIME_IN_SECOND = 60;
const TIME_IN_MINUTE = 60 * 60;
const TIME_IN_HOUR = 60 * 60 * 24;
const TIME_IN_DAY = 60 * 60 * 24 * 7;

export default function Challenge() {
  const defaultTheme: AvailableThemes = "nineties";
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>(defaultTheme);
  const [inputTweet, setInputTweet] = useState('');
  const [error, setError] = useState('');
  const [tweetList, setTweetList] = useState<Array<ListPropType>>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('localTweetList') as string);
    setTweetList(data);
  }, []);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 22) {
      setError('*Your tweet is too long!')
    }
    else {
      setError('')
      setInputTweet(event.target.value)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputTweet === '') {
      setError('*Is Required!');
    }
    else {
      setError('');
      const submitTime = Date.now();
      const subMitData = {
        time: submitTime,
        input: inputTweet,
      }
      if (tweetList) {
        setTweetList([subMitData, ...tweetList]);
        localStorage.setItem('localTweetList', JSON.stringify([subMitData, ...tweetList]));
      } else {
        setTweetList([subMitData]);
        localStorage.setItem('localTweetList', JSON.stringify([subMitData]));
      }
      setInputTweet('');
    }
  }

  const countTime = ({ time }: TimeProp) => {
    const now = Date.now();
    const diffInMs = Math.abs(now - time);
    const timingInSec = Math.floor(diffInMs / (1000));

    if (timingInSec < TIME_IN_SECOND) {
      return `${timingInSec}s ago`;
    }
    if (timingInSec < TIME_IN_MINUTE) {
      const timingInMin = Math.floor(timingInSec / TIME_IN_SECOND);
      return `${timingInMin}m ago`;
    }
    if (timingInSec < TIME_IN_HOUR) {
      const timingInHour = Math.floor(timingInSec / TIME_IN_MINUTE);
      return `${timingInHour}h ago`;
    }
    if (timingInSec < TIME_IN_DAY) {
      const timingInDay = Math.floor(timingInSec / TIME_IN_HOUR);
      return `${timingInDay}d ago`;
    }
    else {
      const date = new Date(time);
      const month = date.getUTCMonth() + 1; //months from 1-12
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      const newdate = day + "/" + month + "/" + year;
      return `${newdate}`;
    }
  }

  const NoTweet = () => {
    return (
      <Card mb={4} ml={4} p={3} >
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Heading as="h3">Name</Heading>
          <Box as="time" color="lightgray">now</Box>
        </Flex>
        <Box as="p" sx={{ pt: 2 }}>Create your own tweet</Box>
      </Card>
    )
  }

  const RenderTweet = ({ tweet }: TweetPropType) => {
    const { time, input } = tweet;
    const renderTime = countTime({ time });
    return (
      <Card mb={4} ml={4} p={3} >
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Heading as="h3">Name</Heading>
          <Box as="time" color="lightgray">{renderTime}</Box>
        </Flex>
        <Box as="p" sx={{ pt: 2 }}>{input}</Box>
      </Card>
    )
  }

  const showTweet = () => {
    if (!tweetList) {
      return <NoTweet />
    }
    return (
      <>
        {tweetList.map((tweet: ListPropType, index: number) => (
          <RenderTweet
            key={index}
            tweet={tweet}
          />
        ))}
      </>
    )
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Flex sx={{ justifyContent: "center", maxWidth: "850px", margin: "64px auto" }}>
        <Box sx={{ width: "33%" }} >
          <Card sx={{ p: 4 }}>
            <Heading as="h1">
              Welcome back, Human!
            </Heading>
            <Box mt={4}>
              <form onSubmit={handleSubmit}>
                <Input placeholder="What's happening? " value={inputTweet} onChange={handleInput} />
                {error ? <Text sx={{
                  fontSize: 2,
                  fontWeight: 'bold',
                  justifyContent: 'right',
                  display: 'grid'
                }}>{error}</Text> : null}
                <Button mt={2} type="submit">Tweet</Button>
              </form>
            </Box>

            <Heading as="h5" mt={4} mb={2}>Theme switcher</Heading>
            <Flex sx={{ alignItems: "center", justifyContent: "space-between", gridAutoFlow: 'dense' }}>
              <Button onClick={() => setCurrentTheme("modern")}>Modern</Button>
              <Button onClick={() => setCurrentTheme("nineties")}>90s</Button>
              <Button onClick={() => setCurrentTheme("vintage")}>Vintage</Button>
            </Flex>
          </Card>
        </Box>

        <Box sx={{ width: "66%" }}>
          {showTweet()}
        </Box>
      </Flex>
    </ThemeProvider >
  );
}
