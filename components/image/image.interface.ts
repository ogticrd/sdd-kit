import { ImgHTMLAttributes } from "react";
// import { ImageVariantProps } from "./image.style";

type NativeImageProps = ImgHTMLAttributes<HTMLImageElement>;

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    ref?: React.RefObject<HTMLImageElement | null>
    isBlurred?: boolean;
    fallbackSrc?: React.ReactNode;
    disableSkeleton?: boolean;
    onLoad?: NativeImageProps["onLoad"];
    loading?: NativeImageProps["loading"];
    removeWrapper?: boolean;
    isLoading?: boolean;
    onError?: () => void;
    /**
     * Classname or List of classes to change the classNames of the element.
     * if `className` is passed, it will be added to the base slot.
     *
     * @example
     * ```ts
     * <Image classNames={{
     *    base:"base-classes", // image classes
     *    wrapper: "wrapper-classes",
     *    blurredImg: "blurredImg-classes", // this is a cloned version of the img
     * }} />
     * ```
     */
    // classNames?: SlotsToClasses<ImageSlots>;
}

// export type UseImageProps = ImageProps & ImageVariantProps;
export type UseImageProps = ImageProps