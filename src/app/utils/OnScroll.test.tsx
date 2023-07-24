import { describe, expect, test } from "@jest/globals"
import OnScroll from './OnScroll'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from "react"

describe("<OnScroll />", () => {

    let scrollPosition: number = 0
    let subjectTop: number = 0
    let getBoundingClientRectSpy: jest.SpyInstance
    let scrollBySpy: jest.SpyInstance

    beforeAll(() =>{
        getBoundingClientRectSpy = jest.spyOn(window.HTMLDivElement.prototype, 'getBoundingClientRect')
        getBoundingClientRectSpy.mockImplementation(() => ({
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: subjectTop - scrollPosition,
            width: 0,
        } as DOMRect))
    
        scrollBySpy = jest.spyOn(window, 'scrollBy')
        scrollBySpy.mockImplementation((options: {top?: number, left?: number, behavior?: string | null}) => {
            scrollPosition = options.top ?? 0
            fireEvent.scroll(window, options)
        })
    })

    afterEach(() => {
        const s = screen.queryByTestId('subject')
        if (s != null) s.parentElement!.innerHTML = ''
    })

    afterAll(() => {
        getBoundingClientRectSpy.mockRestore()
        scrollBySpy.mockRestore()
    })

    test("entering viewport during scroll down", async () => {
        subjectTop = 2000
        window.scrollBy({top: 0})

        render(
            <div>
                <OnScroll><div data-testid="subject">{"I should only appear once scrolled to 2000 - 1024 = 976"}</div></OnScroll>
            </div>
        )
        
        let subject: () => HTMLElement | null = () => screen.queryByTestId("subject")
        if (subject() != null) expect(subject).not.toBeVisible() 
        window.scrollBy({top: 2000})
        await new Promise((r: (value: unknown) => void) => setTimeout(r, 200))
        expect(subject()).toBeVisible()
    })

    test("entering viewport during scroll up", async () => {
        subjectTop = 0
        window.scrollBy({top: 5000})

        render(
            <div>
                <OnScroll><div data-testid="subject">{"I should only appear once scrolled to 2000 - 1024 = 976"}</div></OnScroll>
            </div>
        )
        
        let subject: () => HTMLElement | null = () => screen.queryByTestId("subject")
        expect(subject()).toBeVisible() 
        window.scrollBy({top: 0})
        await new Promise((r: (value: unknown) => void) => setTimeout(r, 200))
        expect(subject()).toBeVisible()
    })

    test("leaving viewport during scroll", async () => { 
        subjectTop = 0
        window.scrollBy({top: 0})
        
        render(
            <div>
                <OnScroll><div data-testid="subject">{"I should only appear once scrolled to 2000 - 1024 = 976"}</div></OnScroll>
            </div>
        )
        
        let subject: HTMLElement | null = screen.queryByTestId("subject")
        expect(subject).toBeVisible() 
        window.scrollBy({top: 5000})
        await new Promise((r: (value: unknown) => void) => setTimeout(r, 200))
        expect(subject).toBeVisible()
    })

    test("inside of viewport during scroll", async () => { 
        subjectTop = 200
        window.scrollBy({top: 0})
        
        render(
            <div>
                <OnScroll><div data-testid="subject">{"I should only appear once scrolled to 2000 - 1024 = 976"}</div></OnScroll>
            </div>
        )
        
        let subject: () => HTMLElement | null = () => screen.queryByTestId("subject")
        expect(subject()).toBeVisible() 
        window.scrollBy({top: 100})
        await new Promise((r: (value: unknown) => void) => setTimeout(r, 200))
        expect(subject()).toBeVisible()
    })

    test("outside of viewport during scroll", async () => { 
        subjectTop = 5000
        window.scrollBy({top: 0})
        
        render(
            <div>
                <OnScroll><div data-testid="subject">{"I should only appear once scrolled to 2000 - 1024 = 976"}</div></OnScroll>
            </div>
        )
        
        let subject: () => HTMLElement | null = () => screen.queryByTestId("subject")
        if (subject() != null) expect(subject()).not.toBeVisible() 
        window.scrollBy({top: 2000})
        await new Promise((r: (value: unknown) => void) => setTimeout(r, 200))
        if (subject() != null) expect(subject()).not.toBeVisible()
    })
})