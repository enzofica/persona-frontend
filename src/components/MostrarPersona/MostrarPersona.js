import * as React from "react";
import petitions from "../petitions";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Button} from "@mui/material";
import { List } from "antd";
import "antd/dist/antd.min.css"

export default function MostrarPersona() {
  const [personas, setPerson] = useState([]);
  const { handleSubmit } = useForm();
  const onSubmit = () => petitions.PostPersonas();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await petitions.GetPersonas();
    setPerson(response);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      <div className="PlaceList">
      <h2>Personas</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Button
            type="submit"
            variant="contained"
            style={{ background: "#053742" }}
          >
            Crear persona
          </Button>
      <List
        style={{ background: "white" }}
        itemLayout="horizontal"
        dataSource={["this data is to show a single column"]}
        renderItem={() => (
          <List.Item>
            <List.Item.Meta title={<h5>Nombre</h5>}></List.Item.Meta>
            <List.Item.Meta title={<h5>Apellido</h5>}></List.Item.Meta>
            <List.Item.Meta title={<h5>Fecha de nacimiento</h5>}></List.Item.Meta>
            <List.Item.Meta title={<h5>Ciudad</h5>}></List.Item.Meta>
            <List.Item.Meta title={<h5>Email</h5>}></List.Item.Meta>
          </List.Item>
        )}
      />
      <List
        style={{ background: "#c2dbfa" }}
        itemLayout="horizontal"
        dataSource={personas}
        renderItem={(person) => (
          <List.Item>
            <List.Item.Meta title={person.nombre}></List.Item.Meta>
            <List.Item.Meta title={person.apellido}></List.Item.Meta>
            <List.Item.Meta title={person.fechaNacimiento}></List.Item.Meta>
            <List.Item.Meta title={person.ciudad}></List.Item.Meta>
            <List.Item.Meta title={person.email}></List.Item.Meta>
            
            </List.Item>
        )} 
        />
    </form>
    </div>
      </Container>
    </React.Fragment>    
  );
}