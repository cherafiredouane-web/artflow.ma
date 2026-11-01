import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, Heart, Menu, Search, SlidersHorizontal, X } from "lucide-react";
import artworkData from "./data/artworks.json";
import { categories } from "./data/categories";
import { copy, type Language } from "./i18n/translations";
import { formatPrice, STORE_CONFIG } from "./config/store";

type Artwork = { id: string; titleFr: string; titleAr: string; slug: string; image: string; categories: string[]; dominantColor: string; keywordsFr: string[]; keywordsAr: string[]; aliases: string[]; altFr: string; altAr: string };
const artworks = artworkData as Artwork[];
const colorIds = ["beige", "white", "black", "gray", "brown", "blue", "green", "red", "orange", "yellow", "pink", "purple", "multicolor"] as const;
const colorSwatch: Record<string, string> = { beige:"#c8ac84", white:"#f7f5ee", black:"#26252a", gray:"#92939a", brown:"#76513b", blue:"#3d75b5", green:"#648353", red:"#bf514c", orange:"#d37b3f", yellow:"#d6b650", pink:"#d88caa", purple:"#8059a3", multicolor:"conic-gradient(#e4655b,#e3ba48,#68a878,#5995ca,#9766b5,#e4655b)" };

function normalize(value: string) {
  return value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ؤ/g, "و").replace(/ئ/g, "ي").replace(/ة/g, "ه").replace(/ـ/g, "").replace(/\s+/g, " ").trim();
}
function route() { return decodeURIComponent(location.hash.replace(/^#\/?/, "")); }
function routeTo(path: string) { location.hash = `/${path}`; window.scrollTo({ top: 0, behavior: "smooth" }); }
function whatsappLink(item: Artwork, language: Language) {
  const t = copy[language]; const name = language === "fr" ? item.titleFr : item.titleAr;
  const parts = [`${t.whatsappHello} « ${name} » (${t.whatsappRef} ${item.id}).`];
  if (STORE_CONFIG.productPriceMAD !== null) parts.push(`${t.price}: ${formatPrice(STORE_CONFIG.productPriceMAD, language)}.`);
  if (STORE_CONFIG.productDimensions) parts.push(`${t.dimensions}: ${STORE_CONFIG.productDimensions}.`);
  parts.push(t.whatsappConfirm);
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(parts.join(" "))}`;
}

function App() {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem("artflow-language") === "ar" ? "ar" : "fr");
  const [routePath, setRoutePath] = useState(route);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [sort, setSort] = useState("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(24);
  const t = copy[language];
  const rtl = language === "ar";
  useEffect(() => { const handler = () => { setRoutePath(route()); setMobileMenuOpen(false); setFiltersOpen(false); setVisibleCount(24); }; window.addEventListener("hashchange", handler); return () => window.removeEventListener("hashchange", handler); }, []);
  useEffect(() => { document.documentElement.lang = language; document.documentElement.dir = rtl ? "rtl" : "ltr"; localStorage.setItem("artflow-language", language); }, [language, rtl]);
  useEffect(() => { const item = routePath.startsWith("artwork/") ? artworks.find(a => a.slug === routePath.slice(8)) : undefined; const title = item ? `${rtl ? item.titleAr : item.titleFr} — Artflow` : "Artflow — Tableaux uniques, émotions infinies"; document.title = title; const description = item ? `${rtl ? item.altAr : item.altFr}. ${rtl ? copy.ar.order : copy.fr.order}.` : rtl ? "اكتشف مجموعة آرتفلو من اللوحات الزخرفية." : "Découvrez la collection Artflow : des tableaux décoratifs choisis pour votre intérieur."; document.querySelector('meta[name="description"]')?.setAttribute("content", description); document.querySelector('meta[property="og:title"]')?.setAttribute("content", title); document.querySelector('meta[property="og:description"]')?.setAttribute("content", description); }, [routePath, rtl]);
  useEffect(() => { const keyboard = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.getElementById("catalog-search")?.focus(); } if (event.key === "Escape") { setFiltersOpen(false); setMobileMenuOpen(false); setMenuOpen(false); } }; window.addEventListener("keydown", keyboard); return () => window.removeEventListener("keydown", keyboard); }, []);

  const currentCategory = routePath.startsWith("category/") ? categories.find(c => c.id === routePath.slice(9)) : undefined;
  const detail = routePath.startsWith("artwork/") ? artworks.find(a => a.slug === routePath.slice(8)) : undefined;
  const catalogPage = routePath === "all" || !!currentCategory;
  const filtered = useMemo(() => {
    let items = artworks.filter(item => {
      if (currentCategory && !item.categories.includes(currentCategory.id)) return false;
      if (!currentCategory && categoryFilter && !item.categories.includes(categoryFilter)) return false;
      if (colorFilter && item.dominantColor !== colorFilter) return false;
      if (search) {
        const hay = normalize([item.titleFr, item.titleAr, ...item.keywordsFr, ...item.keywordsAr, ...item.aliases, ...item.categories.flatMap(id => { const c = categories.find(x => x.id === id); return c ? [c.fr, c.ar] : []; })].join(" "));
        if (!hay.includes(normalize(search))) return false;
      }
      return true;
    });
    if (sort === "az") items = [...items].sort((a,b) => a.titleFr.localeCompare(b.titleFr, "fr"));
    if (sort === "za") items = [...items].sort((a,b) => b.titleFr.localeCompare(a.titleFr, "fr"));
    return items;
  }, [currentCategory, categoryFilter, colorFilter, search, sort]);
  const featured = useMemo(() => ["culture marocaine", "nature", "abstrait", "animaux"].map(cat => artworks.find(a => a.categories.includes(cat))).filter(Boolean) as Artwork[], []);
  const clearFilters = () => { setCategoryFilter(""); setColorFilter(""); setSearch(""); setSort("relevance"); };
  const toggleSaved = (id: string) => setSaved(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const setLang = () => setLanguage(language === "fr" ? "ar" : "fr");
  const categoryLabel = (id: string) => { const c = categories.find(x => x.id === id); return c ? (rtl ? c.ar : c.fr) : id; };

  const ProductCard = ({ item, index = 0 }: { item: Artwork; index?: number }) => (
    <article className="product-card" style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}>
      <button className="product-image-link" onClick={() => routeTo(`artwork/${item.slug}`)} aria-label={`${t.view}: ${rtl ? item.titleAr : item.titleFr}`}>
        <img src={`.${item.image}`} alt={rtl ? item.altAr : item.altFr} loading={index < 4 ? "eager" : "lazy"} onError={() => console.warn(`Artflow image failed to load: ${item.image}`)} />
        <span className="image-open"><ArrowUpRight size={18} /></span>
      </button>
      <div className="product-meta">
        <div className="product-heading"><button className="product-title" onClick={() => routeTo(`artwork/${item.slug}`)}>{rtl ? item.titleAr : item.titleFr}</button><button className={`save-button ${saved.includes(item.id) ? "is-saved" : ""}`} aria-label={saved.includes(item.id) ? t.removeFavorite : t.addFavorite} aria-pressed={saved.includes(item.id)} onClick={() => toggleSaved(item.id)}><Heart size={17} fill={saved.includes(item.id) ? "currentColor" : "none"} /></button></div>
        <div className="product-subline"><span>{formatPrice(STORE_CONFIG.productPriceMAD, language)}</span><span className="mini-color" style={{ background: colorSwatch[item.dominantColor] }} title={t.colorNames[item.dominantColor as keyof typeof t.colorNames]} /></div>
        <a className="card-order" href={whatsappLink(item, language)} target="_blank" rel="noreferrer">{t.order}<ArrowUpRight size={14} /></a>
      </div>
    </article>
  );

  const Header = () => <header className="site-header"><div className="header-main"><button className="brand" onClick={() => routeTo("")} aria-label={`Artflow — ${t.home}`}><img src="./artflow-logo.svg" alt="Artflow" /></button><nav className={`desktop-nav ${mobileMenuOpen ? "nav-open" : ""}`} aria-label={t.categories}><button onClick={() => routeTo("")}>{t.home}</button><button onClick={() => routeTo("all")}>{t.all}</button><div className="nav-dropdown-wrap"><button className="nav-dropdown-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{t.categories}<ChevronDown size={15} /></button>{menuOpen && <div className="nav-dropdown">{categories.map(cat => <button key={cat.id} onClick={() => { routeTo(`category/${cat.id}`); setMenuOpen(false); }}>{rtl ? cat.ar : cat.fr}<ArrowUpRight size={14} /></button>)}</div>}</div><button onClick={() => routeTo("about")}>{t.about}</button></nav><div className="header-actions"><button className="language-switch" onClick={setLang} aria-label={t.language}>{language === "fr" ? <><strong>FR</strong><span>|</span><span>العربية</span></> : <><span>FR</span><span>|</span><strong>العربية</strong></>}</button><button className="search-icon" aria-label={t.searchLabel} onClick={() => { routeTo("all"); document.getElementById("catalog-search")?.focus(); }}><Search size={19} /></button><button className="menu-toggle" aria-label={mobileMenuOpen ? t.close : t.menu} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}</button></div></div><div className="header-search"><Search size={16} /><input id="catalog-search" value={search} onChange={e => { setSearch(e.target.value); if (!catalogPage) routeTo("all"); }} placeholder={t.search} aria-label={t.searchLabel} />{search && <button aria-label={t.searchClear} onClick={() => setSearch("")}><X size={15} /></button>}<kbd>Ctrl K</kbd></div></header>;

  const Footer = () => <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><img src="./artflow-logo.svg" alt="Artflow" /><p>{t.footerLine}</p></div><div className="footer-links"><button onClick={() => routeTo("all")}>{t.all}</button>{categories.map(c => <button key={c.id} onClick={() => routeTo(`category/${c.id}`)}>{rtl ? c.ar : c.fr}</button>)}</div><div className="footer-contact"><span>{t.contact}</span><p>{t.contactText}</p><a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer">+212 627 025 271 <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Artflow. {t.rights}</span><span>{t.footerLine}</span></div></footer>;

  const CategoryCards = () => <section className="category-section content-wrap"><div className="section-title-row"><div><span className="eyebrow">{t.noCategories}</span><h2>{t.categories}</h2></div><button className="text-link" onClick={() => routeTo("all")}>{t.viewAll}<ArrowRight size={16} /></button></div><div className="category-grid">{categories.map((cat, i) => { const image = artworks.find(a => a.categories.includes(cat.id)); const count = artworks.filter(a => a.categories.includes(cat.id)).length; return <button className="category-card" key={cat.id} onClick={() => routeTo(`category/${cat.id}`)}><span className="category-index">0{i+1}</span>{image && <img src={`.${image.image}`} alt="" loading="lazy" />}<span className="category-info"><strong>{rtl ? cat.ar : cat.fr}</strong><small>{count} {t.results}</small></span><ArrowUpRight className="category-arrow" size={17} /></button>; })}</div></section>;

  const FilterPanel = ({ mobile = false }: { mobile?: boolean }) => <div className={`filter-panel ${mobile ? "filter-mobile" : ""} ${filtersOpen ? "filters-open" : ""}`}>
    <div className="filter-top"><span>{t.filters}</span><button onClick={() => setFiltersOpen(false)} aria-label={t.closeFilters}><X size={18} /></button></div>
    {!currentCategory && <label className="filter-field"><span>{t.category}</span><select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}><option value="">{t.allCategories}</option>{categories.map(c => <option value={c.id} key={c.id}>{rtl ? c.ar : c.fr}</option>)}</select></label>}
    <fieldset className="color-field"><legend>{t.color}</legend><div className="color-options">{colorIds.filter(color => artworks.some(a => a.dominantColor === color)).map(color => <button key={color} className={`color-option ${colorFilter === color ? "selected" : ""}`} onClick={() => setColorFilter(colorFilter === color ? "" : color)} aria-pressed={colorFilter === color}><i style={{ background: colorSwatch[color] }} />{t.colorNames[color as keyof typeof t.colorNames]}{colorFilter === color && <Check size={15} />}</button>)}</div></fieldset>
    <label className="filter-field"><span>{t.sort}</span><select value={sort} onChange={e => setSort(e.target.value)}><option value="relevance">{t.relevance}</option><option value="az">{t.az}</option><option value="za">{t.za}</option></select></label>
    <button className="clear-filters" onClick={clearFilters}>{t.clear}</button><button className="apply-filters" onClick={() => setFiltersOpen(false)}>{t.apply}<ArrowRight size={16} /></button>
  </div>;

  const Catalog = () => <main className="catalog-page content-wrap"><div className="breadcrumbs"><button onClick={() => routeTo("")}>{t.home}</button><span>/</span><span>{currentCategory ? (rtl ? currentCategory.ar : currentCategory.fr) : t.all}</span></div><div className="catalog-heading"><div><span className="eyebrow">{t.collection}</span><h1>{currentCategory ? (rtl ? currentCategory.ar : currentCategory.fr) : t.all}</h1>{currentCategory && <p>{rtl ? currentCategory.descriptionAr : currentCategory.descriptionFr}</p>}</div><span className="catalog-count">{filtered.length} {filtered.length === 1 ? t.result : t.results}</span></div><div className="catalog-toolbar"><button className="filter-trigger" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={17} />{t.filter}<span>{[categoryFilter,colorFilter].filter(Boolean).length}</span></button><div className="toolbar-search"><Search size={16} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search} aria-label={t.searchLabel} />{search && <button aria-label={t.searchClear} onClick={() => setSearch("")}><X size={15} /></button>}</div><label className="sort-inline"><span>{t.sort}</span><select value={sort} onChange={e => setSort(e.target.value)}><option value="relevance">{t.relevance}</option><option value="az">{t.az}</option><option value="za">{t.za}</option></select></label></div>
      {(colorFilter || categoryFilter || search) && <div className="active-filters"><span>{t.active}:</span>{search && <button onClick={() => setSearch("")}>{search}<X size={13} /></button>}{categoryFilter && <button onClick={() => setCategoryFilter("")}>{categoryLabel(categoryFilter)}<X size={13} /></button>}{colorFilter && <button onClick={() => setColorFilter("")}>{t.colorNames[colorFilter as keyof typeof t.colorNames]}<X size={13} /></button>}<button className="clear-chip" onClick={clearFilters}>{t.clear}</button></div>}
      <div className="catalog-layout"><aside className="desktop-filter"><FilterPanel /></aside><div className="catalog-results">{filtered.length ? <><div className="product-grid">{filtered.slice(0,visibleCount).map((item,i)=><ProductCard item={item} index={i} key={item.id} />)}</div>{filtered.length>visibleCount && <button className="load-more" onClick={() => setVisibleCount(n=>n+24)}>{t.showMore}<ArrowDown size={16} /></button>}</> : <div className="empty-state"><span className="empty-mark">✳</span><h2>{t.noResults}</h2><p>{t.noResultsHint}</p><button className="button-primary" onClick={clearFilters}>{t.reset}</button></div>}</div></div>
      {filtersOpen && <div className="filter-backdrop" onClick={() => setFiltersOpen(false)}><div onClick={e => e.stopPropagation()}><FilterPanel mobile /></div></div>}
    </main>;

  const Home = () => <main><section className="hero content-wrap"><div className="hero-copy"><span className="eyebrow hero-eyebrow"><i />{t.heroEyebrow}</span><h1>{t.heroTitle.split("\n").map((line,i)=><span key={line}>{line}{i===0&&<br/>}</span>)}</h1><p>{t.heroText}</p><div className="hero-actions"><button className="button-primary" onClick={() => routeTo("all")}>{t.explore}<ArrowRight size={17} /></button><button className="hero-secondary" onClick={() => routeTo("all")}>{t.viewAll}<ArrowDown size={15} /></button></div><div className="hero-note"><span className="note-stars">✳ ✳ ✳</span><span>Artflow <i>·</i> {rtl ? "المغرب" : "Maroc"}</span></div></div><div className="hero-art"><div className="hero-art-main"><img src={`.${featured[0]?.image}`} alt={rtl ? featured[0]?.altAr : featured[0]?.altFr} fetchPriority="high" /></div><div className="hero-art-side"><img src={`.${featured[1]?.image}`} alt="" /><img src={`.${featured[2]?.image}`} alt="" /></div><div className="hero-caption"><span>01 / 0{featured.length}</span><span>{rtl ? featured[0]?.titleAr : featured[0]?.titleFr}</span></div><span className="hero-spark">✳</span></div></section><div className="home-intro content-wrap"><span className="eyebrow">{t.collection}</span><p>{t.homeNote}</p><button className="text-link" onClick={() => routeTo("all")}>{t.discover}<ArrowRight size={16} /></button></div><CategoryCards /><section className="featured-section content-wrap"><div className="section-title-row"><div><span className="eyebrow">{t.homeSelection}</span><h2>{t.homesub}</h2></div><button className="text-link" onClick={() => routeTo("all")}>{t.viewAll}<ArrowRight size={16} /></button></div><div className="product-grid home-grid">{featured.map((item,i)=><ProductCard item={item} index={i} key={item.id} />)}</div></section><section className="about-band"><div className="about-inner content-wrap"><span className="eyebrow">Artflow</span><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><button className="text-link" onClick={() => routeTo("about")}>{t.about}<ArrowRight size={16} /></button></div></section></main>;

  const Detail = () => { if (!detail) return <main className="not-found content-wrap"><h1>{t.notFound}</h1><button className="button-primary" onClick={() => routeTo("all")}>{t.back}</button></main>; const related = artworks.filter(a => a.id !== detail.id && a.categories.some(c => detail.categories.includes(c))).slice(0,4); return <main className="detail-page content-wrap"><div className="breadcrumbs"><button onClick={() => routeTo("")}>{t.home}</button><span>/</span><button onClick={() => routeTo("all")}>{t.all}</button><span>/</span><span>{rtl ? detail.titleAr : detail.titleFr}</span></div><div className="detail-layout"><div className="detail-image"><img src={`.${detail.image}`} alt={rtl ? detail.altAr : detail.altFr} fetchPriority="high" onError={() => console.warn(`Artflow image failed to load: ${detail.image}`)} /></div><div className="detail-info"><span className="eyebrow">{t.details}</span><h1>{rtl ? detail.titleAr : detail.titleFr}</h1><div className="detail-price">{formatPrice(STORE_CONFIG.productPriceMAD,language)}</div><p className="detail-desc">{t.detailText}</p><div className="detail-facts"><div><span>{t.categoryLabel}</span><div className="category-tags">{detail.categories.map(c=><button key={c} onClick={() => routeTo(`category/${c}`)}>{categoryLabel(c)}</button>)}</div></div><div><span>{t.dominant}</span><strong className="detail-color"><i style={{background:colorSwatch[detail.dominantColor]}} />{t.colorNames[detail.dominantColor as keyof typeof t.colorNames]}</strong></div>{STORE_CONFIG.productDimensions && <div><span>{t.dimensions}</span><strong>{STORE_CONFIG.productDimensions}</strong></div>}</div><a className="button-primary order-button" href={whatsappLink(detail,language)} target="_blank" rel="noreferrer">{t.order}<ArrowUpRight size={18} /></a><button className="detail-back" onClick={() => routeTo("all")}><ArrowLeft size={15}/>{t.back}</button><div className="detail-code">{detail.id}</div></div></div>{related.length>0&&<section className="related-section"><div className="section-title-row"><div><span className="eyebrow">{t.homeSelection}</span><h2>{t.categories}</h2></div></div><div className="product-grid">{related.map((item,i)=><ProductCard key={item.id} item={item} index={i}/>)}</div></section>}</main> };

  const About = () => <main className="about-page content-wrap"><span className="eyebrow">Artflow · Maroc</span><h1>{t.aboutTitle}</h1><p>{t.aboutText}</p><div className="about-divider"/><h2>{t.contact}</h2><p>{t.contactText}</p><a className="button-primary" href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer">+212 627 025 271<ArrowUpRight size={17}/></a></main>;

  return <div className={`app-shell ${rtl ? "rtl" : ""}`}><Header />{routePath.startsWith("artwork/") ? <Detail /> : catalogPage ? <Catalog /> : routePath === "about" ? <About /> : routePath === "" ? <Home /> : <main className="not-found content-wrap"><h1>{t.pageNotFound}</h1><button className="button-primary" onClick={() => routeTo("")}>{t.home}</button></main>}<Footer /></div>;
}

export default App;
