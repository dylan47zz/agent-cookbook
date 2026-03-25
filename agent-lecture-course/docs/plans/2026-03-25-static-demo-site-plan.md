# Static Demo Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a lightweight static presentation site for the three-lecture Agent course with a Tears of the Kingdom-inspired atmosphere and strong classroom presentation flow.

**Architecture:** Use a single static HTML page with section-based navigation, CSS-driven visual system, and small vanilla JavaScript interactions for module toggles, reveal states, and progress navigation. Keep assets inline and dependencies at zero so the site is easy to open locally and easy to iterate on.

**Tech Stack:** HTML, CSS, vanilla JavaScript

---

### Task 1: Create the static site skeleton

**Files:**
- Create: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/index.html`
- Create: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/styles.css`
- Create: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/main.js`

**Step 1: Write the failing test**

Prototype exception: no automated test harness will be added for this static demo. Verification will be manual in browser-like inspection via file review.

**Step 2: Run test to verify it fails**

Skipped for prototype/static content work.

**Step 3: Write minimal implementation**

Create the page shell, section anchors, and file linkage.

**Step 4: Run test to verify it passes**

Manual verification by opening the generated files and checking structure.

**Step 5: Commit**

Deferred until repository is actually initialized.

### Task 2: Implement content sections and interaction hooks

**Files:**
- Modify: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/index.html`
- Modify: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/main.js`

**Step 1: Write the failing test**

Prototype exception: manual verification only.

**Step 2: Run test to verify it fails**

Skipped.

**Step 3: Write minimal implementation**

Add the course overview, lecture sections, conclusion, and lightweight interactive controls for comparisons, toggles, and reveal cards.

**Step 4: Run test to verify it passes**

Manual verification by reviewing the DOM structure and interaction wiring.

**Step 5: Commit**

Deferred until repository is actually initialized.

### Task 3: Implement the visual system

**Files:**
- Modify: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/styles.css`

**Step 1: Write the failing test**

Prototype exception: manual visual verification only.

**Step 2: Run test to verify it fails**

Skipped.

**Step 3: Write minimal implementation**

Create a TotK-inspired visual language with parchment map textures, relic-panel cards, cyan energy accents, and presentation-friendly layout/typography.

**Step 4: Run test to verify it passes**

Manual review of CSS structure and visual consistency.

**Step 5: Commit**

Deferred until repository is actually initialized.

### Task 4: Verify presentation readiness

**Files:**
- Modify if needed: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/index.html`
- Modify if needed: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/styles.css`
- Modify if needed: `/Users/dylan/my-all/agent-cookbook/agent-lecture-course/site/main.js`

**Step 1: Write the failing test**

Prototype exception: use manual checks instead of automated tests.

**Step 2: Run test to verify it fails**

Skipped.

**Step 3: Write minimal implementation**

Refine spacing, contrast, readability, and demo interactions to support live presentation flow.

**Step 4: Run test to verify it passes**

Manual verification:
- Navigation reaches each section
- Interactive toggles switch correctly
- Content is readable in a projected presentation context

**Step 5: Commit**

Deferred until repository is actually initialized.
