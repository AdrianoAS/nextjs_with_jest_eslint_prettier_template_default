import { render, screen } from '@testing-library/react'

import Home from '../src/pages/index'

describe('Should render home page app without crashing', () => {
  it('Render home', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Hello world'))
  })
})
