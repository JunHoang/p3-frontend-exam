import { useState } from "react";
import { Button, Box, Input, Text } from "ui";
import { ListPropType, FormPropType } from '../types/propTypes';

const Form = ({ tweetList, setTweetList }: FormPropType) => {
    const [inputTweet, setInputTweet] = useState('');
    const [error, setError] = useState('');

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
            const subMitData: ListPropType = {
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


    return (
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
    );
}

export default Form;
