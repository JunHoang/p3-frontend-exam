export type ListPropType = {
    time: number,
    input: string,
}

export type FormPropType = {
    tweetList: Array<ListPropType>,
    setTweetList: (a: Array<ListPropType>) => void
}

export type TimeLinePropType = {
    tweetList: Array<ListPropType>,
    currentTheme: string,
}

export type RenderTweetPropType = {
    tweet: ListPropType,
    currentTheme: string,
}

export type TimeProp = {
    time: number,
}


