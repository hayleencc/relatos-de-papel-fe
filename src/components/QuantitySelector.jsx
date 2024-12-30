import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const QuantitySelector = ({ quantity, stock, onIncrement, onDecrement }) => {
  return (
    <InputGroup className="mb-3">
      <Button
        variant="outline-secondary"
        onClick={onDecrement}
        disabled={quantity <= 1}
      >
        -
      </Button>
      <FormControl
        value={quantity}
        readOnly
        className="text-center"
        style={{ width: "60px" }}
      />
      <Button
        variant="outline-secondary"
        onClick={onIncrement}
        disabled={quantity >= stock}
      >
        +
      </Button>
    </InputGroup>
  );
};

export default QuantitySelector;
