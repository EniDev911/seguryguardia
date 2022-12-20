import React from "react";
import { Stack } from "react-bootstrap";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

const BgHeroRb = ({ title, subtitle, image }: Props) => {
  const bgImg = image? `linear-gradient(50deg, rgba(10, 20, 10, 1), rgba(210, 210, 220, .4)), url(${image})` : 'linear-gradient(25deg, rgba(10, 0, 0, 1), rgba(240, 210, 40, 1))'
  return (
    <Stack
      style={{
        background: bgImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        padding: "120px 0",
      }}
    >
      <h2
        className="display-4 m-3 fw-bold text-light text-uppercase"
        style={{
          letterSpacing: "3px",
        }}
      >
        {title}
      </h2>
      <h4 className="px-3 m-3" style={{ color: "#ddd" }}>
        { subtitle? subtitle : 'Asociación Gremial de Dueños de Camiones de Coquimbo'} 
      </h4>
    </Stack>
  );
};

export default BgHeroRb;
