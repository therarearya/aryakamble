# Blue Bird Interactive 3D Book

## Goal
Replace only the Blue Bird Industries 24-page gallery with a realistic interactive book, preserving every existing page image and the rest of the case study.

## Build
- Add a dedicated 3D book viewer to the Blue Bird case study’s final-deliverable section.
- Treat page 01 as the front cover, pages 02–23 as eleven interior spreads, and page 24 as the back cover.
- Model the cover boards, spine, page block, and layered page edges with physical depth, materials, perspective lighting, and cast shadows.
- Animate each leaf with a segmented bending surface so it curls around the spine instead of rotating as a flat card.
- Support tapping/clicking the book, previous/next controls, keyboard arrows, and horizontal swipes.
- Keep an accessible page counter and disabled states at the front and back covers.
- Leave every other case study and page section unchanged.

## Technical details
- Use React Three Fiber with a client-only mounted canvas inside the existing TanStack case-study route.
- Load the existing 24 image URLs as color textures; no image files or case-study content will be altered.
- Reuse the project’s editorial color and typography tokens for the surrounding viewer and add reduced-motion behavior.
- Verify the closed cover, open spread, forward/backward page turns, mobile framing, and browser console.