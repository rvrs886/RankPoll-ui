import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import "../stylesheets/PollForm.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function PollForm() {

    const [inputFields, setInputFields] = useState([
        { answer: '' }
    ]);

    const addFields = () => {
        setInputFields([...inputFields, {answer: ''}]);
    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const removeField = (index) => {
        console.log(index);
        const newForm = [...inputFields];
        newForm.splice(index, 1);
        setInputFields(newForm);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields);
    }

    return (
        <div className="poll-form-div">
            <h3 className="create-poll-header">Create poll</h3>
            <Form className="poll-form">
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter title"></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Voting type</Form.Label>
                    <Form.Select>
                        <option value="multiple" data-icon="bi bi-check2-square"> Multiple choice</option>
                        <option value="single">Single choice</option>
                    </Form.Select>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Answers</Form.Label>
                </Form.Group>
                {inputFields.map((input, index) => {
                    const placeholder = "Option " + (index + 1);
                    return (
                        <InputGroup key={index} className="answer-poll-form-group">
                            <Form.Control value={input.answer} name="answer" onChange={event => handleFormChange(index, event)} className="answer-input-poll-form" placeholder={placeholder} />
                            <Button className="bi bi-x-lg answer-remove-button" onClick={() => removeField(index)}></Button>
                        </InputGroup>
                    )
                })}
                <Button className="poll-form-add-field-button" onClick={addFields}><i className="bi bi-plus-lg"></i> Add more</Button>
            </Form>
        </div>
    )
}

export default PollForm;