(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/about-us/history/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>History)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function History() {
    _s();
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shrink, setShrink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const historyData = [
        {
            title: "Origins and Establishment",
            content: "The Sri Venkataramana Temple, located in Carstreet, Mangalore, stands as a spiritual and cultural beacon for the Gowd Saraswat Brahmin (G.S.B) community. Established in the 17th century, the temple has grown into a sacred place attracting thousands of devotees, especially during its grand annual Car Festival celebrated from Magha Shudda Tadige to Ashtami."
        },
        {
            title: "Madhwa Vaishnava Tradition",
            content: "The temple follows the Madhwa Vaishnava tradition established by Sri Madhwacharya, revering Lord Vishnu as the supreme deity. Here, Lord Venkataramana—an incarnation of Vishnu—is worshipped as the presiding deity."
        },
        {
            title: "Historical Idols and Installations",
            content: "Historical records trace the installation of the original idol, Sri Moola Venkataramana Devaru, back to the mid-1600s. Later, in 1736, bronze idols of Sri Veera Vittala and Sri Gopalakrishna were consecrated by Sri Sowkar Mhal Pai. The temple’s most significant moment came in 1804 with the consecration of the main idol of Lord Veera Venkatesha Swamy."
        },
        {
            title: "The Bairagi Legend",
            content: "Two well-known legends describe how this idol was acquired. In the more accepted account, a Bairagi (recluse) pawned a sack containing the idol at the shop of Sowkar Thimmappa Pai. When mysterious fumes later emerged from the sack, the idol was discovered and, upon consultation with H.H. Shrimad Vibhudhendra Thirtha Swamiji of Sri Kashi Math Samsthan, it was consecrated in the temple for worship by the G.S.B community."
        },
        {
            title: "Expansion of Deities",
            content: "Over the years, the temple expanded to include idols of Sri Veera Vittala Devaru, Sri Srinivasa Devaru, Sri Gopalakrishna, Sri Hayagriva, and Sri Naga Devaru, among others. The shrines of Sri Mukhyaprana and Sri Garuda Devaru were added in the same era."
        },
        {
            title: "Major Milestones and Additions",
            content: "Milestones in the temple’s journey include the visit of H.H. Shrimad Sumathindra Thirtha Swamiji in 1821, installation of a Navaratna crown in 1878, introduction of the Silver Lalkhi in 1888, and the consecration of Sri Lakshmi Devi and Sri Ganapathi Devaru in the late 19th century. Major structural additions like the Sanna Ratha (1909), Silver Dhwajasthambha (1966), and the Diamond Crown (1977) marked its continued growth."
        },
        {
            title: "Modern Renovation (Jeernodhara)",
            content: "In 2011, a major renovation (Jeernodhara) began. The reinstallation of the deities took place on 16 January 2012 under the guidance of the Ubhaya Guruvaryas of Sri Kashi Math Samsthan. The temple continues to stand as a symbol of devotion, history, and heritage."
        }
    ];
    const smoothScrollTo = (target, duration = 2500)=>{
        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + start;
        const distance = end - start;
        const startTime = performance.now();
        const animate = (currentTime)=>{
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + distance * easeInOutCubic(progress));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        const easeInOutCubic = (t)=>t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        requestAnimationFrame(animate);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "History.useEffect": ()=>{
            if (imageRef.current) {
                smoothScrollTo(imageRef.current, 2000);
            }
            const timer = setTimeout({
                "History.useEffect.timer": ()=>{
                    setShrink(true);
                    if (textRef.current) {
                        smoothScrollTo(textRef.current, 2000);
                    }
                }
            }["History.useEffect.timer"], 2750);
            return ({
                "History.useEffect": ()=>clearTimeout(timer)
            })["History.useEffect"];
        }
    }["History.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "History.useEffect": ()=>{
            const handleScroll = {
                "History.useEffect.handleScroll": ()=>{
                    if (!imageRef.current) return;
                    const imageTop = imageRef.current.getBoundingClientRect().top;
                    if (imageTop >= 0 && imageTop <= window.innerHeight / 2) {
                        setShrink(false);
                    }
                }
            }["History.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "History.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["History.useEffect"];
        }
    }["History.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FFF9E5] flex flex-col items-center justify-center py-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full flex justify-center transition-transform duration-1000 ease-in-out ${shrink ? "scale-75" : "scale-100"}`,
                ref: imageRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/img1.jpg",
                    alt: "Temple",
                    className: "w-full max-w-3xl h-auto rounded-2xl shadow-2xl mb-10"
                }, void 0, false, {
                    fileName: "[project]/src/app/about-us/history/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about-us/history/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-3xl bg-white rounded-3xl shadow-xl px-6 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: textRef,
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold text-red-900 mb-12 text-center font-serif",
                            children: "Temple History"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-us/history/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-8",
                            children: historyData.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#FFF9E5] border border-yellow-200 shadow-md rounded-xl px-6 py-6 transition-transform duration-300 hover:scale-[1.015]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-semibold text-red-700 mb-3 font-serif",
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about-us/history/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-gray-800 font-serif leading-relaxed tracking-wide",
                                            children: section.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about-us/history/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/app/about-us/history/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-us/history/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about-us/history/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about-us/history/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about-us/history/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(History, "Mv0S5/vcbyFTl6sr1StL8zCk1dc=");
_c = History;
var _c;
__turbopack_context__.k.register(_c, "History");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_about-us_history_page_tsx_a96a747e._.js.map