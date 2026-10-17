module.exports = [
(()=>{"use strict";return[
"[project]/components/cart-drawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartDrawer",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/furniture-products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/commerce-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function CartDrawer() {
    const drawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.drawer);
    const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.cart);
    const changeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.changeCart);
    const setDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.setDrawer);
    const cartItems = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((product)=>cart[product.id]);
    const cartCount = Object.values(cart).reduce((sum, count)=>sum + count, 0);
    const total = cartItems.reduce((sum, product)=>sum + product.price * cart[product.id], 0);
    if (drawer !== "cart") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex justify-end bg-ink/40",
        onClick: ()=>setDrawer(null),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "flex h-full w-full max-w-[460px] flex-col bg-paper p-7",
            onClick: (event)=>event.stopPropagation(),
            "aria-label": "Votre panier",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-line pb-5 text-sm font-semibold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Votre panier"
                        }, void 0, false, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 21,
                            columnNumber: 108
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "grid h-[30px] w-[30px] place-items-center",
                            onClick: ()=>setDrawer(null),
                            "aria-label": "Fermer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 21,
                                columnNumber: 247
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 21,
                            columnNumber: 133
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cart-drawer.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "m-auto text-center text-xs leading-7 text-[#77746c]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Votre panier attend sa première pièce."
                        }, void 0, false, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 22,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "border-b border-[#99958b] py-2 text-[9px] font-semibold uppercase tracking-[.1em]",
                            href: "/products",
                            onClick: ()=>setDrawer(null),
                            children: "Découvrir les collections ↗"
                        }, void 0, false, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 22,
                            columnNumber: 149
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cart-drawer.tsx",
                    lineNumber: 22,
                    columnNumber: 35
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto",
                    children: cartItems.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-[95px_1fr] gap-4 border-b border-line py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "h-[104px] w-[95px] object-cover",
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["photo"])(product.image, 220),
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 mt-1 text-[13px] font-medium",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/cart-drawer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "m-0 text-[11px] text-[#77746c]",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(product.price)
                                        }, void 0, false, {
                                            fileName: "[project]/components/cart-drawer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 85
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex w-[85px] items-center justify-between border border-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "grid h-6 w-[26px] place-items-center",
                                                    onClick: ()=>changeCart(product.id, -1),
                                                    "aria-label": "Retirer un article",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cart-drawer.tsx",
                                                        lineNumber: 24,
                                                        columnNumber: 373
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 241
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px]",
                                                    children: cart[product.id]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 401
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "grid h-6 w-[26px] place-items-center",
                                                    onClick: ()=>changeCart(product.id, 1),
                                                    "aria-label": "Ajouter un article",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cart-drawer.tsx",
                                                        lineNumber: 24,
                                                        columnNumber: 587
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 456
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/cart-drawer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 157
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, product.id, true, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 22,
                            columnNumber: 401
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/cart-drawer.tsx",
                    lineNumber: 22,
                    columnNumber: 335
                }, this),
                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-line pt-[18px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-[18px] flex justify-between text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Sous-total"
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 131
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(total)
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 154
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 26,
                            columnNumber: 75
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex h-12 w-full items-center justify-center gap-3 bg-ink text-[9px] uppercase tracking-[.1em] text-white",
                            onClick: ()=>setDrawer(null),
                            children: [
                                "Continuer mes achats ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 370
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 26,
                            columnNumber: 191
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "mt-2 block text-center text-[9px] text-[#8c8981]",
                            children: "Livraison calculée à l’étape suivante."
                        }, void 0, false, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 26,
                            columnNumber: 403
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cart-drawer.tsx",
                    lineNumber: 26,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/cart-drawer.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cart-drawer.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/commerce-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommerceShell",
    ()=>CommerceShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/furniture-products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/commerce-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cart-drawer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CommerceShell() {
    const drawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.drawer);
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.query);
    const favorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.favorites);
    const setDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.setDrawer);
    const setQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.setQuery);
    const changeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$commerce$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommerceStore"])((state)=>state.changeCart);
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((product)=>product.name.toLowerCase().includes(query.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartDrawer"], {}, void 0, false, {
                fileName: "[project]/components/commerce-shell.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            (drawer === "menu" || drawer === "search" || drawer === "wishlist") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 flex ${drawer === "menu" ? "justify-start" : "justify-end"} bg-ink/40 animate-in fade-in duration-300 motion-reduce:animate-none`,
                onClick: ()=>setDrawer(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: `flex h-full w-full flex-col bg-paper p-7 ${drawer === "menu" ? "max-w-[520px] animate-in slide-in-from-left duration-500 ease-out motion-reduce:animate-none" : "max-w-[460px] animate-in slide-in-from-right duration-300 ease-out motion-reduce:animate-none"}`,
                    onClick: (event)=>event.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-line pb-5 text-sm font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: drawer === "wishlist" ? "Vos favoris" : drawer === "search" ? "Rechercher" : "Explorer"
                                }, void 0, false, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 22,
                                    columnNumber: 110
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "grid h-[30px] w-[30px] place-items-center",
                                    onClick: ()=>setDrawer(null),
                                    "aria-label": "Fermer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/commerce-shell.tsx",
                                        lineNumber: 22,
                                        columnNumber: 326
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 22,
                                    columnNumber: 212
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/commerce-shell.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        drawer === "menu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "pt-12",
                            children: [
                                [
                                    "Collections",
                                    "/products"
                                ],
                                [
                                    "Notre maison",
                                    "/#histoire"
                                ],
                                [
                                    "Le journal",
                                    "/#newsletter"
                                ]
                            ].map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "flex items-center justify-between border-b border-line py-5 text-[clamp(25px,6vw,43px)] tracking-[-.05em]",
                                    href: href,
                                    onClick: ()=>setDrawer(null),
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/commerce-shell.tsx",
                                            lineNumber: 23,
                                            columnNumber: 359
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 23,
                                    columnNumber: 175
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/commerce-shell.tsx",
                            lineNumber: 23,
                            columnNumber: 33
                        }, this),
                        drawer === "search" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 border-b border-ink py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 24,
                                    columnNumber: 101
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "w-full border-0 bg-transparent text-[13px] outline-none placeholder:text-muted",
                                    autoFocus: true,
                                    placeholder: "Canapé, matelas…",
                                    value: query,
                                    onChange: (event)=>setQuery(event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 24,
                                    columnNumber: 121
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/commerce-shell.tsx",
                            lineNumber: 24,
                            columnNumber: 35
                        }, this),
                        drawer === "wishlist" && (favorites.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "m-auto text-center text-xs leading-7 text-[#77746c]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Les pièces que vous aimez apparaîtront ici."
                                }, void 0, false, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 25,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "border-b border-[#99958b] py-2 text-[9px] font-semibold uppercase tracking-[.1em]",
                                    href: "/products",
                                    onClick: ()=>setDrawer(null),
                                    children: "Explorer la collection ↗"
                                }, void 0, false, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 25,
                                    columnNumber: 182
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/commerce-shell.tsx",
                            lineNumber: 25,
                            columnNumber: 63
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((product)=>favorites.includes(product.id)).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-[95px_1fr] gap-4 border-b border-line py-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "h-[104px] w-[95px] object-cover",
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["photo"])(product.image, 220),
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/commerce-shell.tsx",
                                            lineNumber: 25,
                                            columnNumber: 574
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-2 mt-1 text-[13px] font-medium",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/commerce-shell.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 669
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "m-0 text-[11px] text-[#77746c]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(product.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/commerce-shell.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 738
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "mt-3 inline-block border-b border-[#99958b] pb-1 text-[9px] uppercase",
                                                    href: "/favorites",
                                                    onClick: ()=>setDrawer(null),
                                                    children: "Voir mes favoris"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/commerce-shell.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 810
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/commerce-shell.tsx",
                                            lineNumber: 25,
                                            columnNumber: 664
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 25,
                                    columnNumber: 482
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/commerce-shell.tsx",
                            lineNumber: 25,
                            columnNumber: 365
                        }, this)),
                        drawer === "search" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto",
                            children: [
                                items.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-[95px_1fr] gap-4 border-b border-line py-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "h-[104px] w-[95px] object-cover",
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["photo"])(product.image, 220),
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/commerce-shell.tsx",
                                                lineNumber: 26,
                                                columnNumber: 189
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mb-2 mt-1 text-[13px] font-medium",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/commerce-shell.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 284
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "m-0 text-[11px] text-[#77746c]",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$furniture$2d$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(product.price)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/commerce-shell.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 353
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "mt-3 border-b border-[#99958b] pb-1 text-[9px] uppercase",
                                                        onClick: ()=>{
                                                            changeCart(product.id, 1);
                                                            setDrawer("cart");
                                                        },
                                                        children: "Ajouter au panier +"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/commerce-shell.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 425
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/commerce-shell.tsx",
                                                lineNumber: 26,
                                                columnNumber: 279
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/components/commerce-shell.tsx",
                                        lineNumber: 26,
                                        columnNumber: 97
                                    }, this)),
                                items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "m-auto text-center text-xs text-[#77746c]",
                                    children: [
                                        "Aucun résultat pour « ",
                                        query,
                                        " »."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/commerce-shell.tsx",
                                    lineNumber: 26,
                                    columnNumber: 633
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/commerce-shell.tsx",
                            lineNumber: 26,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/commerce-shell.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/commerce-shell.tsx",
                lineNumber: 20,
                columnNumber: 79
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/commerce-shell.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/lenis-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LenisProvider",
    ()=>LenisProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function LenisProvider({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            autoRaf: true,
            anchors: true,
            allowNestedScroll: true
        });
        return ()=>lenis.destroy();
    }, []);
    return children;
}
}),
"[project]/components/motion-director.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionDirector",
    ()=>MotionDirector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function MotionDirector() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        document.documentElement.classList.add("motion-ready");
        const heroItems = document.querySelectorAll("[data-hero-motion]");
        heroItems.forEach((item, index)=>{
            const isImage = item.hasAttribute("data-hero-image");
            item.animate(isImage ? [
                {
                    opacity: 0,
                    scale: 1.07,
                    clipPath: "polygon(18% 0, 100% 0, 100% 84%, 82% 100%, 0 100%, 0 16%)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    clipPath: "polygon(10% 0, 100% 0, 100% 88%, 90% 100%, 0 100%, 0 12%)"
                }
            ] : [
                {
                    opacity: 0,
                    translate: "0 24px"
                },
                {
                    opacity: 1,
                    translate: "0 0"
                }
            ], {
                duration: isImage ? 1300 : 850,
                delay: isImage ? 180 : 120 + index * 130,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "both"
            });
        });
        document.querySelectorAll("[data-marquee]").forEach((marquee)=>{
            marquee.animate([
                {
                    transform: "translateX(0)"
                },
                {
                    transform: "translateX(-33.333%)"
                }
            ], {
                duration: Number(marquee.dataset.marqueeDuration) || 30000,
                iterations: Infinity,
                easing: "linear"
            });
        });
        const sections = document.querySelectorAll("[data-scroll-reveal]");
        const parallaxItems = document.querySelectorAll("[data-hero-parallax]");
        let scrollFrame = 0;
        const updateParallax = ()=>{
            cancelAnimationFrame(scrollFrame);
            scrollFrame = requestAnimationFrame(()=>{
                const scrollDistance = Math.min(window.scrollY, window.innerHeight);
                parallaxItems.forEach((item)=>{
                    const speed = Number(item.dataset.heroParallax) || 0;
                    item.style.transform = `translate3d(0, ${-scrollDistance * speed}px, 0)`;
                });
            });
        };
        const observer = new IntersectionObserver((entries, activeObserver)=>{
            entries.forEach((entry)=>{
                if (!entry.isIntersecting) return;
                const element = entry.target;
                element.dataset.revealVisible = "true";
                element.animate([
                    {
                        opacity: 0,
                        translate: "0 18px"
                    },
                    {
                        opacity: 1,
                        translate: "0 0"
                    }
                ], {
                    duration: 620,
                    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                    fill: "both"
                });
                const targets = Array.from(element.children).filter((child)=>child instanceof HTMLElement);
                (targets.length ? targets : [
                    element
                ]).forEach((target, index)=>{
                    target.animate([
                        {
                            opacity: 0,
                            translate: "0 24px",
                            filter: "blur(3px)"
                        },
                        {
                            opacity: 1,
                            translate: "0 0",
                            filter: "blur(0)"
                        }
                    ], {
                        duration: 760,
                        delay: Math.min(index * 110, 330),
                        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                        fill: "both"
                    });
                });
                activeObserver.unobserve(element);
            });
        }, {
            threshold: 0.08,
            rootMargin: "0px 0px -5% 0px"
        });
        sections.forEach((section)=>observer.observe(section));
        window.addEventListener("scroll", updateParallax, {
            passive: true
        });
        updateParallax();
        return ()=>{
            document.documentElement.classList.remove("motion-ready");
            observer.disconnect();
            window.removeEventListener("scroll", updateParallax);
            cancelAnimationFrame(scrollFrame);
        };
    }, []);
    return null;
}
}),
"[project]/data/furniture-products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "armchairImage",
    ()=>armchairImage,
    "money",
    ()=>money,
    "photo",
    ()=>photo,
    "products",
    ()=>products,
    "rugImage",
    ()=>rugImage,
    "sofaImage",
    ()=>sofaImage
]);
const rugImage = "photo-1595595183083-d40937b04cf3";
const sofaImage = "photo-1760611656185-57a618917619";
const armchairImage = "photo-1770316320132-e082373dd3f6";
const products = [
    {
        id: "canape-nuage",
        name: "Canapé Nuage",
        detail: "Tissu bouclé · Écru",
        price: 12900,
        category: "Canapés",
        image: sofaImage,
        description: "A generous, softly sculpted sofa designed for slow mornings and long evenings. Its textured boucle upholstery and relaxed proportions bring an easy warmth to the living room."
    },
    {
        id: "matelas-serein",
        name: "Matelas Serein",
        detail: "Ressorts ensachés · 160 × 200",
        price: 500,
        category: "Matelas",
        image: "photo-1631679706909-1844bbd07221",
        description: "A calm, supportive foundation for better rest. Individually wrapped springs adapt to your movement, while the breathable finish keeps the bed feeling fresh through the night."
    },
    {
        id: "tapis-berbere",
        name: "Tapis Berbère",
        detail: "Laine tissée · Écru",
        price: 3200,
        category: "Tapis",
        image: rugImage,
        description: "A handwoven wool rug with a soft natural texture, bringing warmth and a grounded feel to the living room."
    },
    {
        id: "fauteuil-ligne",
        name: "Fauteuil Ligne",
        detail: "Chêne massif · Laine naturelle",
        price: 4850,
        category: "Fauteuils",
        image: armchairImage,
        description: "A considered balance of solid oak and natural wool. Ligne brings a quiet architectural presence to a reading corner, bedroom, or the space beside your favorite window."
    }
];
function photo(id, width = 1200) {
    return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}
function money(amount) {
    return new Intl.NumberFormat("fr-MA").format(amount) + " DH";
}
}),
"[project]/lib/commerce-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCommerceStore",
    ()=>useCommerceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
"use client";
;
const useCommerceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        cart: {},
        favorites: [],
        category: "Tout voir",
        drawer: null,
        query: "",
        setDrawer: (drawer)=>set({
                drawer
            }),
        setQuery: (query)=>set({
                query
            }),
        setCategory: (category)=>set({
                category
            }),
        changeCart: (id, amount)=>set((state)=>{
                const count = Math.max(0, (state.cart[id] || 0) + amount);
                const cart = {
                    ...state.cart
                };
                if (count === 0) delete cart[id];
                else cart[id] = count;
                return {
                    cart
                };
            }),
        toggleFavorite: (id)=>set((state)=>({
                    favorites: state.favorites.includes(id) ? state.favorites.filter((favorite)=>favorite !== id) : [
                        ...state.favorites,
                        id
                    ]
                }))
    }));
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12w6nmfnr-aq1._.js.map