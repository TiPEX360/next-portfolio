import { describe, expect, jest, test} from "@jest/globals"

describe("Children of OnScroll mount behaviour", () => {
    describe("Children should be unmounted", () => {
        test("When outside of viewport on initial render", () => true)
        test("When outside of viewport during scroll", () => true)
    })

    describe("Children should be mounted", () => {
        test("When inside of viewport on initial render", () => true)
        test("When entering viewport during scroll", () => true)
        test("When leaving viewport during scroll", () => true)
        test("When inside of viewport during scroll", () => true)
        test("When outside of viewport during scroll", () => true)
    })
})