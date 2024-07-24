import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import Home from '.';

test('<Home />', () => {
  render(Home, { name: 'Home' });

  const element = screen.queryByText(/pipi/iu);

  expect(element).toBeInTheDocument();
});
