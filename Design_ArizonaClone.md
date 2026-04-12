# Come See Arizona - Design Specification
## Clone of DiscoverLosAngeles.com adapted for Arizona

---

## 1. Site Overview

```yaml
type: content-driven-experience
scroll_direction: vertical
estimated_scroll_length: "600vh"
primary_interaction: scroll + click navigation
navigation_ui: top sticky nav with dropdowns
progress_indicator: none
```

**Experience Summary**
A content-rich destination guide website featuring editorial-style article cards, event listings, itinerary carousels, and neighborhood exploration. The design prioritizes large imagery, clean typography, and easy content discovery.

---

## 2. Tech Stack

```yaml
framework: React + Vite + TypeScript
animation_library: GSAP (for carousels and reveals)
scroll_library: native scroll
```

---

## 3. Section-by-Section Design

### Section 1: Top Banner

**Layout**
- Full-width dark banner at very top
- White text: "The Best Things to Do in Arizona this Weekend: [Dates]"
- Close button (X) on right

**Visual**
- Background: #1a1a1a (near black)
- Height: 48px
- Font: 14px, white, centered

---

### Section 2: Navigation Header

**Layout**
- Sticky header with white background
- Left: Hamburger menu + Logo "Come See Arizona"
- Center: Navigation links (Things to Do, Eat & Drink, Events, Where to Stay, Travel Guides)
- Right: Search icon

**Visual**
- Height: 72px
- Background: white with subtle shadow on scroll
- Logo: Custom wordmark in serif font
- Nav links: 14px, uppercase, letter-spacing 1px

---

### Section 3: Video Hero

**Layout**
- Full-width video background (16:9 ratio)
- Centered quote overlay with attribution
- Quote marks as decorative elements

**Content**
- Quote: "Arizona is not just a place you visit. It's a place that stays with you long after you've left."
- Attribution: "- Author Name"

**Visual**
- Video: Arizona desert landscape aerial footage
- Quote text: White, 32px italic serif
- Attribution: White, 14px sans-serif
- Overlay: subtle dark gradient for text readability

---

### Section 4: Featured Articles (2-column grid)

**Layout**
- Section title: "Featured Stories"
- 2 large article cards side by side
- Each card: full-bleed image with text overlay at bottom

**Card Structure**
- Image: 16:9 aspect ratio
- Category tag (top-left of text area)
- Title (large, white)
- Author credit with avatar

**Articles**
1. "Celebrate Arizona's Rich Heritage" - Things to Do / Culture
2. "Ancient Civilizations of the Southwest" - Things to Do / Museums

---

### Section 5: Secondary Articles (2-column grid)

**Layout**
- Same as Section 4 but different content
- Smaller cards

**Articles**
1. "Scottsdale's Art District Guide" - Things to Do / Arts
2. "Route 66 Through Arizona" - Things to Do / Attractions

---

### Section 6: Upcoming Events

**Layout**
- Section header: "Upcoming Events" + "View All Events" link
- Horizontal scrollable row of event cards
- Each card: Date block (month/day) + Category + Title + Time

**Event Cards**
- 5-6 visible cards
- Date: Large day number, small month above
- Category tag (Sports, Music, Family, etc.)
- Title: 16px bold
- Time: 13px gray

**Sample Events**
- Cactus League Spring Training (Mar 2026)
- Scottsdale Culinary Festival (Apr 2026)
- Arizona Renaissance Festival (Mar 2026)
- Sedona International Film Festival (Feb 2026)
- Phoenix Open Golf Tournament (Feb 2026)

---

### Section 7: Featured Promotion Banner

**Layout**
- Full-width banner with background image
- Left-aligned text content
- "Read More" CTA button

**Content**
- Dynamic: shows next major upcoming event from events data
- Fallback: "Experience the Valley of the Sun" with desert image
- CTA: "View Events" or "Explore Things to Do"

---

### Section 8: Itineraries Carousel

**Layout**
- Section header: "Find Your Perfect Itinerary"
- Subtitle: "Discover the best of Arizona with our 3-day itineraries."
- Horizontal carousel with itinerary cards
- Each card: Image + Title + Short description + "Read More"

