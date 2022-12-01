import React from 'react';

import {Card, Button} from 'react-bootstrap'

type propsType = {
  image?: string
}


const CardRb: React.FC<propsType> = ({image}) => {
return (
    <Card bg="dark" 
      className="bg-gradient p-2 border border-secondary border-3 rounded-circle"
      style={{height: "250px"}}
     >
      <Card.Img variant="top"
        src={image}
        className="w-75 m-auto"
        style={{
          filter: "brightness(2)"
        }}
        onClick={() => console.log("click")}
        />
      </Card>
    )
}

export default CardRb;