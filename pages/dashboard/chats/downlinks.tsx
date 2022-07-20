import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, useTheme, ButtonProps, Text } from '@chakra-ui/react';
import { formatNumber } from '../../../public/utils/formatter'

type activeProps = {
    value: number,
    otherProps?: ButtonProps
}

const Downlinks = ({ value, otherProps }: activeProps) => {
    const theme = useTheme();
    return (
        <Box
            width='200px'
            height='200px'
            mt={7}
            alignSelf='center'
        >
            <CircularProgressbarWithChildren
                value={value}
                strokeWidth={3}
                maxValue={1}
                circleRatio={1}
                styles={buildStyles({
                    strokeLinecap: 'round',
                    textSize: '16px',
                    pathColor: 'rgba(8, 167, 48, 1)',
                    trailColor: 'rgba(0, 122, 255, 1)',
                })}
            >
                <Text
                    color={theme.colors.brand.yoda}
                    fontSize={28}
                >
                    Total
                </Text>
                <Text
                    color={theme.colors.brand.black}
                    fontSize={30}
                >
                    {formatNumber(3535)}
                </Text>
            </CircularProgressbarWithChildren>
        </Box>
    )
}

export default Downlinks