**Itineraries**
1. "3 Days of Arizona's Natural Wonders" - Grand Canyon, Sedona, Monument Valley
2. "3 Days of Arts and Culture" - Phoenix museums, Scottsdale galleries, Native heritage
3. "3 Days of Arizona Dining" - Tucson gastronomy, Phoenix food scene
4. "3 Days of Golf Paradise" - Scottsdale courses, resorts
5. "3 Days of Family Fun" - Phoenix Zoo, Children's Museum, water parks
6. "3 Days of Old West History" - Tombstone, Bisbee, mining towns

---

### Section 9: More Articles (3-column grid)

**Layout**
- 3 article cards in a row
- Each card: Image top, content below
- Category tag, Title, Author

**Articles**
1. "Best Rooftop Bars in Phoenix" - Eat & Drink / Bars
2. "Arizona's Best Hiking Trails" - Things to Do / Outdoors
3. "Best Desert Resorts" - Things to Do / Wellness

---

### Section 10: "These Lovely Streets" Artist Carousel

**Layout**
- Section title: "These Lovely Streets"
- Artist quote carousel with large images
- Quote + Artist name + Title
- Navigation arrows

**Artists**
1. "The desert light here is unlike anywhere else. It transforms everything it touches." - Local Artist
2. "Arizona is where ancient history meets infinite possibility." - Native Artist

---

### Section 11: About Town / Neighborhoods

**Layout**
- Section header: "About Town"
- Description paragraph
- Grid of neighborhood cards (2 columns x 4 rows)
- Each card: Image + Plus icon + Neighborhood name + Subtitle

**Neighborhoods**
- Old Town Scottsdale
- Downtown Phoenix
- Sedona Red Rocks
- Tucson Historic District
- Paradise Valley
- Flagstaff Mountain Town
- Bisbee Art Colony
- Prescott Whiskey Row

---

### Section 12: Newsletter Signup

**Layout**
- Full-width section with background image
- Centered form
- Title: "Come See Arizona Newsletter"
- Email input + consent checkbox + Submit button

---

### Section 13: Footer

**Layout**
- Multi-column footer
- Column 1: Logo + tagline
- Column 2-4: Navigation links
- Partners row with logos
- Social media icons
- Copyright + legal links

---

## 4. Visual Design System

### Color Palette
```yaml
primary: "#D32F2F"           # Arizona red
secondary: "#FF6F00"          # Desert orange
accent: "#FFC107"             # Gold/sand
background: "#FFFFFF"
text: "#1A1A1A"
text_secondary: "#666666"
overlay_dark: "rgba(0,0,0,0.5)"
```

### Typography
```yaml
heading_font: "Playfair Display, Georgia, serif"
body_font: "Inter, Helvetica, sans-serif"
heading_sizes:
  hero_quote: "32px"
  section_title: "28px"
  card_title: "22px"
  card_title_large: "28px"
body_size: "16px"
small: "13px"
caption: "12px"
```

### Spacing
```yaml
section_padding: "80px"
card_gap: "24px"
container_max_width: "1280px"
```

---

## 5. Asset Inventory

### Images Required

