import { describe, expect, test } from "@jest/globals"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page, { generateStaticParams } from './page'


import '@testing-library/jest-dom'

describe("/view/", () => {
    beforeAll(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn(() => {})
    })

    test("/view/[valid route]", async () => {
        const {asFragment}: {asFragment: () => DocumentFragment} = render(<Page params={{image: "cube"}} />)
        await new Promise((r) => setTimeout(r, 500))
        expect(screen.getByTestId('instagram-embed')).toBeVisible()
    })

    test("/view/[invalid route]", async () => {
        const {asFragment}: {asFragment: () => DocumentFragment} = render(<Page params={{image: "abcdef"}} />)
        await new Promise((r) => setTimeout(r, 500))
        expect(screen.getByText("404 Image not found :(")).toBeVisible()
    })
})