# Mercury Experts Storefront

A responsive, frontend-only e-commerce storefront built to match the supplied Mercury Experts visual references.

## Run locally

Requires Node.js 18 or newer. From this folder, run:

```powershell
npm run start
```

Then open [http://localhost:4173](http://localhost:4173).

If port 4173 is already in use, start on another port in PowerShell:

```powershell
$env:PORT=4174
npm run dev
```

Then open [http://localhost:4174](http://localhost:4174).

## Included experiences

- Home, searchable product listing, product details, cart, wishlist, About, Contact, sign-in, checkout, order tracking, FAQs, and policy pages
- 39 sample products across the reference categories
- Browser-stored cart, wishlist, selected pincode, and demo sign-in session
- Search, category/price/rating/stock/discount filters, sorting, paging, and grid/list display
- Demo OTP (`123456`), coupon (`WELCOME10`), checkout, and order tracking

Sign-in, order placement, support messages, and tracking are local demonstrations. No OTP, payment, email, or order request is sent to a backend. Product photography and web fonts load from Unsplash and Google Fonts, so those visuals need an internet connection; all page structure and interactions run locally.
