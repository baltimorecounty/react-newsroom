import React from "react";
import { Collapse, Checkbox } from "@baltimorecounty/dotgov-components";

const FilterCollapse = props => {
  const { id, header, onChange, items } = props;

  return (
    <Collapse id={id} header={header}>
      {items.map(item => {
        return (
          <Checkbox
            key={item.name}
            id={item.name}
            name={item.name}
            onChange={onChange}
            label={item.name}
            value={item.value}
          />
        );
      })}
    </Collapse>
  );
};

export default FilterCollapse;
