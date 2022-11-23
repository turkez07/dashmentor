import React from 'react';

export interface CheckboxProps {
  type?: string;
  backgroundColor?: string;
  defaultBackground?: string;
  borderColor?: string;
  checked?: boolean;
  value?: boolean;
  onChange?: React.ChangeEventHandler;
  [v: string]: any;
}
