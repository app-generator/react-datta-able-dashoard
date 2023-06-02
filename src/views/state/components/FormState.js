import React, {useState,useEffect} from 'react'
import {Card, Form, Button, Row, Col} from 'react-bootstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { validateCidr} from '../../../utils/validators';


const animatedComponents = makeAnimated();


const FormState = ({body, setBody, createState, childernes}) => {
    const [childernesValueLabel, setChildernesValueLabel] = useState([])

    useEffect(()=> {

        let listDefaultArtifact = childernes.filter(elemento => body.children.includes(elemento.value))
        .map(elemento => ({value: elemento.value, label:elemento.label}))

        setChildernesValueLabel(listDefaultArtifact)
    
    },[body.children, childernes])
    

    const completeField=(event)=>{ 
        setBody({...body,
            [event.target.name] : event.target.value}
        )     
    } 
    const completeChildernes=(event)=>{ 
        
        setBody({...body,
            ["children"] : event.map((e)=>{
                return e.value
            })}
        )
        console.log(body.children)
    }

  return (
    <Card.Body>
        <Form>
            <Row>
                <Col>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        placeholder="Ingrese un nombre" 
                        maxlength="100" 
                        value ={body.name} 
                        name="name"
                        isInvalid={body.name === ""}
                        isValid={body.name !== ""}
                        onChange={(e)=>completeField(e)}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Atendido</Form.Label>
                        <Form.Control  
                            type="choice"
                            as="select" 
                            name="attended" 
                            value ={body.attended}
                            isInvalid={body.attended === null}
                            isValid={body.attended !== null} 
                            onChange={(e)=>completeField(e)}>
                            <option value="-1">Seleccione un opcion</option> 
                            <option value={true}>verdadero</option>
                            <option value={false}>falso</option>       
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Resuelto</Form.Label>
                        <Form.Control  
                            type="choice"
                            as="select" 
                            name="solved" 
                            value ={body.solved} 
                            isInvalid={body.solved === null}
                            isValid={body.solved !== null} 
                            onChange={(e)=>completeField(e)}>
                            <option value="-1">Seleccione un opcion</option> 
                            <option value={true}>verdadero</option>
                            <option value={false}>falso</option>       
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control 
                placeholder="Ingrese una descripcion" 
                maxlength="150" 
                value ={body.description} 
                name="description"
                isInvalid={body.description === ""}
                isValid={body.description !== ""}
                onChange={(e)=>completeField(e)}/>
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Hijos</Form.Label>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    value={childernesValueLabel}
                    onChange={completeChildernes}
                    options={childernes}
                />
            </Form.Group>

            <Button variant="primary" onClick={createState} >Guardar</Button> 
            <Button variant="primary" href="/states">Cancelar</Button>  

        </Form>
    </Card.Body>
  )
}

export default FormState