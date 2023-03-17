import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import { useEffect } from 'react';
import MyMeeting from '../Video/MyMeeting'

import axios from "axios";

export default function Video() {
    const [meeting, initMeeting] = useDyteClient();


    useEffect(() => {
        initMeeting({
            authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImQ5NmVlZjZkLTJlZDgtNGU3Mi1hYTM4LWRiZjZiNDk0ZDRlOCIsIm1lZXRpbmdJZCI6ImJiYmNjMmQ4LWJhMTQtNDliNS1hNmU3LTQ5YzU4ZWY4NjMzYiIsInBhcnRpY2lwYW50SWQiOiJhYWFhYTE1NS1hZDQzLTQ2NWItYWU5Mi0yNjU1YzNiOTE3MTQiLCJwcmVzZXRJZCI6ImZjYmRjOTAwLWNjMGEtNDVkZS05OTVhLTVhYmI0NjVhMzRiMyIsImlhdCI6MTY3OTAzMTg1OCwiZXhwIjoxNjg3NjcxODU4fQ.nHyuJvlEZ6Eh00G06kS3x5YoDzjdcuSiNIl4ynhwBg6YHvGepBDbuMUOMZky2SQvb-JJOoezreEDqes215qts6z1w4M8z7-eAlzk9GTtL73bh0_rWcW-5mO7gXFMoPIkKgbk8eio4wGMjG09wAAsn4Xucu-TIdVnmS6WPAbHlpvLVUZQ5P3bIVfU9rGVrsJHwTZCQaHp788dBwsHK9Z3425GK7o0aeS6HevVqIdbPl5lp4XC4HgS-WfAMTZvn7AxRlRt1hTE_18urdiHDUn5r1h1tEW1N5ChLnP31sVjRxkfzJJW21ZyvoS04FY_jOWAiG267Pn6oGneAQP6SYod0Q',
            defaults: {
                audio: false,
                video: false,
            },
        });
    }, []);



    return (
        <DyteProvider value={meeting}>
            <MyMeeting />
        </DyteProvider>
    );
}