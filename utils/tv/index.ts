import { tv as tvBase, TV } from "tailwind-variants";
import { COMMON_UNITS, mappedSpacingScaleKeys } from "./types";

export const tv: TV = (options, config) =>
    tvBase(options, {
        ...config,
        twMerge: config?.twMerge ?? true,
        twMergeConfig: {
            ...config?.twMergeConfig,
            theme: {
                ...config?.twMergeConfig?.theme,
                opacity: ["disabled"],
                spacing: ["divider", "unit", ...mappedSpacingScaleKeys],
                borderWidth: COMMON_UNITS,
                borderRadius: COMMON_UNITS,
            },
            classGroups: {
                ...config?.twMergeConfig?.classGroups,
                shadow: [{ shadow: COMMON_UNITS }],
                "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
                "bg-image": ["bg-stripe-gradient"],
                "min-w": [
                    {
                        "min-w": ["unit", ...mappedSpacingScaleKeys],
                    },
                ],
                "min-h": [
                    {
                        "min-h": ["unit", ...mappedSpacingScaleKeys],
                    },
                ],
            },
        },
    });

export const mapPropsVariants = <T extends Record<string, any>, K extends keyof T>(
    props: T,
    variantKeys?: K[],
    removeVariantProps = true,
): readonly [Omit<T, K> | T, Pick<T, K> | {}] => {
    if (!variantKeys) {
        return [props, {}];
    }

    const picked = variantKeys.reduce((acc, key) => {
        // Only include the key in `picked` if it exists in `props`
        if (key in props) {
            return { ...acc, [key]: props[key] };
        } else {
            return acc;
        }
    }, {});

    if (removeVariantProps) {
        const omitted = Object.keys(props)
            .filter((key) => !variantKeys.includes(key as K))
            .reduce((acc, key) => ({ ...acc, [key]: props[key as keyof T] }), {});

        return [omitted, picked] as [Omit<T, K>, Pick<T, K>];
    } else {
        return [props, picked] as [T, Pick<T, K>];
    }
};
