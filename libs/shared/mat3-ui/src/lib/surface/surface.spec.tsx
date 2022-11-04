import { render } from '@testing-library/react';

import Surface from './surface';

describe('Surface', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Surface />);
    expect(baseElement).toBeTruthy();
  });
});
