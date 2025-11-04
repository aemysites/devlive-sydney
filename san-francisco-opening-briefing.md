# San Francisco Opening Announcement - Page Briefing

**Project:** WKND Trendsetters San Francisco Location Launch  
**Page Type:** Announcement Landing Page  
**Target Platform:** AEM EDS (Edge Delivery Services) with Experience Catalyst  
**Migration Goal:** Pixel-perfect design reproduction from existing site  
**Date Created:** November 4, 2025  
**Status:** Ready for Development

---

## Executive Summary

This briefing outlines the content, structure, and technical requirements for creating a new announcement page for WKND Trendsetters' San Francisco location opening. The page will be migrated to AEM EDS using Experience Catalyst, maintaining pixel-perfect fidelity to the existing site's design system while leveraging EDS blocks for optimal performance.

---

## Page Objectives

### Primary Goals
1. Announce the new San Francisco flagship location opening
2. Drive in-store visits and event registrations for opening week
3. Showcase the unique SF store experience and local partnerships
4. Maintain brand consistency with existing WKND Trendsetters design
5. Achieve optimal Core Web Vitals scores through EDS implementation

### Success Metrics
- Page load time: < 1.5 seconds
- Lighthouse score: 95+ across all categories
- Conversion rate: 15%+ for opening event registration
- Engagement: 3+ minutes average time on page
- Mobile responsiveness: Perfect rendering across all devices

---

## Brand Alignment

### Voice & Tone
- **Tone:** Inspiring, confident, authentic, accessible
- **Audience:** Millennials and Gen Z (25-40) in San Francisco Bay Area
- **Local Focus:** Emphasize San Francisco's unique culture, sustainability values, and style scene
- **Energy Level:** Exciting and celebratory while maintaining brand sophistication

### Core Values to Highlight
- Sustainability and conscious consumption
- Local community connections
- Authentic self-expression through style
- Quality and craftsmanship
- San Francisco's cultural heritage

---

## Content Structure & EDS Blocks

### Hero Section (Block: Hero)

**Block Type:** `hero`

**Content:**
- **Headline:** "San Francisco, Your Style Story Starts Here"
- **Subheadline:** "Discover our newest flagship at 1847 Market Street. Where the City's creative spirit meets conscious fashion."
- **Opening Date:** "Grand Opening: December 15, 2025"
- **CTA Primary:** "RSVP for Opening Event"
- **CTA Secondary:** "Explore the Space"

**Visual Elements:**
- Hero image: Wide shot of SF store exterior with city skyline backdrop
- Image should showcase: Sustainable architecture, large windows, Bay Bridge visible
- Overlay: Subtle gradient (40% opacity) for text readability
- Typography: Hero headline in brand primary font (72px desktop, 48px mobile)

**Design Specifications:**
- Height: 85vh on desktop, 70vh on mobile
- Text alignment: Center
- Button style: Primary CTA (solid) + Secondary CTA (outline)
- Background: Fixed parallax scroll effect (maintain existing site behavior)
- Mobile: Stack buttons vertically with 16px spacing

---

### Announcement Details Section (Block: Columns)

**Block Type:** `columns` (3-column layout)

**Content:**

**Column 1: Location**
- Icon: Map pin
- Title: "Find Us"
- Body: "1847 Market Street, San Francisco, CA 94103"
- Detail: "In the heart of Hayes Valley, steps from public transit"
- Link: "Get Directions"

**Column 2: Opening Week**
- Icon: Calendar
- Title: "Celebrate With Us"
- Body: "December 15-21, 2025"
- Detail: "Special events daily, exclusive previews, local designer showcases"
- Link: "View Schedule"

**Column 3: Store Hours**
- Icon: Clock
- Title: "Visit Anytime"
- Body: "Monday-Saturday: 10am-8pm, Sunday: 11am-7pm"
- Detail: "Extended hours during opening week"
- Link: "Plan Your Visit"

