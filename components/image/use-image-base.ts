import type { ImgHTMLAttributes, SyntheticEvent } from "react";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    useLayoutEffect
} from "react";

type NativeImageProps = ImgHTMLAttributes<HTMLImageElement>;

export interface UseImageProps {
    src?: string;
    srcSet?: string;
    sizes?: string;
    onLoad?: NativeImageProps["onLoad"];
    onError?: NativeImageProps["onError"];
    ignoreFallback?: boolean;
    crossOrigin?: NativeImageProps["crossOrigin"];
    loading?: NativeImageProps["loading"];
}

type Status = "loading" | "failed" | "pending" | "loaded";

export type FallbackStrategy = "onError" | "beforeLoadOrError";

type ImageEvent = SyntheticEvent<HTMLImageElement, Event>;

export const useSafeLayoutEffect = Boolean(globalThis?.document) ? useLayoutEffect : useEffect;

/**
 * React hook that loads an image in the browser,
 * and lets us know the `status` so we can show image
 * fallback if it is still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
export function useImageBase(props: UseImageProps = {}) {
    const { loading, src, srcSet, onLoad, onError, crossOrigin, sizes, ignoreFallback } = props;

    const [status, setStatus] = useState<Status>("pending");

    useEffect(() => {
        setStatus(src ? "loading" : "pending");
    }, [src]);

    const imageRef = useRef<HTMLImageElement | null>();

    const load = useCallback(() => {
        if (!src) return;

        flush();

        const img = new Image();

        img.src = src;
        if (crossOrigin) img.crossOrigin = crossOrigin;
        if (srcSet) img.srcset = srcSet;
        if (sizes) img.sizes = sizes;
        if (loading) img.loading = loading;

        img.onload = (event) => {
            flush();
            setStatus("loaded");
            onLoad?.(event as unknown as ImageEvent);
        };
        img.onerror = (error) => {
            flush();
            setStatus("failed");
            onError?.(error as any);
        };

        imageRef.current = img;
    }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading]);

    const flush = () => {
        if (imageRef.current) {
            imageRef.current.onload = null;
            imageRef.current.onerror = null;
            imageRef.current = null;
        }
    };

    useSafeLayoutEffect(() => {
        /**
         * If user opts out of the fallback/placeholder
         * logic, let's bail out.
         */
        if (ignoreFallback) return undefined;

        if (status === "loading") {
            load();
        }

        return () => {
            flush();
        };
    }, [status, load, ignoreFallback]);

    /**
     * If user opts out of the fallback/placeholder
     * logic, let's just return 'loaded'
     */
    return ignoreFallback ? "loaded" : status;
}

// export const shouldShowFallbackImage = (status: Status, fallbackStrategy: FallbackStrategy) =>
//   (status !== "loaded" && fallbackStrategy === "beforeLoadOrError") ||
//   (status === "failed" && fallbackStrategy === "onError");

// export type UseImageReturn = ReturnType<typeof useImage>;
