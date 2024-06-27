import { mapPropsVariants } from "../../utils/tv";
import { UseImageProps } from "./image.interface";
import { image } from "./image.style";
import { useImageBase } from "./use-image-base";
import { useDOMRef } from "../../utils/dom.util";
import { useCallback, useMemo } from "react";
import { PropGetter } from "./types";
import { clsx } from "clsx";
import { dataAttr } from "../../utils/assertion";

export function useImageProps(originalProps: UseImageProps) {
    const [props, variantProps] = mapPropsVariants(originalProps, image.variantKeys);

    const {
        ref,
        as,
        src,
        className,
        loading,
        isBlurred,
        fallbackSrc,
        isLoading: isLoadingProp,
        disableSkeleton = !!fallbackSrc,
        removeWrapper = false,
        onError,
        onLoad,
        srcSet,
        sizes,
        crossOrigin,
        ...otherProps
    } = props;

    const imageStatus = useImageBase({
        src,
        loading,
        onError,
        onLoad,
        ignoreFallback: false,
        srcSet,
        sizes,
        crossOrigin,
    });

    const isImgLoaded = imageStatus === "loaded" && !isLoadingProp;
    const isLoading = imageStatus === "loading" || isLoadingProp;
    const showSkeleton = isLoading && !disableSkeleton;
    const showFallback = (!src || !isImgLoaded) && !!fallbackSrc;
    const isZoomed = originalProps.isZoomed;

    const domRef = useDOMRef(ref);

    const Component = useMemo(() => as || "img", [as])

    const w = useMemo(() => {
        const w = props.width ? typeof props.width === "number" ? `${props.width}px` : props.width : "fit-content";
        return w
    }, [props.width])

    const slots = useMemo(
        () =>
            image({
                ...variantProps,
                showSkeleton,
            }),
        [...Object.values(variantProps), showSkeleton],
    );

    const baseStyles = clsx(className);

    const getImgProps: PropGetter = (props = {}) => {
        const imgStyles = clsx(baseStyles, props?.className);

        return {
            src,
            ref: domRef,
            "data-loaded": dataAttr(isImgLoaded),
            className: slots.img({ class: imgStyles }),
            loading,
            srcSet,
            sizes,
            crossOrigin,
            ...otherProps,
        };
    };

    const getWrapperProps = useCallback<PropGetter>(() => {
        const fallbackStyle = showFallback
            ? {
                backgroundImage: `url(${fallbackSrc})`,
            }
            : {};

        return {
            className: slots.wrapper(),
            style: {
                ...fallbackStyle,
                maxWidth: w,
            },
        };
    }, [slots, showFallback, fallbackSrc]);

    const getBlurredImgProps = useCallback<PropGetter>(() => {
        return {
            src,
            "aria-hidden": dataAttr(true),
            className: slots.blurredImg(),
        };
    }, [slots, src]);

    return {
        domRef,
        Component,
        slots,
        isBlurred,
        disableSkeleton,
        fallbackSrc,
        removeWrapper,
        isZoomed,
        isLoading,
        getImgProps,
        getWrapperProps,
        getBlurredImgProps,
    };
}