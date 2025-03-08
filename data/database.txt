
-- con esta linea creamos la base de datos pasta la Tareas 
CREATE DATABASE TASKDB;

// -- con esta linea creamos la tabla de la  base de datos llamada TASK
CREATE TABLE TASK (
    ID_TAREA SERIAL PRIMARY KEY,
    TITULO VARCHAR(20) NOT NULL,
    DESCRIPCION VARCHAR(100) NOT NULL,
    ESTADO VARCHAR(10) NOT NULL,
);


-- comentarios que describen la indormacion que va a contener cada columna de la base de datos 
COMMENT ON TABLE TASK IS 'Esta es la tabla que para las tareas';
COMMENT ON COLUMN TASK.ID_TAREA IS 'ID de las tares ';
COMMENT ON COLUMN TASK.TITULO IS 'Titulo de las tares';
COMMENT ON COLUMN TASK.DESCRIPCION IS 'Descripcion de las tareas';
COMMENT ON COLUMN TASK.ESTADO IS 'Estado de las tareas';

