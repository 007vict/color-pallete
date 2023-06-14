import React from "react";
import { Stack } from "rsuite";
import { Parallax } from "react-scroll-parallax";

const Block2 = () => {
  return <React.Fragment>
    <Parallax speed={0}>
      <Stack style={{
        height: '100vh',
        color: '#fff',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${process.env.PUBLIC_URL + './img/wallpaper.jpeg'})`,
      }}>
        <h1 className="text-8xl text-white font-thin">
          Строительство загородных домов,<br />
                коттеджей в Бресте и <br />
                Бресткой области
        </h1>
      </Stack>
    </Parallax>
  </React.Fragment>;
};
 export default Block2