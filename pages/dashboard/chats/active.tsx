import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, useTheme } from '@chakra-ui/react';

type activeProps = {
    value: number,
    type: string
}

const Active = ({value, type}: activeProps) => {
    const theme = useTheme();
    return (
        <Box
            width='70px'
            height='70px'
        >
            <CircularProgressbar
                value={value}
                maxValue={1}
                circleRatio={1}
                text={`${value * 100}%`}
                styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathColor: type == 'subscribers' ? 'rgba(255, 149, 0, 1)' : 'rgba(175, 82, 222, 1)',
                    trailColor:  '#fff',
                })}
            />
        </Box>
    )
}

export default Active