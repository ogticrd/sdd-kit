import { forwardRef, useMemo } from "react";
import { clsx } from 'clsx'

type Breakpoint = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    isBlurred?: boolean;
    radius?: Breakpoint
    shadow?: Breakpoint
    isZoomed?: boolean;
}


// TODO: add blurred image
const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
    const {
        src = "https://nextui.org/images/hero-card-complete.jpeg",
        alt,
        className,
        radius = 'lg',
        shadow = 'none',
        isZoomed = false,
        ...rest
    } = props;

    const borderRadius = useMemo(() => `rounded-${radius}`, [radius])
    const boxShadow = useMemo(() => `shadow-${shadow}`, [shadow])

    const img = (<img
        ref={ref}
        src={src}
        alt={alt}
        className={clsx(
            "relative z-10 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300",
            borderRadius,
            boxShadow,
            className
        )}
        {...rest}
    />)

    if (isZoomed) {
        return (
            <div className="relative shadow-black/5 shadow-none rounded-lg" style={{ maxWidth: "300px" }}>
                <div className="relative overflow-hidden rounded-[inherit]">
                    {img}
                </div>
            </div>
        )
    }

    return (
        <div className="relative shadow-black/5 shadow-none rounded-2xl">

        </div>
    );
})

Image.displayName = "Image";

export default Image;

export { Image }
