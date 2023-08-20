import { describe, expect, test } from "@jest/globals"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContentPage from '../app/(home)/content/page'
import HomePage from '../app/(home)/page'
import ArchvizPage from '../app/(other)/archviz/page'


import '@testing-library/jest-dom'

describe("Snapshots", () => {
    beforeAll(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn(() => {})
        window.scrollTo = jest.fn(() => {})
    })

    test("/content", () => {
        const {asFragment}: {asFragment: () => DocumentFragment} = render(<ContentPage />)
        expect(asFragment()).toMatchSnapshot()
    })

    test("/", () => {
        const {asFragment}: {asFragment: () => DocumentFragment} = render(<HomePage />)
        expect(asFragment()).toMatchSnapshot()
    })

    test("/archviz", () => {
        const {asFragment}: {asFragment: () => DocumentFragment} = render(<ArchvizPage />)
        expect(asFragment()).toMatchSnapshot()
    })
})
