import React from 'react';

import { Card, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { popupConfig } from '../utilities/settingPopup'

type propsType = {
  image?: string,
  image2?: string,
  title?: string,
  description?: string,
  light?: boolean
}


const CardRb: React.FC<propsType> = ({ image, image2, title, description, light = false }) => {

  const MySwal = withReactContent(Swal);

  const showModal = () => {
    MySwal.fire({
      ...popupConfig,
      imageUrl: image2,
      title: title,
      html: `<p>${description}</p>
  <a href="mailto:asocgremial.camionescoquimbo@gmail.com?subject=Cotizar ${title}"
      target="_blank"
      class="btn btn-gray w-100 my-3">
        Cotizar 
    </a>
    `
    })
  }

  return (
    <Card
      className="h-100 pointer bg-secondary text-gray border-0"
      onClick={showModal}
    >
      <Card.Img variant="top"
        src={image}
        className="d-block card-img rounded-circle border border-2 w-75 mx-auto m-3"
        style={{
          filter: "brightness(1) grayscale(1)"
        }}
      />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CardRb;