# Design System Strategy: The Fertile Ground

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Editorial Estate."** 

We are moving away from the "government portal" aesthetic and toward a high-end, editorial experience that feels as grounded and permanent as the Argentine soil. This system treats digital space like a physical landscape—expansive, layered, and organized by natural boundaries rather than artificial lines. By utilizing intentional asymmetry, oversized typography, and sophisticated tonal shifts, we create a "Premium-Accessible" interface. It is professional enough to win the trust of a large-scale contractor, yet warm and legible enough for a field worker navigating on a mobile device under the midday sun.

## 2. Color: The Tonal Landscape
The palette is a direct extraction of the Pampa: deep ombú greens, harvested wheat, and the clay of the Paraná banks.

### The "No-Line" Rule
To achieve a high-end signature look, **1px solid borders are strictly prohibited for sectioning.** We do not "box" content. Instead, define boundaries through background color shifts.
*   **Implementation:** A section using `surface-container-low` (#fbf2ec) should sit directly against a `surface` (#fff8f4) background. The shift in tone is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
*   **Level 0 (Base):** `surface` (#fff8f4) - The vast open field.
*   **Level 1 (Sections):** `surface-container` (#f5ece6) - Broad content areas.
*   **Level 2 (Interaction):** `surface-container-highest` (#e9e1db) - Cards or specific focus areas.

### The "Glass & Gradient" Rule
Flat colors can feel static. Use the following to inject "soul":
*   **Signature Gradients:** For primary CTAs or Hero sections, use a subtle linear gradient from `primary` (#154212) to `primary_container` (#2d5a27). This mimics the way light hits a cultivated field.
*   **Rural Glassmorphism:** For floating navigation or over-image labels, use `surface` at 80% opacity with a `20px` backdrop-blur. This keeps the interface feeling "airy" despite the heavy, earthy colors.

## 3. Typography: Authority & Clarity
We use a dual-typeface system to balance heritage with modern utility.

*   **Display & Headlines (Manrope):** Chosen for its wide stance and geometric authority. Use `display-lg` (3.5rem) for hero statements. These should be set with tight tracking (-0.02em) to feel like a premium broadsheet newspaper.
*   **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility for users who may be viewing the screen in high-glare outdoor environments. 
*   **The Identity Shift:** Large-scale headlines should often be asymmetrical—left-aligned with significant "dead space" to the right—to break the "template" feel and suggest the vastness of the Argentine landscape.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are replaced by light and depth.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_lowest` (#ffffff) card on top of a `surface_container_low` (#fbf2ec) background. This creates a "soft lift" that feels organic and premium.
*   **Ambient Shadows:** If a floating element (like a FAB or Modal) requires a shadow, use a custom shadow: `0 20px 40px rgba(31, 27, 23, 0.06)`. Note the use of the `on_surface` color for the shadow tint rather than pure black; this ensures the shadow feels like a natural casting of light on clay.
*   **The "Ghost Border" Fallback:** If a container sits on an image and needs definition, use `outline_variant` (#c2c9bb) at **15% opacity**. It should be felt, not seen.

## 5. Components: Rugged Utility

### Buttons (The High-Contrast Tool)
Buttons must feel like physical tools—sturdy and unmistakable.
*   **Primary:** `primary` (#154212) background with `on_primary` (#ffffff) text. Use `rounded-md` (0.375rem) for a look that is professional but not "bubbly."
*   **Secondary:** `secondary_container` (#fdcdbc) with `on_secondary_container` (#795548). This "Clay on Earth" look provides high contrast without the aggression of a standard "warning" color.

### Input Fields (The Clear Path)
*   **Styling:** Use a `surface_container_highest` background with a bottom-only `outline` (#72796e) at 2px thickness. This creates an "editorial" underline feel that is much cleaner than a four-sided box.
*   **States:** On focus, the underline transitions to `primary` (#154212) with a 3px thickness.

### Cards & Lists (The Rule of Space)
*   **Strictly forbid divider lines.** 
*   Separate list items using `spacing-4` (1.4rem) of vertical white space.
*   For cards, use a `surface_container_low` fill. Use traditional agricultural imagery (high-grain, warm-toned photography) as the "header" of the card, bleeding to the edges.

### Signature Component: The "Harvest Progress" Tracker
For training modules, use a custom horizontal stepper where the "completed" path is a thick `tertiary` (#735c00) line and the "upcoming" path is a dashed `outline_variant`.

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Place text in the first two-thirds of the grid and leave the final third for a high-quality "atmospheric" image of the countryside.
*   **Do** use `tertiary` (#735c00) for "Gold-Standard" moments—success messages, certifications, or highlighting key training benefits.
*   **Do** maximize white space. If you think there is enough space between sections, double it using `spacing-20` (7rem).

### Don’t:
*   **Don’t** use pure black (#000000). Always use `on_surface` (#1f1b17) for text to maintain the "earthy" warmth.
*   **Don’t** use standard Material Design "Drop Shadows." They feel "techy" and cheapen the editorial intent.
*   **Don’t** use icons without labels. Our audience values clarity over "clever" UI shortcuts. Always pair an icon with a `label-md` or `label-sm`.