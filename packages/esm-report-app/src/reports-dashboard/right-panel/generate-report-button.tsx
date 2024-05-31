import React from 'react';
import { Button } from '@carbon/react';
import { Download } from '@carbon/react/icons';

const GenerateButton: React.FC = () => {
  return (
    <Button kind="ghost" renderIcon={Download}>
      Generate
    </Button>
  );
};

export default GenerateButton;
