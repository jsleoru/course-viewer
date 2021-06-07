import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ControlItem from './ControlItem'

function LeftMenu(props) {

    function runCode(){
        props.setLogs([]);
        // eslint-disable-next-line no-eval
        eval("(async () => {" + props.code + "})()")
    }
    return (
        <ButtonGroup 
    className="mr-2" 
    aria-label="First group" 
    vertical 
    style={{padding: '0', margin: '0'}}
  >
  
  <ControlItem
    onClick={runCode}
    name="play"
    text="Запустить"
  />
  <ControlItem
    onClick={()=>{}}
    name="check"
    text="Проверить"
  />

  <ControlItem
    onClick={()=>{}}
    name="floppy-o"
    text="Сохранить"
  />

  <ControlItem
    onClick={()=>{}}
    name="book"
    text="Помощь"
  />

  <ControlItem
    onClick={()=>{}}
    name="bars"
    text="Посмотреть содержание курса"
  />

  </ButtonGroup>

    );
}

export default LeftMenu;