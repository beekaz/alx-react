import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

test('Header renders without crushing', () => {
    render(<Header />)
    expect(screen.getByText('School dashboard')).toBeInTheDocument()
})

test('Header renders img and h1 tags', () => {
    render(<Header />)
    expect(screen.getByText('School dashboard')).toBeInTheDocument()
    expect(screen.getByAltText('logo')).toBeInTheDocument()
})