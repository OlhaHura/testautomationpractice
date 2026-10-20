# Test documentation

This document describes the automated test cases in this project. Each case lists the steps and the expected result.

## How to run

| Suite | Command | Application |
| --- | --- | --- |
| UI | `npm run tests:ui` | https://testautomationpractice.blogspot.com |
| API | `npm run tests:api` | https://api.restful-api.dev |
| Performance | `npm run tests:performance` | https://testautomationpractice.blogspot.com |

UI tests run in Desktop Chrome. Opening the site also dismisses the cookie alert when it is shown.

## UI: Home page

File: `tests/e2e/e2e-homeTest.spec.ts`

Each test starts on the Home page.

### Test 10: Open Home page

| Step | Action |
| --- | --- |
| 1 | Open the Home page. |
| 2 | Click **Home** in the menu. |

**Expected result:** The **Data Entry Form** heading is visible.

### Test 20: Type random name and email into the Data Entry Form

| Step | Action |
| --- | --- |
| 1 | Open the Home page. |
| 2 | Type a random name into the **Name** field. |
| 3 | Type a random email into the **Email** field. |

**Expected result:** The **Name** field contains the entered name. The **Email** field contains the entered email.

### Test 30: Dynamic Button

| Step | Action |
| --- | --- |
| 1 | Open the Home page. |
| 2 | Click **START**. |
| 3 | Click **STOP**. |

**Expected result:** After step 2, the **STOP** button is visible. After step 3, the **START** button is visible.

### Test 40: Select Japan from the Country drop-down

| Step | Action |
| --- | --- |
| 1 | Open the Home page. |
| 2 | Scroll to the **Country** drop-down. |
| 3 | Open the list of countries. |
| 4 | Select **Japan**. |

**Expected result:** The **Country** drop-down value is `japan`.

### Test 50: Select Wireless Mouse 20 in the Pagination Web Table

| Step | Action |
| --- | --- |
| 1 | Open the Home page. |
| 2 | Scroll to the **Pagination Web Table**. |
| 3 | Click page **1**, then **2**, then **3**, then **4**. |
| 4 | Select **Wireless Mouse 20**. |

**Expected result:** The checkbox for **Wireless Mouse 20** is selected.

## UI: PlaywrightPractice page

File: `tests/e2e/e2e-playwrightpracticeTest.spec.ts`

Each test starts by opening the site and clicking **PlaywrightPractice** in the menu.

### Test 10: Open PlaywrightPractice page

| Step | Action |
| --- | --- |
| 1 | Open the site. |
| 2 | Click **PlaywrightPractice** in the menu. |

**Expected result:** The URL ends with `p/playwrightpractice.html`. The page title is **PlaywrightPractice**.

### Test 20: Click Primary Action button

| Step | Action |
| --- | --- |
| 1 | Open the PlaywrightPractice page. |
| 2 | Click **Primary Action**. |

**Expected result:** Before the click, **Primary Action** is visible and enabled. The click completes.

### Test 30: Hover over the Toggle Button

| Step | Action |
| --- | --- |
| 1 | Open the PlaywrightPractice page. |
| 2 | Hover over **Toggle Button**. |

**Expected result:** Before the hover, **Toggle Button** is visible and enabled. After the hover, its background color is gray (`rgb(128, 128, 128)`).

### Test 40: Drag and drop an element into the target zone

| Step | Action |
| --- | --- |
| 1 | Open the PlaywrightPractice page. |
| 2 | Scroll to the **Drag and Drop** section. |
| 3 | Drag **Drag me to my target** into the **Drop here** zone. |

**Expected result:** The drop zone text changes to **Dropped!**.

### Test 50: Select a random item from the Scrolling DropDown

| Step | Action |
| --- | --- |
| 1 | Open the PlaywrightPractice page. |
| 2 | Choose a random item from **Item 1** through **Item 100**. |
| 3 | Scroll to the **Scrolling DropDown** section. |
| 4 | Open the list. |
| 5 | Select the chosen item. |

**Expected result:** The Scrolling DropDown field shows the selected item, for example `Item 42`.

## UI: Hidden Elements & AJAX page

File: `tests/e2e/e2e-hiddenElementsTest.spec.ts`

Page: [Hidden Elements & AJAX](https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html)

Each test starts by opening the site and clicking **Hidden Elements & AJAX** in the footer menu.

### Test 10: Show Input Box 2

