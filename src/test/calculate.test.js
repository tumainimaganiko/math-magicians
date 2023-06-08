import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import calculate from 'logic/calculate';
import Span from 'components/Span';

describe('test Calculating', () => {
  test('render', () => {
    const obj = {
      total: '20',
      next: '2',
      operation: '-',
    };
    render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
    const equal = calculate(obj, '=');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(equal.total).toBe('18');
  });
  test('render', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '+',
    };
    render(<Span obj={obj} setObj={() => obj} text="=" color="white" />);
    const equal = calculate(obj, '=');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(equal.total).toBe('4');
  });
  test('render', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '+',
    };
    render(<Span obj={obj} setObj={() => obj} text="AC" color="white" />);
    const equal = calculate(obj, 'AC');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(equal.total).toBeNull();
  });  
})