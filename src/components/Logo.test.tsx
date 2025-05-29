import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo'; 
import { MemoryRouter } from 'react-router-dom';

describe('Logo component', () => {
  it('renders the logo text', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    const logoElement = screen.getByText(/UNITAS/i); 
    expect(logoElement).toBeInTheDocument();
  });

  it('renders as a link to the homepage', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
