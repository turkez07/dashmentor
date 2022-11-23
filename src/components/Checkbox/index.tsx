import React, { ReactElement, useEffect, useState } from 'react';
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from 'react-spring';

import './styles.css';

import { CheckboxProps } from './Checkbox.spec';

function Checkbox({
  type = '',
  backgroundColor = '',
  defaultBackground,
  borderColor = '',
  checked,
  onChange,
  field,
}: CheckboxProps): ReactElement {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? backgroundColor : defaultBackground,
    borderColor,
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null) as any;

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1],
  );

  useEffect(() => {
    setIsChecked(field?.checked || checked);
  }, [field?.checked, checked]);

  return (
    <label>
      <input
        type={type}
        {...field}
        onChange={(e) => {
          setIsChecked(!isChecked);
          field?.onChange?.(e);
          onChange?.(e);
        }}
        value={isChecked || field?.value || checked}
      />
      <animated.svg
        style={checkboxAnimationStyle}
        className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
        aria-hidden="true"
        viewBox="-4 0 22 11"
        fill="none"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="1.7"
          stroke="#FFF"
          ref={(ref: any) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
    </label>
  );
}

Checkbox.defaultProps = {
  type: 'checkbox',
  backgroundColor: '',
  defaultBackground: '',
  borderColor: '',
};

export default Checkbox;
