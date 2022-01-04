import './Button.css';

import React from 'react';

export default props => {
  
  let classbtn = 'button-calc ';
  classbtn += props.operation ? 'operation' : '';
  classbtn += props.double ? 'double' : '';
  classbtn += props.triple ? 'triple' : '';


  return (

    <button onClick={ e => props.click && props.click(props.label) } 
      className={ classbtn }>
      { props.label }
    </button>

  );

}