**Design Specifications:**
- Desktop: 3 equal columns (33.33% each) with 40px gutters
- Mobile: Stack vertically with 32px spacing
- Icons: 48px × 48px, brand primary color
- Typography: Title (24px), Body (16px), Detail (14px)
- Hover state: Scale icon 1.1x, add subtle shadow
- Background: Light gray (#F8F8F8) with 80px padding top/bottom

---

### Story Section (Block: Media + Text)

**Block Type:** `media-text`

**Content:**
- **Headline:** "A Space Designed for San Francisco"
- **Body Copy:**
"Our San Francisco flagship isn't just a store—it's a celebration of the City's creative soul. Designed by local architects Studio Pacific, the space honors the building's 1920s heritage while embracing modern sustainability. Every detail reflects San Francisco's values: reclaimed redwood fixtures from the old Presidio, energy-efficient systems that cut our carbon footprint by 60%, and a community events space where local artists, designers, and changemakers can gather.

This is where the Bay Area's fashion-forward meet earth-conscious shoppers. Where you'll find cutting-edge sustainable brands alongside classic pieces built to last. Where personal style consultations are free, alterations are done on-site, and every purchase supports local makers.

We've partnered with 15 Bay Area designers to create exclusive pieces you'll only find here. From Outer Sunset surf-inspired casualwear to Mission District streetwear with a conscience, this collection is San Francisco through and through."

- **Image:** Interior shot showing reclaimed wood features, natural light, clothing displays
- **Image Caption:** "Sustainable design meets California cool"

**Design Specifications:**
- Layout: Image 50% left, text 50% right (desktop)
- Image: Full-bleed, aspect ratio 3:2
- Text padding: 80px all sides on desktop, 40px on mobile
- Typography: Headline 48px, Body 18px with 1.7 line-height
- Mobile: Image stacks above text
- Background: White
- Section padding: 120px top/bottom desktop, 60px mobile

---

### Local Partnership Showcase (Block: Cards)

**Block Type:** `cards` (grid layout)

**Headline:** "Curated by SF, For SF"
**Subheadline:** "Exclusive collaborations with Bay Area designers and makers"

**Card 1: Ocean Beach Textiles**
- Image: Textile pattern detail
- Designer: "Marina Chen"
- Description: "Hand-dyed organic cotton pieces inspired by Outer Sunset fog patterns"
- Badge: "SF Exclusive"

**Card 2: Mission Made Leather**
- Image: Leather goods detail
- Designer: "Carlos Rodriguez"
- Description: "Upcycled leather accessories crafted from reclaimed materials"
- Badge: "SF Exclusive"

**Card 3: Golden Gate Knits**
- Image: Knitwear detail
- Designer: "Sophia Williams"
- Description: "Luxe cashmere blends in colors inspired by the Golden Gate Bridge"
- Badge: "SF Exclusive"

**Card 4: Bay Basics Co.**
- Image: Sustainable basics
- Designer: "Alex Tanaka"
- Description: "Essential pieces made from recycled ocean plastics"
- Badge: "SF Exclusive"

**Design Specifications:**
- Desktop: 4 cards in row, 32px gutters
- Mobile: 2 cards per row, 16px gutters
- Card image: 4:5 aspect ratio
- Card padding: 20px
- Badge: Top-right corner overlay, brand accent color
- Hover: Slight lift effect (translateY -4px) with shadow
- Typography: Designer name 16px bold, Description 14px
- Background: White with subtle border

---

### Opening Week Events (Block: Timeline)

**Block Type:** `custom-timeline` or `section-text`

**Headline:** "Seven Days of Celebration"
**Subheadline:** "Join us for exclusive events, local artist showcases, and special offers"

**Monday, Dec 15 - Grand Opening**
- 10am: Ribbon cutting ceremony with Mayor
- 12pm-8pm: 20% off entire store
- 6pm: Evening reception with light bites & local wines
- RSVP: Required for evening event

**Tuesday, Dec 16 - Sustainable Style Workshop**
- 6pm-8pm: "Building a Capsule Wardrobe" with our style team
- Learn to create 30+ outfits from 15 pieces
- Complimentary styling session included
- Capacity: 30 people

**Wednesday, Dec 17 - Local Designer Night**
- 5pm-9pm: Meet Bay Area designers
- Exclusive first look at SF collection
- Trunk shows and personal fittings
- Light refreshments

**Thursday, Dec 18 - Community Give-Back**
- All-day: 10% of sales donated to SF-Marin Food Bank
- Clothing drive for One Warm Coat
- Meet representatives from local nonprofits
- Free alterations on donations

**Friday, Dec 19 - Fashion Forward Panel**
- 7pm: Panel discussion "Sustainable Fashion in the Bay Area"
- Featuring local designers, sustainability experts
- Q&A and networking
- Free admission, RSVP required

**Saturday, Dec 20 - Style Sessions**
- 10am-6pm: Free 30-minute personal styling appointments
- Professional alterations at 50% off
- DJ and refreshments all day
- Kids' creative corner (eco-friendly crafts)

**Sunday, Dec 21 - Closing Celebration**
- 11am-7pm: Final day of opening week specials
- 3pm: Raffle drawing for $500 gift card
- 5pm: Thank you toast with the team
- Extended 30% discount on select items

**CTA:** "Reserve Your Spot" (prominent button)

**Design Specifications:**
- Timeline visual: Vertical line connecting events (desktop)
- Mobile: Simple stacked list format
- Each event: Date badge (circle/pill), title, time, description, RSVP indicator
- Primary color for timeline connector and badges
- Typography: Date (18px bold), Title (24px), Details (16px)
- Icons for event types (workshop, panel, celebration)
- Background: Alternating light gray and white sections
- Spacing: 60px between events

---

### Store Features Section (Block: Icon Grid)

**Block Type:** `icon-grid`

**Headline:** "Experience the Difference"

**Feature 1: Sustainable First**
- Icon: Leaf
- Title: "100% Sustainable Materials"
- Description: "Every item meets our strict environmental standards"

**Feature 2: Local Partnerships**
- Icon: Heart with SF bridge
- Title: "15 Bay Area Designers"
- Description: "Exclusive collaborations you won't find anywhere else"

**Feature 3: Personal Styling**
- Icon: Hanger
- Title: "Free Style Consultations"
- Description: "Our experts help you find your perfect look"

**Feature 4: On-Site Alterations**
- Icon: Scissors
- Title: "Same-Day Alterations"
- Description: "Professional tailoring while you browse"

**Feature 5: Community Space**
- Icon: People
- Title: "Events & Workshops"
- Description: "Regular gatherings for the style-conscious community"

**Feature 6: Repair Services**
- Icon: Wrench
- Title: "Clothing Repair Program"
- Description: "Extend the life of your favorite pieces"

**Design Specifications:**
- Desktop: 3 columns × 2 rows, 48px gutters
- Mobile: 1 column stack
- Icons: 64px × 64px, primary brand color
- Title: 20px bold
- Description: 16px, 1.6 line-height
- Centered alignment
- Background: White
- Section padding: 100px top/bottom

---

### Location Details (Block: Map + Info)

**Block Type:** `location-detail`

**Map Section:**
- Embedded map: Google Maps showing 1847 Market Street
- Store pin: Custom WKND brand marker
- Nearby landmarks highlighted: Civic Center BART, Hayes Valley shops

**Information Section:**
- **Address:** 1847 Market Street, San Francisco, CA 94103
- **Phone:** (415) 555-0847
- **Email:** sf@wkndtrendsetters.com

**Transportation:**
- MUNI: Multiple lines stop at Van Ness Station (2 blocks)
- BART: Civic Center Station (5-minute walk)
- Parking: Public garage at 17th & Market
- Bike: Bike racks at entrance, shower facilities available

**Accessibility:**
- Wheelchair accessible entrance
- Accessible fitting rooms
- ASL interpreters available by appointment
- Sensory-friendly shopping hours: First Sunday of month, 9-10am

**Design Specifications:**
- Desktop: Map 60% width left, Info 40% width right
- Mobile: Map stacks above info
- Map height: 400px desktop, 300px mobile
- Info section: Structured list with icons
- Typography: Labels 14px bold, Content 16px
- Background: Light gray
- Padding: 60px all sides

---

### Visual Gallery (Block: Gallery)

**Block Type:** `image-gallery`

**Images:**
1. Store exterior at golden hour
2. Interior featuring reclaimed redwood fixtures
3. Community event space setup
4. Clothing display with Bay Area designer pieces
5. Personal styling consultation in progress
6. On-site alteration studio
7. Store team portrait (diversity and local community focus)
8. Sustainable packaging and shopping bags

**Design Specifications:**
- Layout: Masonry grid (Pinterest-style) on desktop
- Mobile: 2-column grid
- Images: Lazy-loaded, optimized for EDS
- Aspect ratios: Mixed (maintain authentic proportions)
- Hover: Slight zoom (scale 1.05) with overlay caption
- Lightbox: Click to expand to full screen
- Navigation: Arrow keys and swipe gestures
- Background: White

---

### Newsletter Signup (Block: Form)

**Block Type:** `form`

**Headline:** "Stay in the Loop"
**Subheadline:** "Be first to know about exclusive SF events, new arrivals, and styling tips"

**Form Fields:**
- Email address (required)
- First name (required)
- ZIP code (optional, for local event notifications)
- Interests checkboxes:
  - Fashion & Style Tips
  - Local Events & Workshops
  - Sustainable Living
  - Travel & Adventure

**Checkbox:** "Yes, I want to receive exclusive offers and updates from WKND Trendsetters SF"

**CTA Button:** "Join Our Community"

**Privacy Note:** "We respect your inbox. Unsubscribe anytime. View our privacy policy."

**Design Specifications:**
- Form width: Max 600px, centered
- Input fields: 56px height, 16px padding
- Button: Full-width on mobile, fixed-width on desktop
- Typography: Labels 14px, Input 16px
- Validation: Real-time with helpful messages
- Success state: Confirmation message with animation
- Background: Subtle gradient or brand color (light)
- Section padding: 80px top/bottom

---

### Social Proof (Block: Testimonials/Quotes)

**Block Type:** `quotes` or `testimonials`

**Headline:** "What SF is Saying"

**Quote 1:**
- Text: "Finally, a store that gets San Francisco's style—sustainable, sophisticated, and real. Can't wait for the opening!"
- Attribution: "— Marina L., Hayes Valley Resident"
- Avatar: Stylized icon or photo

**Quote 2:**
- Text: "Supporting local designers while shopping sustainably? This is exactly what our city needs."
- Attribution: "— David K., Mission District"
- Avatar: Stylized icon or photo

**Quote 3:**
- Text: "The personal styling service alone is worth the visit. These folks understand quality and fit."
- Attribution: "— Jasmine W., Pacific Heights"
- Avatar: Stylized icon or photo

**Design Specifications:**
- Layout: 3 cards side-by-side (desktop), carousel (mobile)
- Cards: White background, subtle border, padding 32px
- Quote marks: Large decorative elements
- Typography: Quote 18px italic, Attribution 14px
- Avatar: 48px circle
- Hover: Subtle lift effect
- Background: Light gray

---

### Final CTA Section (Block: CTA)

**Block Type:** `call-to-action`

**Headline:** "Be Part of the Story"
**Body:** "Join us for the grand opening of WKND Trendsetters San Francisco. RSVP for exclusive opening week events and be among the first to experience conscious fashion, California style."

**Primary CTA:** "RSVP for Opening Events"
**Secondary CTA:** "Get Directions"

**Design Specifications:**
- Full-width section with background image (SF skyline at dusk)
- Overlay: Dark gradient (60% opacity) for text contrast
- Text: Center-aligned, white color
- Headline: 56px
- Body: 20px, max-width 700px centered
- Buttons: Large (56px height), high contrast
- Spacing: 48px between headline and body, 32px between body and CTAs
- Section padding: 120px top/bottom

---

## Technical Specifications for EDS Migration

### Block Configuration

**Document Structure (for DA.live authoring):**
```
|----------------------------------------|
| Hero                                   |
|   Headline: San Francisco, Your Story  |
|   Starts Here                          |
|   Image: hero-sf-store.jpg             |
|   CTA1: RSVP for Opening Event         |
|   CTA2: Explore the Space              |
|----------------------------------------|
| Columns (3-col)                        |
|   Column 1: Location details           |
|   Column 2: Opening week               |
|   Column 3: Store hours                |
|----------------------------------------|
| Media + Text                           |
|   Image: interior-reclaimed-wood.jpg   |
|   Headline: A Space Designed for SF    |
|   Body: [story content]                |
|----------------------------------------|
| Cards (4-col)                          |
|   Card 1: Ocean Beach Textiles         |
|   Card 2: Mission Made Leather         |
|   Card 3: Golden Gate Knits            |
|   Card 4: Bay Basics Co.               |
|----------------------------------------|
[Continue for all blocks...]
```

### Image Optimization
- Format: WebP with JPG fallback
- Hero image: 2400px width, optimized to <200KB
- Card images: 800px width, optimized to <80KB
- Gallery images: 1200px width, lazy-loaded
- All images: Alt text for accessibility
- Responsive images: Implement srcset for different viewports

### CSS Requirements (for pixel-perfect reproduction)

**Typography:**
- Primary font: [Match existing site font stack]
- Fallback: system-ui, -apple-system, sans-serif
- Headings scale: 72px → 56px → 48px → 32px → 24px → 20px
- Body: 16px base, 18px for featured content
- Line-height: 1.5 for body, 1.2 for headings
- Letter-spacing: Match existing brand guidelines

**Colors:**
- Primary brand color: [Match existing]
- Secondary: [Match existing]
- Background: #FFFFFF
- Light gray: #F8F8F8
- Dark gray: #333333
- Text: #1A1A1A
- Links: Primary color, underline on hover

**Spacing System:**
- Base unit: 8px
- Spacing scale: 8px, 16px, 24px, 32px, 40px, 48px, 60px, 80px, 100px, 120px
- Section padding: 80-120px vertical, responsive scaling

**Responsive Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large desktop: 1440px+

**Animation/Interaction:**
- Transitions: 0.3s ease for most interactions
- Hover states: Scale, shadow, color changes
- Scroll animations: Subtle fade-in-up (if existing site uses)
- Parallax: Hero background only (if existing site uses)

### Performance Optimization
- Lazy-load all images below fold
- Defer non-critical JavaScript
- Inline critical CSS
- Preload hero image
- Minimize render-blocking resources
- Target Core Web Vitals:
  - LCP: <2.5s
  - FID: <100ms
  - CLS: <0.1

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Keyboard navigation support
- Focus indicators visible
- Color contrast ratios: 4.5:1 minimum for body text
- Form labels properly associated
- ARIA labels where needed

### SEO Optimization
- Title: "New San Francisco Store Opening | WKND Trendsetters"
- Meta description: "Join us for the grand opening of WKND Trendsetters San Francisco on December 15. Sustainable fashion, local designers, and exclusive opening week events at 1847 Market Street."
- Open Graph tags for social sharing
- Structured data: LocalBusiness schema markup
- Canonical URL properly set
- XML sitemap inclusion

---

## Content Sources

All content in this briefing is derived from the **WKND Trendsetters Pre-Approved Content Repository (Version 2.0)** and follows established brand voice guidelines. All copy has been approved by Marketing & Legal teams.

### Brand Voice References
- Tone: Inspiring, confident, authentic, accessible (per repository guidelines)
- Style: Conversational but informed, aspirational but achievable
- Values: Sustainability, self-expression, authentic connections
- Audience: Millennials and Gen Z (25-40 years old)

### Sustainability Commitments
Content emphasizes WKND's commitment to:
- Environmental responsibility (reclaimed materials, energy efficiency)
- Social responsibility (local partnerships, fair practices)
- Economic impact (supporting local businesses, transparent practices)

---

## Asset Requirements

### Photography Needed
1. **Hero shot:** Exterior view of SF store with city context
2. **Interior shots:** Showcase sustainable design elements, spacious layout
3. **Product displays:** Featuring Bay Area designer collaborations
4. **Community space:** Events and workshops in progress
5. **Staff portraits:** Diverse, welcoming SF team
6. **Detail shots:** Sustainable materials, craftsmanship close-ups
7. **Neighborhood context:** Hayes Valley street scenes, local flavor

### Design Assets
- Store logo/wordmark for SF location
- Custom map marker icon
- Event icons (calendar, workshop, celebration, etc.)
- Social media graphics for promotion
- Email templates for RSVP confirmations

### Video Content (Optional Enhancement)
- 30-second store tour video
- Time-lapse of store build-out showcasing sustainable construction
- Designer interview shorts (2-3 minutes each)

---

## Implementation Timeline

### Phase 1: Content Import to EDS (Week 1)
- Convert briefing content to DA.live document format
- Create EDS block structure
- Import all copy and map to appropriate blocks
- Initial asset placement with placeholders

### Phase 2: Design Reproduction (Week 2)
- Apply existing site CSS/styling to EDS blocks
- Ensure pixel-perfect match to current design system
- Implement responsive behavior matching existing patterns
- Test across devices and browsers

### Phase 3: Asset Integration (Week 3)
- Replace placeholder images with optimized finals
- Implement lazy loading and performance optimizations
- Add all interactive elements (forms, maps, galleries)
- Configure analytics and tracking

### Phase 4: Testing & QA (Week 4)
- Cross-browser testing (Chrome, Safari, Firefox, Edge)
- Device testing (iOS, Android, various screen sizes)
- Accessibility audit with automated tools + manual testing
- Performance testing (Lighthouse, WebPageTest)
- Form submission testing
- Link verification

### Phase 5: Pre-Launch (Week 5)
- Final content review with stakeholders
- Legal/compliance review
- Setup redirects if needed
- Prepare social media assets for launch
- Create press release

### Launch: Go-live with monitoring
- Deploy to production
- Monitor analytics for first 48 hours
- Address any issues immediately
- Collect user feedback

---

## Success Criteria

### Technical
- ✅ Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- ✅ Core Web Vitals: All metrics in "Good" range
- ✅ Zero console errors on launch
- ✅ All forms functional and submitting correctly
- ✅ Cross-browser compatibility confirmed
- ✅ Mobile responsiveness perfect across devices

### Design
- ✅ Pixel-perfect match to existing site design system
- ✅ No noticeable differences in typography, spacing, colors
- ✅ All animations/interactions match existing patterns
- ✅ Brand consistency maintained throughout

### Content
- ✅ All copy aligns with approved brand voice
- ✅ SEO metadata optimized
- ✅ Accessibility standards met
- ✅ No broken links or missing assets

### Business
- ✅ Page live by December 1, 2025 (2 weeks before opening)
- ✅ RSVP system functional and tested
- ✅ Analytics tracking implemented
- ✅ Social sharing working correctly

---

## Notes for Development Team

### Critical Considerations
1. **Design Fidelity:** The primary goal is pixel-perfect reproduction. Reference the existing WKND site carefully for exact spacing, typography, and interaction patterns.

2. **Block Reusability:** Structure blocks to be reusable for future store opening announcements (Portland, Seattle, Austin, etc.).

3. **Performance First:** While matching design, never sacrifice Core Web Vitals. Optimize aggressively.

4. **Accessibility:** Not optional. Build accessibility in from the start, don't retrofit.

5. **Content Flexibility:** Marketing team should be able to update copy, images, and event details through DA.live without developer intervention.

### Questions for Clarification
- [ ] Confirm exact brand fonts and licensing for web use
- [ ] Verify existing site's JavaScript libraries/dependencies to match interactions
- [ ] Confirm analytics platform (Google Analytics, Adobe Analytics, etc.)
- [ ] Get credentials for form submission endpoint
- [ ] Clarify any A/B testing requirements
- [ ] Confirm social media tracking pixels needed

### Resources & References
- **AEM EDS Documentation:** https://www.aem.live/
- **DA.live Documentation:** https://docs.da.live/
- **Existing WKND Site:** [URL to be provided]
- **Design System:** [Link to design system documentation]
- **Brand Guidelines:** [Link to brand book]
- **Content Repository:** WKND-Content-Repository.md (Version 2.0)

---

## Approval & Sign-off

**Content Approved By:**
- [ ] Marketing Director
- [ ] Brand Manager  
- [ ] Legal/Compliance

**Design Approved By:**
- [ ] Creative Director
- [ ] UX/UI Lead

**Technical Approved By:**
- [ ] Development Lead
- [ ] Platform Architect

**Final Approval:**
- [ ] VP of Marketing
- [ ] General Manager, San Francisco Location

---

**Document Version:** 1.0  
**Last Updated:** November 4, 2025  
**Next Review:** Upon completion of Phase 1 implementation

---

*This briefing serves as the single source of truth for the San Francisco opening announcement page. All stakeholders should reference this document throughout the project lifecycle.*
