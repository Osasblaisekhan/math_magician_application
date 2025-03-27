import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './calculator';

describe('Calculator', () => {
  it('should have initial value', () => {
    const { getByTestId } = render(<Calculator initialValue={0} />);
    const initial = Number(getByTestId('test').textContent);
    expect(initial).toBe(0);
  });

  it('should clear all display value', () => {
    const { getByTestId, getByRole } = render(<Calculator initialValue={0} />);
    const deleteAllBtn = getByRole('button', { name: 'AC' });
    const initial1 = Number(getByTestId('test').textContent);
    expect(initial1).toBe(0);
    fireEvent.click(deleteAllBtn);
    const initial2 = Number(getByTestId('test').textContent);
    expect(initial2).toEqual(0);
  });

  it('should display 7 as its value', () => {
    const { getByTestId, getByRole } = render(<Calculator initialValue={0} />);
    const sevenBtn = getByRole('button', { name: '7' });
    const initial1 = Number(getByTestId('test').textContent);
    expect(initial1).toBe(0);
    fireEvent.click(sevenBtn);
    const initial2 = Number(getByTestId('test').textContent);
    expect(initial2).toBe(7);
  });

  it('should have value of seven', () => {
    render(<Calculator/>);
    const seven = screen.getByText(/7/i);
    expect(seven).toBeInTheDocument();
  });
});