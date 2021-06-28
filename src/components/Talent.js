import React, { useState } from 'react';
import { Tooltip, OverlayTrigger, Button, Badge } from 'react-bootstrap';

const Talent = ({ talent: { name, max, current, desc, variant } }) => {

  console.log(variant);

  const [currentNumber, setCurrentNumber] = useState(current);

  const onClickTalent = (number) => {
    if (number < max) {
      setCurrentNumber(currentNumber + 1)
    } else {
      alert('test');
    }
  }

  return (
    <OverlayTrigger
      key={name}
      placement="top"
      delay={{ show: 0, hide: 0 }}
      overlay={
        <Tooltip id="button-tooltip">
          <div>
            <h4>{name}</h4>
            <p>
              {`
                ${desc} by 
                ${currentNumber > 0
                  ? (variant.increment * currentNumber)
                  : variant.increment}${variant.type}
              `}
            </p>
          </div>
        </Tooltip>
      }
    >
      <Button
        variant="success"
        onClick={() => onClickTalent(currentNumber)}
        className={`talent ${currentNumber === max ? 'disabled' : ''}`}
      >
        <Badge variant="secondary" className="talent-badge">
          {currentNumber} / {max}
        </Badge>
      </Button>
    </OverlayTrigger>
  );
};

export default Talent;