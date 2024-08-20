import React from 'react';

import styles from './style.module.css'

export interface BannerProps {
  img: any;
  widthImg?: string;
  heightBanner?: string;
  direction?: 'ltr' | 'rtl';
  children: React.ReactNode;
}

export const Banner = ({ img, widthImg, heightBanner, direction, children }: BannerProps) => {

  return (
    <div
      className={styles.banner}
      style={{ width: "100%", height: `${heightBanner ? heightBanner : "600px"}`, direction: `${direction ? direction : "ltr"}` }}
    >
      <div
        className={styles.img}
        style={{
          width: `${widthImg ? widthImg : "50%"}`,
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className={styles.children}>
        {children}
      </div>
    </div>
  );
}
