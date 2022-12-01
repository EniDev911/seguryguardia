import React from 'react';

import {Card, Button} from 'react-bootstrap'

type propsType = {
  image: string
}


const CardRb: React.FC<propsType> = ({image}) => {
return (
    <Card bg="dark" className="p-2">
      <Card.Img variant="top"
        src={image}
        className="img-fluid"
        onClick={() => console.log("click")}
        />
      </Card>
    )
}

export default CardRb;