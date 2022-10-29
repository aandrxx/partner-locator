import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { default as Select } from 'components/Select'

jest.mock("../../services/axios/index.js", () => jest.fn());

test('renders select', () => {
  render(<Select />)
  const selectElement = screen.getByRole('listbox')
  expect(selectElement).toBeInTheDocument()
})

test('renders small select', () => {
  render(<Select size="small" />)
  const selectElementSmall = screen.getByRole('listbox')
  expect(selectElementSmall).toHaveClass(`--small`)
})

test('renders disabled select', () => {
  render(<Select disabled={true} placeHolder="Select" />)
  const selectElement = screen.getByRole('listbox')
  expect(selectElement).toHaveClass(`--is_disabled`)
  const buttonElement = screen.getByRole('button', { name: 'Select' })
  expect(buttonElement).toBeDisabled()
})

test('renders options - first, second, third', () => {
  render(
    <Select 
      options={[
        {key: 1, text: 'first'},
        {key: 2, text: 'second'},
        {key: 3, text: 'third'}
      ]} 
    />
  )
  expect(screen.getByRole('option', { name: 'first' })).toBeInTheDocument()
  expect(screen.getByRole('option', { name: 'second' })).toBeInTheDocument()
  expect(screen.getByRole('option', { name: 'third' })).toBeInTheDocument()
})

test('toggle visible on click to select buttons (icon and value buttons)', () => {
  render(
    <Select 
      options={[
        {key: 1, text: 'first'}
      ]}
    />
  )
  const buttonElement = screen.getAllByRole('button')
  fireEvent.click(buttonElement[0])
  expect(screen.getByRole('option', { name: 'first' }).closest('div.form__select__dropdown__items').closest('div.form__select__dropdown')).toHaveClass('--is_visible')
  fireEvent.click(buttonElement[1])
  expect(screen.getByRole('option', { name: 'first' }).closest('div.form__select__dropdown__items').closest('div.form__select__dropdown')).not.toHaveClass('--is_visible')
})

test('selected value "first" on click to first option', () => {
  render(
    <Select 
      options={[
        {key: 1, text: 'first'}
      ]} 
    />
  )
  const optionElement = screen.getByRole('option', { name: 'first' })
  fireEvent.click(optionElement)
  const buttonElement = screen.getAllByRole('button')
  expect(buttonElement[0]).toHaveTextContent('first')
})
