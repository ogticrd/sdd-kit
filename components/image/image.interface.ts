import { ImgHTMLAttributes, Ref } from "react";
import { ImageVariantProps } from "./image.style";
import { As } from "./types";

type NativeImageProps = ImgHTMLAttributes<HTMLImageElement>;

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    ref?: Ref<HTMLImageElement> | undefined
    isBlurred?: boolean;
    fallbackSrc?: React.ReactNode;
    disableSkeleton?: boolean;
    onLoad?: NativeImageProps["onLoad"];
    loading?: NativeImageProps["loading"];
    removeWrapper?: boolean;
    isLoading?: boolean;
    onError?: () => void;
    as?: As;
}

export type UseImageProps = ImageProps & ImageVariantProps;
