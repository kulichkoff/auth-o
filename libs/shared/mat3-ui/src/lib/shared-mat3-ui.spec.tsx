import { render } from '@testing-library/react';

import SharedMat3Ui from './shared-mat3-ui';

describe('SharedMat3Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedMat3Ui />);
    expect(baseElement).toBeTruthy();
  });
});
