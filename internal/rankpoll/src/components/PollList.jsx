import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

function PollList() {
    const [polls, setPolls] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/polls')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setPolls(data);
            })
            setLoading(true);
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {polls && 
                        polls.map((poll, index) => (
                            <tr key={index}>
                                <td>{poll.title}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}

export default PollList;