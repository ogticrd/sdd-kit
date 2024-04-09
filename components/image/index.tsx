import React, { cloneElement, forwardRef } from "react";
import { useImageProps } from "./use-image-props";
import { UseImageProps } from "./image.interface";

export interface ImageProps extends Omit<UseImageProps, "showSkeleton"> { }

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref: any) => {
    const {
        domRef,
        // slots,
        isBlurred,
        isZoomed,
        fallbackSrc,
        removeWrapper,
        disableSkeleton,
        getImgProps,
        getWrapperProps,
        getBlurredImgProps,
    } = useImageProps({
        ...props,
        ref,
    });

    const img = <img ref={domRef} {...getImgProps()} />;

    // if (removeWrapper) return img;

    // const zoomed = (
    //     // <div className={slots.zoomedWrapper()}>{img}</div>
    //     <div>{img}</div>
    // )

    // if (isBlurred) {
    //     return (
    //         <div {...getWrapperProps()}>
    //             {isZoomed ? zoomed : img}
    //             {cloneElement(img, getBlurredImgProps())}
    //         </div>
    //     )
    // }

    // if (isZoomed || !disableSkeleton || fallbackSrc) {
    //     return <div {...getWrapperProps()}> {isZoomed ? zoomed : img}</div>;
    // }

    return img;

    // return <img />
})

Image.displayName = "Image";

export default Image;

export { Image };

