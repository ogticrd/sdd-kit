import type { Meta } from "@storybook/react";

import { Image, ImageProps } from "../components";
import { image } from "../components/image/image.style";
import * as React from "react";
// @ts-ignore
import Placeholder from "./assets/images/placeholder_300x450.png";
// @ts-ignore
import HeroCard from "./assets/images/hero-card.jpg";

const meta = {
  title: "Example/Image",
  tags: ["autodocs"],
  component: Image,
  argTypes: {
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    shadow: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg"],
    },
    isBlurred: {
      control: {
        type: "boolean",
      },
    },
    isZoomed: {
      control: {
        type: "boolean",
      },
    },
    removeWrapper: {
      table: {
        disable: true
      }
    },
    onLoad: {
      table: {
        disable: true
      }
    },
    onError: {
      table: {
        disable: true
      }
    },
    isLoading: {
      table: {
        disable: true
      }
    },
    loading: {
      table: {
        disable: true
      }
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Image>;

export default meta;

const defaultProps = {
  ...image.defaultVariants,
  src: HeroCard.src,
  alt: "OGTIC SDD-KIT hero image",
  disableSkeleton: true,
};

const LoadingTemplate = (args: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const time = !args.disableSkeleton ? 2500 : 500;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Image {...args} isLoading={isLoading} />;
};

export const Default = {
  args: {
    width: 300,
    ...defaultProps,
  },
};

export const Blurred = {
  args: {
    ...defaultProps,
    width: 300,
    isBlurred: true,
  },
};

export const Zoomed = {
  args: {
    ...defaultProps,
    width: 300,
    isZoomed: true,
    radius: "lg",
  },
};

export const Shadow = {
  args: {
    ...defaultProps,
    width: 300,
    isZoomed: true,
    radius: "lg",
    shadow: "md",
  },
};

export const AnimatedLoad = {
  args: {
    ...defaultProps,
    width: 300,
    radius: "lg",
    src: "https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  },
};

export const Fallback = {
  render: LoadingTemplate,
  args: {
    ...defaultProps,
    width: 300,
    radius: "lg",
    src: "https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    fallbackSrc: Placeholder.src,
  },
};

export const Skeleton = {
  render: LoadingTemplate,
  args: {
    ...defaultProps,
    width: 300,
    height: 450,
    radius: "lg",
    src: "https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    disableSkeleton: false,
  },
};