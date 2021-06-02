import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

function ControlItem(props) {
    return (
        <OverlayTrigger
      key={props.name}
      placement="right"
      overlay={
        <Tooltip id={`tooltip-right`}>
          {props.text}
        </Tooltip>
      }
    >
      <Button variant="light" onClick={props.onClick}>
        <i class={`fa fa-${props.name}`} aria-hidden="true"></i>
      </Button> 
    </OverlayTrigger>

    );
}

export default ControlItem;