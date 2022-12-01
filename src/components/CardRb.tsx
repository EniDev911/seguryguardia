import Card from "react-bootstrap/Card"; 


type CardComponentProps = {
  url: string,
  title: string,
  subtitle: string,
  description: string
};

const CardComponent = ({ url, title, subtitle, description }) => {
  const urn = "raw.githubusercontent.com/EniDev911/assets/main/svg/software/",
  return (
    <Card className="App-card bg-dark m-auto p-2 h-100">
      <a href={scheme+url+domain} target="_blank" rel="noreferrer noopener">
      <Card.Img variant="top" src={src} className="App-card-img m-auto p-3 w-75"/>
      </a>
      <Card.Body className="text-light text-uppercase">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="text-warning">{subtitle}</Card.Subtitle>
      </Card.Body>
      <Card.Text className="text-secondary fst-italic">{description}</Card.Text>
    </Card>
  );
};

export default CardComponent;