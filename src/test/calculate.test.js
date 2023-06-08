import React from 'react'
import {render, screen} from '@testing-library/react'
import calculate from "logic/calculate";
import { fireEvent } from '@testing-library/react';
import Span from 'components/Span';

test("render", () => {
  const obj = {
    total: '20',
    next: '2',
    operation: '-',
  }
  render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
  const equal = calculate(obj, '=')
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(equal.total).toBe('18');
});
test("render", () => {
  const obj = {
    total: '2',
    next: '2',
    operation: '+',
  }
  render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
  const equal = calculate(obj, '=')
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(equal.total).toBe('4');
});
