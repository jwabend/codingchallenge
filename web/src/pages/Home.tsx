import { Col, Row } from "react-bootstrap"
import characters from "../items/items.json"
import { Characters } from "../component/characters"

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <Row lg={3} xs={3} className="g-3 container-fluid">
                {characters.map(item => (
                    <Col key={item.id}>   
                        <Characters {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}