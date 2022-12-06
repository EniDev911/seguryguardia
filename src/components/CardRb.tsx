import React from 'react';

import {Card, Button} from 'react-bootstrap'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {popupConfig} from '../utilities/settingPopup'

type propsType = {
  image?: string,
  image2?: string,
  title?: string
  description?: string
}


const CardRb: React.FC<propsType> = ({image,image2, title, description}) => {

const MySwal = withReactContent(Swal);

const showModal = () => {
  MySwal.fire({
    ...popupConfig,
    imageUrl: image2,
    title: title,
    html: `<p>${description}</p>
  <a href="mailto:asocgremial.camionescoquimbo@gmail.com?subject=Cotizar ${title}"
      target="_blank"
      class="btn btn-warning w-100 my-3">
        Cotizar 
    </a>
    `
  })
}

return ( 
    <Card 
      className="w-100 h-100 border-0 bg-dark text-light"
      style={{cursor: "pointer"}}
      onClick={showModal}

     >
      <Card.Img variant="top"
        src={image}
        className="d-block fluid"
        style={{
          filter: "brightness(1)",
        }}
        />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
        </Card.Body>
      </Card>
    )
}

export default CardRb;