| Step | Action |
| --- | --- |
| 1 | Open the Hidden Elements & AJAX page. |
| 2 | Check **Input Box 2**. |
| 3 | Click **Toggle Input Box 2**. |

**Expected result:** **Input Box 2** is not visible before the click. After the click, **Input Box 2** is visible.

### Test 20: Hide Input Box 2

| Step | Action |
| --- | --- |
| 1 | Open the Hidden Elements & AJAX page. |
| 2 | Check **Input Box 2**. |
| 3 | Click **Toggle Input Box 2**. |
| 4 | Click **Toggle Input Box 2** again. |

**Expected result:** **Input Box 2** is not visible at the start, visible after the first click, and not visible after the second click.

### Test 30: Show Checkbox 2

| Step | Action |
| --- | --- |
| 1 | Open the Hidden Elements & AJAX page. |
| 2 | Check **Checkbox 2**. |
| 3 | Click **Toggle Checkbox 2**. |

**Expected result:** **Checkbox 2** is not visible before the click. After the click, **Checkbox 2** is visible.

### Test 40: Hide Checkbox 2

| Step | Action |
| --- | --- |
| 1 | Open the Hidden Elements & AJAX page. |
| 2 | Check **Checkbox 2**. |
| 3 | Click **Toggle Checkbox 2**. |
| 4 | Click **Toggle Checkbox 2** again. |

**Expected result:** **Checkbox 2** is not visible at the start, visible after the first click, and not visible after the second click.

### Test 50: Load AJAX Content

| Step | Action |
| --- | --- |
| 1 | Open the Hidden Elements & AJAX page. |
| 2 | Click **Load AJAX Content**. |

**Expected result:** The loaded content contains **AJAX Content Loaded** and **This is some dynamic content loaded through AJAX.**

## API

File: `tests/api/apiTest.spec.ts`

Base URL: `https://api.restful-api.dev`

### Test 10: GET Request

| Step | Action |
| --- | --- |
| 1 | Send `GET /objects`. |

**Expected result:** The response status is `200`.

### Test 20: GET Request. Parse JSON

| Step | Action |
| --- | --- |
| 1 | Send `GET /objects/5`. |
| 2 | Read the JSON body. |

**Expected result:**

- The response status is `200`.
- `id` is `5`.
- `name` is `Samsung Galaxy Z Fold2`.
- `data.color` is `Brown`.

### Test 30: POST Request

| Step | Action |
| --- | --- |
| 1 | Send `POST /objects` with this body: name `Apple MacBook 18`, year `2026`, price `1999.99`, CPU model `Intel Core i11`, hard disk size `128 TB`. |
| 2 | Read the JSON body. |

**Expected result:**

- The response status is `200`.
- `id` and `createdAt` are present.
- `name` is `Apple MacBook 18`.
- `data.year` is `2026`.
- `data.price` is `1999.99`.
- `data["CPU model"]` is `Intel Core i11`.
- `data["Hard disk size"]` is `128 TB`.

### Test 40: DELETE Request

| Step | Action |
| --- | --- |
| 1 | Send `POST /objects` with name `Apple MacBook 100`, year `2050`, price `39999.99`, CPU model `Intel q77`, and hard disk size `999 TB`. |
| 2 | Read the created object id. |
| 3 | Send `DELETE /objects/{id}`. |

**Expected result:** The create response status is `200`. The delete response status is `200`. The delete message contains `deleted`.

## Performance

File: `tests/performance/loadTest.spec.ts`

`homeUsers` and `practiceUsers` in that file set how many users run at the same time. Both are `10`.

Each user opens the site, then opens the target page from the menu. All visits must start within 10 seconds of each other.

### Test 10: Home page load

| Step | Action |
| --- | --- |
| 1 | Start 10 browser sessions at the same time. |
| 2 | In each session, open the site. |
| 3 | In each session, click **Home** in the menu. |

**Expected result:** Every session shows the **Data Entry Form** heading. All 10 sessions start within 10 seconds of each other.

### Test 20: PlaywrightPractice page load

| Step | Action |
| --- | --- |
| 1 | Start 10 browser sessions at the same time. |
| 2 | In each session, open the site. |
| 3 | In each session, click **PlaywrightPractice** in the menu. |

**Expected result:** Every session shows the **PlaywrightPractice** title. All 10 sessions start within 10 seconds of each other.
