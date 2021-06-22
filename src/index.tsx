import React, { ComponentProps, useEffect, useState } from "react";
import { Text } from "ink";

type Props = {
    /** Max width in symbols (should be fixed) */
    maxWidth: number;
    /** Current progress value (from 0 to 1) */
    value: number;
    /** Override symbols here */
    symbols?: Partial<{
        /** @default █ */
        progress: string;
        /** @default (space) */
        empty: string;
        /** @default ["[", "]"] */
        braces: [string, string];
    }>;
} & Pick<ComponentProps<typeof Text>, "color" | "backgroundColor" | "inverse" | "dimColor" | "wrap">;

/**
 * Direction of inline prgress is always left-to-right 
 * 
 * @example
 * 
 * <InlineProgressBar maxWidth={10} value={0.5} />
 * //=> [█████     ]
 * */
export const InlineProgressBar: React.FC<Props> = ({
    value,
    maxWidth,
    symbols: { progress: progressSymbol = "█", empty: emptySymbol = " ", braces = "[]".split("") } = {},
    ...textProps
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(value * maxWidth);
    }, [value, maxWidth]);

    return <Text
        {...textProps}
    >
        {braces[0]}{progressSymbol.repeat(progress).padEnd(maxWidth, emptySymbol)}{braces[1]}
    </Text>;
};