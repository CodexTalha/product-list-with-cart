<div align="center">

# Desserts | Product List & Cart

**Browse something sweet. Build your order. Make it yours.**

A responsive dessert storefront with an interactive cart, live totals, and an order confirmation dialog. Built with HTML, CSS, and vanilla JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No build step](https://img.shields.io/badge/No_build_step-C73A0F?style=for-the-badge)

[Gallery](#gallery) &middot; [Features](#features) &middot; [Run locally](#run-locally) &middot; [What I learned](#what-i-learned) &middot; [Author](#author)

</div>

![Desktop storefront with dessert cards and an empty cart](product%20screenshots/Screenshot%202026-10-09%20164934.png)

## Overview

My solution to the **Frontend Mentor Product list with cart** challenge. The interface pairs warm neutrals and red accents with responsive product photography, a flexible product grid, and a cart that updates as you shop.

The goal was to practice building a complete interaction flow: selecting products, adjusting quantities, removing items, reviewing an order, and starting again.

## Gallery

### A cart that updates as you shop

Selected products receive a red outline. The cart shows quantities, unit prices, subtotals, and the order total.

![Desktop storefront with selected products and a populated cart](product%20screenshots/Screenshot%202026-10-09%20165003.png)

### From selection to confirmation

The confirmation dialog brings product thumbnails, quantities, and the final total together in one summary.

<p align="center">
  <img src="product%20screenshots/Screenshot%202026-10-09%20165021.png" alt="Order confirmation dialog showing three dessert selections and a total of $26.50" width="620">
</p>

### Responsive at smaller widths

<table>
  <tr>
    <th>Mobile &middot; Single column</th>
    <th>Tablet &middot; Two columns</th>
  </tr>
  <tr>
    <td align="center"><img src="product%20screenshots/Screenshot%202026-10-09%20164857.png" alt="Mobile view with dessert cards in a single column" width="300"></td>
    <td align="center"><img src="product%20screenshots/Screenshot%202026-10-09%20164846.png" alt="Tablet view with dessert cards in two columns" width="420"></td>
  </tr>
</table>

## Features

- **Nine desserts** with product names, categories, prices, and responsive images.
- **Independent quantities** with add, increase, decrease, and remove controls.
- **Live cart updates** with an item count, product subtotals, and an order total.
- **Empty and filled states** that switch automatically as products are selected or removed.
- **Selected-product styling** that highlights items currently in the cart.
- **Order confirmation** with product thumbnails and a complete price summary.
- **Start New Order** to clear selections and return to an empty cart.
- **Keyboard support** with visible focus styles and focus movement when controls change.
- **Screen-reader status updates** announcing cart quantities and totals.

## Built with

| Technology | How it is used |
| --- | --- |
| Semantic HTML | Product articles, labelled sections, buttons, and reusable templates |
| CSS Grid | Responsive product grid and storefront layout |
| Flexbox | Quantity controls, cart rows, and price alignment |
| Media queries and picture elements | Layout and image changes across screen sizes |
| Vanilla JavaScript | Click handlers, quantities, cart rendering, and order reset |
| Native dialog element | Modal order confirmation and backdrop |
| Local Red Hat Text font | Consistent typography without a remote font dependency |

## Run locally

1. Download this project and extract it into a folder.
2. Open the folder in your editor.
3. Open **index.html** in a browser, or use VS Code's **Live Server** extension.

There are no package installations, API keys, or build commands required. Keep the assets folder alongside the HTML, CSS, and JavaScript files.

## Project structure

```text
.
|-- index.html             # Storefront markup, cart, dialog, and templates
|-- style.css              # Responsive layout and component styles
|-- script.js              # Product controls and cart interactions
|-- assets/
|   |-- fonts/             # Local Red Hat Text font files
|   `-- images/            # Dessert photography, thumbnails, and icons
|-- design/                # Original challenge design references
|-- product screenshots/   # Screenshots of this implementation
|-- data.json              # Provided product data; not loaded by the current script
`-- README.md
```

## What I learned

### Connecting HTML to JavaScript

I started by selecting one product and its button, then used querySelectorAll and forEach to apply the same behavior to every product. Selecting controls inside each card keeps their interactions tied to the correct dessert.

### Keeping the cart in sync

The updateCart function reads the displayed product quantities, skips products at zero, and rebuilds cart rows from an HTML template. It also recalculates the count and total, switches the empty state, and updates selected-product styling.

### Reusing markup with templates

Cloning template content lets cart rows and confirmation rows share a consistent structure. JavaScript fills each copy with the product details before inserting it into the page.

### Handling numbers and presentation

Number converts displayed quantity and price text into values for arithmetic. Multiplying quantity by unit price gives a subtotal, while toFixed(2) formats prices with two decimal places.

### Making interactions easier to use

The hidden attribute controls which buttons are visible. Explicit focus movement keeps keyboard users on an available control when the previous one disappears, and a status element announces cart updates to screen readers.

## Validation

JavaScript syntax and HTML selector references were checked during development. The main shopping flow was also manually tested in the browser and reported working.

To repeat the core check:

1. Add **2 waffles** and **1 Red Velvet Cake**: the count should be **3** and the total **$17.50**.
2. Remove the waffles: the count should be **1** and the total **$4.50**.
3. Decrease the cake to zero: the empty cart should return.
4. Add products, confirm the order, and compare the summary with the cart.
5. Choose Start New Order and verify quantities, totals, and borders reset.

## Future improvements

- Keep cart data in a dedicated JavaScript state structure rather than reading quantities from the page.
- Load product details from the provided data.json file.
- Persist the cart across refreshes with localStorage.
- Add automated browser tests for the main shopping flow.

## AI collaboration

I built this project with step-by-step coding assistance, explanations, and code review from ChatGPT/Codex. I tested the shopping flow in the browser while learning how the JavaScript works.

## Author

**Talha** &middot; Front-end development practice

[![GitHub](https://img.shields.io/badge/GitHub-CodexTalha-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CodexTalha)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Talha_Khan-0A66C2?style=for-the-badge)](https://www.linkedin.com/in/talha-khan-2608aa384/)

## Credits

Design brief, product imagery, icons, and fonts provided with the **Frontend Mentor Product list with cart** challenge. Implementation by **Talha**.

---

<div align="center">

**A little storefront. A lot of JavaScript practice.**

</div>
