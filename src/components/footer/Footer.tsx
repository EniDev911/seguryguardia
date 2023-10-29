import React from 'react'
import { Row } from 'react-bootstrap';

function Footer() {
    return (
        <Row style={{ background: "#111" }}>
            <p className="py-3 fs-5 text-light m-0 text-center">
                © 2023 SeguryGuardia
            </p>
        </Row>
    )
}

export default Footer