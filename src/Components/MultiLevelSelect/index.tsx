import React from "react";
import MultiLevelSelect from "./react-multi-level-selector/src";

const options = [
  {
    value: "fruits",
    label: "Fruits",
    options: [
      {
        value: "citrus",
        label: "Citrus",
        options: [
          { value: "orange", label: "Orange" },
          { value: "grapefruits", label: "GrapeFruits" },
        ],
      },
      {
        value: "tropical",
        label: "Tropical",
        options: [
          { value: "mango", label: "Mango" },
          { value: "papaya", label: "Papaya" },
        ],
      },
      {
        value: "berries",
        label: "Berries",
        options: [
          { value: "strawberry", label: "Strawberry" },
          { value: "raspberries", label: "Raspberries" },
        ],
      },
    ],
  },
  {
    value: "city",
    label: "City",
    options: [
      { value: "dublin", label: "Dublin" },
      { value: "new york", label: "New York" },
      { value: "san fransis", label: "San Fransis" },
      {
        value: "citrus",
        label: "Citrus",
        options: [
          { value: "orange", label: "Orange" },
          { value: "grapefruits", label: "GrapeFruits" },
          {
            value: "citrus",
            label: "Citrus",
            options: [
              { value: "orange", label: "Orange" },
              { value: "grapefruits", label: "GrapeFruits" },
            ],
          },
        ],
      },
    ],
  },
];
const MultiLvlSelection = () => {
  return (
    <div>
      <MultiLevelSelect options={options} isSelectMulti={false} />
      <div>This is a test application</div>
    </div>
  );
};

export default MultiLvlSelection;
