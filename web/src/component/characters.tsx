import { useState } from "react";
import { Card, Form } from "react-bootstrap"
import { json } from "stream/consumers";
import Dropdown, { bottomProperties } from "./dropdown"


type lotrCharacters = {
    id: number
    name: string
    level: number
    imgURL: string
}


export function Characters({ id, name, level, imgURL }: lotrCharacters) {
    const [helmet, setHelmet] = useState("");
    let handleSubmit = async (e: any) => {
        e.preventDefault();
        var myHeaders = new Headers();
              
        myHeaders.append('Content-Type', 'application/json');
        try {   
            let res = await  fetch("http://localhost:3000/api/Lotr", {
                method: "POST",
                mode: 'cors',
                headers: myHeaders,
                body: JSON.stringify({
                    "user":{
                    helmet: "asdfasdf",
                    name: "adasd",
                    level: "100",
                    weapon: "ashkandni",
                    timestamp: "123"
                    }
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setHelmet("");
                console.log("sent");
            } else {
                console.log("failed");
            }
        } catch (err) {
            console.log(err);
        }
    };
    let helmetItems: string[] = ["staff", "wizard hat"];
    let helmetProps: bottomProperties = { name: "Helmet", options: helmetItems };

    let buttonname: string = "helmet";
    return (
        <div max-width="25%">
            <Card>
                <Card.Img
                    variant="top"
                    src={imgURL}
                    height="275px"

                    //aspect ratio
                    style={{ objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2">{level}</span>
                    </Card.Title>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            value={helmet}
                            placeholder="Helmet"
                            onChange={(e) => setHelmet(e.target.value)}
                        />
                        <button type="submit">Add</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )

}