import { render } from '@testing-library/react';

import FirstUiComponent from './first-ui-component';

describe('FirstUiComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstUiComponent primeraFuncion={function (): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(baseElement).toBeTruthy();
  });
});
