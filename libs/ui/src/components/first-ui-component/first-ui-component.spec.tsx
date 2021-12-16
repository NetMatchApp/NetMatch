import { render } from '@testing-library/react';

import FirstUiComponent from './first-ui-component';

describe('FirstUiComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstUiComponent />);
    expect(baseElement).toBeTruthy();
  });
});
