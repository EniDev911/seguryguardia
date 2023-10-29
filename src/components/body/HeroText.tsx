import React from 'react'
import { Stack } from 'react-bootstrap'

export default () => {
  return (
      <Stack direction="horizontal" gap={3} className="mx-auto justify-content-center" style={{
        color: "#666",
        fontWeight: "500",
      }}>
        <div className="text-stack d-flex">
          <p className=""><small>ASESORÍAS</small></p>
          <div className="vr mx-2" />
          <p className=""><small>SEGURIDAD</small></p>
          <div className="vr mx-2" />
          <p className=""><small>LOGISTÍCA, DESDE 2009</small></p>
        </div>
      </Stack>
  )
}