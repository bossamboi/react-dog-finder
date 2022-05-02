import Router from "react-router";
Router.useParams = jest.fn();
import Dog from './Dog';

import { render, screen, waitFor } from '@testing-library/react';

test('renders learn react link', () => {
  Router.useParams.mockReturnValue({a: "b"});
  render(<Dog />)
});
