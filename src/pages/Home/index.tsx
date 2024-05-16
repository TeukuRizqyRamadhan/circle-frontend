import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ThreadCard from "../../components/common/ThreadCard";
import { getThreads } from "../../lib/api/call/thread";
import { IThread } from "../../types/app";

const Home = () => {
    const [thread, setThread] = useState<IThread[]>([]);

    const fetchThread = async () => {
        try {
            const { data } = await getThreads();

            console.log(data);
            setThread(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchThread();
    }, []);

    return (
        <Box>
            {thread &&
                thread.map((item) => <ThreadCard key={item.id} thread={item} />)}
        </Box>
    );
};

export default Home;