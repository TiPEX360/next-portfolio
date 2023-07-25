import React from 'react'
import OnScroll from './OnScroll'
import { MountReturn } from 'cypress/react18'

describe('<OnScroll />', () => {
  it('renders', () => {
    cy.mount(<OnScroll>
      <div id="subject">I should only be visible on scroll.</div>
    </OnScroll>)
    cy.get('#subject').should('be.visible')
    cy.get('#subject').should('contain.text', "I should only be visible on scroll.")
  })

  it('scroll into view', () => {
    cy.mount(
      <div style={{height: 100, position: 'relative', top: 2000}}>
        <OnScroll>
          <div id="subject">I should only be visible on scroll.</div>
        </OnScroll>
      </div>
    )

    cy.get('#subject').should('not.exist')
    cy.scrollTo(0, 2000)
    cy.get('#subject').should('be.visible')
  })

  it('scroll out of view', () => {
    cy.mount(
      <div style={{height: 2000, position: 'relative', top: 0}}>
        <OnScroll>
          <div id="subject">I should only be visible on scroll.</div>
        </OnScroll>
      </div>
    )

    cy.get('#subject').should('be.visible')
    cy.scrollTo(0, 2000)
    cy.get('#subject').should('be.visible')
  })

  it('scroll outside view', () => {
    cy.mount(
      <div style={{height: 100, position: 'relative', top: 2000}}>
        <OnScroll>
          <div id="subject">I should only be visible on scroll.</div>
        </OnScroll>
      </div>
    )

    cy.get('#subject').should('not.exist')
    cy.scrollTo(0, 200)
    cy.get('#subject').should('not.exist')
  })
})