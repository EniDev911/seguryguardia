import React from "react";
import { Container } from "react-bootstrap";
import BgHeroRb from "../components/background/BgSection";
import ReviewCliente from "../components/review/Clientes";
import Valores from "../components/review/Valores";
import HeroText from "../components/body/HeroText";
import empresaData from "../assets/data/empresa.json";

const Empresa = () => {
  return (
    <section className="bg-gray bg-gradient animate__animated animate__fadeIn">
      <BgHeroRb title="empresa" image=""/>
      <Container className="p-5 bg-body shadow">
        <HeroText />
        {empresaData.empresa.map((item) => {
          return (
            <div key={item.id}>
              <h4
                className="mt-5 fw-bold mb-4"
                style={{
                  color: "#00000070",
                  textDecoration: "3px underline #ffc107",
                  textUnderlineOffset: "10px",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{ color: "#33333390" }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></p>
            </div>
          );
        })}
      </Container>
      <Valores />
      <ReviewCliente />
    </section>
  );
};

export default Empresa;