```yaml
hero_video_poster:
  type: background
  description: "Aerial view of Arizona desert with canyons"
  prompt: "Cinematic aerial shot of Arizona desert landscape at golden hour, Grand Canyon in distance, warm orange and red tones, dramatic clouds, wide angle"

featured_1_heritage:
  type: card
  description: "Native American cultural event in Arizona"
  prompt: "Native American pow wow ceremony in Arizona, colorful traditional dress, dancers, desert backdrop, cultural celebration, photojournalistic style"

featured_2_ancient:
  type: card
  description: "Ancient ruins in Arizona"
  prompt: "Montezuma Castle or ancient cliff dwellings in Arizona, dramatic lighting, archaeological site, desert landscape, historical"

article_scottsdale:
  type: card
  description: "Scottsdale art district"
  prompt: "Scottsdale Arizona art district at night, galleries, sculptures, pedestrians, warm lighting, upscale atmosphere"

article_route66:
  type: card
  description: "Route 66 in Arizona"
  prompt: "Classic Route 66 through Arizona desert, vintage neon signs, retro motel, Cadillac Ranch style, nostalgic Americana"

promo_stadium:
  type: banner
  description: "Arizona event venue at night"
  prompt: "State Farm Stadium in Glendale Arizona at night, illuminated, modern architecture, dramatic sky, sports venue"

itinerary_1_nature:
  type: card
  description: "Grand Canyon vista"
  prompt: "Grand Canyon South Rim at sunrise, panoramic view, layered rock formations, golden light, tourists at overlook"

itinerary_2_culture:
  type: card
  description: "Phoenix art museum"
  prompt: "Phoenix Art Museum exterior, modern architecture, blue sky, cultural institution, contemporary design"

itinerary_3_dining:
  type: card
  description: "Arizona cuisine"
  prompt: "Gourmet Southwestern cuisine, colorful plated dishes, Mexican fusion, restaurant setting, food photography"

itinerary_4_golf:
  type: card
  description: "Scottsdale golf course"
  prompt: "Luxury golf course in Scottsdale Arizona, green fairways, desert mountains backdrop, palm trees, resort setting"

itinerary_5_family:
  type: card
  description: "Phoenix Zoo"
  prompt: "Phoenix Zoo, families enjoying exhibits, desert animals, children at petting zoo, sunny day"

itinerary_6_history:
  type: card
  description: "Tombstone Arizona"
  prompt: "Historic Tombstone Arizona, OK Corral, Old West buildings, wooden sidewalks, American frontier town"

article_rooftop:
  type: card
  description: "Phoenix rooftop bar"
  prompt: "Trendy rooftop bar in Phoenix at sunset, city skyline views, cocktails, young professionals, urban nightlife"

article_hiking:
  type: card
  description: "Arizona hiking trail"
  prompt: "Hikers on Camelback Mountain trail, Phoenix skyline in distance, desert vegetation, active lifestyle, morning light"

article_resort:
  type: card
  description: "Arizona desert resort"
  prompt: "Luxury desert resort pool in Arizona, infinity pool, mountain views, palm trees, lounge chairs, spa atmosphere"

neighborhood_scottsdale:
  type: card
  description: "Old Town Scottsdale"
  prompt: "Old Town Scottsdale street scene, western architecture, art galleries, pedestrians, vibrant atmosphere"

neighborhood_phoenix:
  type: card
  description: "Downtown Phoenix"
  prompt: "Downtown Phoenix skyline, modern skyscrapers, city center, blue sky, urban Arizona"

neighborhood_sedona:
  type: card
  description: "Sedona red rocks"
  prompt: "Sedona Arizona with red rock formations, Cathedral Rock, spiritual destination, dramatic landscape"

neighborhood_tucson:
  type: card
  description: "Tucson historic district"
  prompt: "Tucson historic district, adobe architecture, colorful buildings, Mexican influence, cultural heritage"

neighborhood_paradise:
  type: card
  description: "Paradise Valley luxury"
  prompt: "Paradise Valley Arizona luxury homes, desert landscaping, Camelback Mountain view, upscale residential"

neighborhood_flagstaff:
  type: card
  description: "Flagstaff mountain town"
  prompt: "Flagstaff Arizona downtown, mountain town atmosphere, pine trees, historic buildings, four seasons"

neighborhood_bisbee:
  type: card
  description: "Bisbee art colony"
  prompt: "Bisbee Arizona hillside town, colorful Victorian houses, artistic community, steep streets, mining history"

neighborhood_prescott:
  type: card
  description: "Prescott Whiskey Row"
  prompt: "Prescott Arizona Whiskey Row, historic saloons, western frontier architecture, American West"

newsletter_bg:
  type: background
  description: "Arizona sunset landscape"
  prompt: "Arizona desert sunset, saguaro cacti silhouettes, orange and purple sky, dramatic clouds, newsletter background"
```

---

## 6. Animations

### Scroll Reveals
- Article cards fade in + translate Y (20px) on scroll
- Stagger delay: 100ms between cards
- Duration: 400ms
- Easing: ease-out

### Carousel
- Smooth horizontal scroll
- Snap to card centers
- Arrow navigation

### Hover Effects
- Cards: scale(1.02) + shadow increase
- Buttons: background color transition
- Links: underline animation

---

## 7. Responsive Breakpoints

```yaml
desktop: "1280px+"
tablet: "768px - 1279px"
mobile: "< 768px"
```

**Mobile Adaptations**
- Top banner: smaller text
- Navigation: hamburger menu only
- Article grids: single column
- Event carousel: 2 visible cards
- Itinerary carousel: 1.5 visible cards
- Neighborhood grid: single column

---

## Requirements Checklist

- [x] No references to source material
- [x] Type specified: content-driven-experience
- [x] Scroll direction: vertical
- [x] All sections defined with layouts
- [x] Visual elements specified
- [x] Animation patterns defined
- [x] All images include prompts
- [x] Responsive strategy included
- [x] Complete copy document