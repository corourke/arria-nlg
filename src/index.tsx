import React from 'react';
import { ComponentProps } from '@incorta-org/component-sdk';
import './styles.less';

const ArriaNlg = (props: ComponentProps) => {
  console.log(props);
  return (
    <div className="test">
      <h1>Hello incorta Component</h1>
    </div>
  );
};

export default ArriaNlg;
