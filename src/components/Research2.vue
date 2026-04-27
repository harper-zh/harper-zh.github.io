<script setup>
import { ref } from 'vue'
const publicUrl = (path) =>
  `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`
const placeholderImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='#eceff3'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#8b94a1' font-family='Arial, sans-serif' font-size='32'>Image Placeholder</text></svg>",
  )

const projectSections = [
  {
    title: '3D-Printed Urban Furnitures for Dingshu Town',
    summary:
      '',
    details:
      'Responsible for developing path planning program and robotic motion simulation, generating 45 programms sucessfully.Fine-tuned printing parameters and oversaw on-site printing operations, controlling color and final product quality. Successfully printed 15 large-scale urban furniture, each 3.6 meters in length.',
      gallery: [
  {
    src: publicUrl('images/dingshu.png'),
    alt: 'Dingshu urban furniture overview',
    caption: 'Dingshu project - overview',
  }
]
  },
  {
    title: 'Reconstructing Traditional Roofs with 3D Lattice Printing',
    summary:
      '',
    details:
      'Focused on process calibration for stable lattice deposition, including nozzle height, bead overlap, travel speed, cooling interval, and corner deceleration tuning. Iterated print-path sequencing and support strategy to reduce sagging and improve edge accuracy during roof-surface reconstruction.',
    gallery: [
    {
    src: publicUrl('images/roof1.jpg'),
    alt: 'Floral pavilion overview',
    caption: 'Floral pavilion - overview',
  },
  {
    src: publicUrl('images/roof2.jpg'),
    alt: 'Floral pavilion detail',
    caption: 'Floral pavilion - detail',
  },
  {
    src: publicUrl('images/roof3.jpg'),
    alt: 'Floral pavilion detail',
    caption: 'Floral pavilion - detail',
  }


    ],
  },
  {
    title: 'Floral-Inspired 3D-Printed Pavilion',
    summary:
      '',
    details:
      'Led print parameter debugging across multiple segment scales, balancing extrusion flow, layer time, and wall-thickness consistency to maintain curvature quality.',
      gallery: [
    {
    src: publicUrl('images/flo1.jpg'),
    alt: 'Floral pavilion overview',
    caption: 'Floral pavilion - overview',
  },
  {
    src: publicUrl('images/flo2.png'),
    alt: 'Floral pavilion detail',
    caption: 'Floral pavilion - detail',
  },
  {
    src: publicUrl('images/flo3.png'),
    alt: 'Floral pavilion detail',
    caption: 'Floral pavilion - detail',
  },
  {
    src: publicUrl('images/flo4.jpg'),
    alt: 'Floral pavilion detail',
    caption: 'Floral pavilion - detail',
  },

    ],
  },
]

const projectImageIndexes = ref(projectSections.map(() => 0))

const showPrevProject = (sectionIndex) => {
  const section = projectSections[sectionIndex]
  projectImageIndexes.value[sectionIndex] =
    (projectImageIndexes.value[sectionIndex] - 1 + section.gallery.length) %
    section.gallery.length
}

const showNextProject = (sectionIndex) => {
  const section = projectSections[sectionIndex]
  projectImageIndexes.value[sectionIndex] =
    (projectImageIndexes.value[sectionIndex] + 1) % section.gallery.length
}

const swipeStart = ref({ x: 0, y: 0 })
const SWIPE_THRESHOLD = 40
const onSwipeStart = (event) => {
  const touch = event.changedTouches?.[0]
  if (!touch) return
  swipeStart.value = { x: touch.clientX, y: touch.clientY }
}
const onSwipeEnd = (event, onSwipeLeft, onSwipeRight) => {
  const touch = event.changedTouches?.[0]
  if (!touch) return
  const deltaX = touch.clientX - swipeStart.value.x
  const deltaY = touch.clientY - swipeStart.value.y
  if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) return
  if (deltaX < 0) onSwipeLeft()
  else onSwipeRight()
}
</script>

<template>
  <div class="thesis-page">
    <section class="section-outer" aria-labelledby="research2-hero">
      <div class="section-body">
        <div class="grid-hero-single">
          <div class="block block-tall hero-title-block">
            <p id="research2-hero" class="wf-title hero-main-title">Large-Scale Robotic Fabrication Projects</p>

          </div>
        </div>
      </div>
    </section>

    <section
      v-for="(section, sectionIndex) in projectSections"
      :key="section.title"
      class="section-outer"
      :aria-labelledby="`research2-section-${sectionIndex}`"
    >
      <div class="section-body">
        <h2 :id="`research2-section-${sectionIndex}`" class="section-tag">Project {{ sectionIndex + 1 }}</h2>
        <div class="grid-app">
          <div class="block block-app-main">
            <p class="wf-title">{{ section.title }}</p>
            <p class="wf-sub app-copy">{{ section.summary }}</p>
            <p class="wf-sub app-copy">{{ section.details }}</p>
          </div>

          <div class="block stack-app app-gallery-panel">
            <div
              class="result-gallery app-result-gallery"
              @touchstart="onSwipeStart"
              @touchend="onSwipeEnd($event, () => showNextProject(sectionIndex), () => showPrevProject(sectionIndex))"
            >
              <button
                class="feature-nav-btn"
                type="button"
                @click="showPrevProject(sectionIndex)"
                :aria-label="`Previous image for ${section.title}`"
              >
                ‹
              </button>
              <img
                class="result-gallery-img app-gallery-img"
                :src="section.gallery[projectImageIndexes[sectionIndex]].src"
                :alt="section.gallery[projectImageIndexes[sectionIndex]].alt"
              />
              <button
                class="feature-nav-btn"
                type="button"
                @click="showNextProject(sectionIndex)"
                :aria-label="`Next image for ${section.title}`"
              >
                ›
              </button>
            </div>

            <div class="feature-gallery-dotline" aria-hidden="true">
              <span
                v-for="(_, i) in section.gallery"
                :key="`${sectionIndex}-${i}`"
                class="feature-dot"
                :class="{ active: i === projectImageIndexes[sectionIndex] }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.thesis-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 1rem;
}

.section-outer {
  display: block;
}

.section-body {
  flex: 1;
  min-width: 0;
}

.section-tag {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text);
  opacity: 0.7;
  margin: 0 0 0.5rem;
}

.block {
  background: var(--color-background-mute);
  border: none;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: left;
  min-height: 0;
}

.block-tall {
  min-height: 5.5rem;
}

.hero-title-block {
  align-items: stretch;
  justify-content: center;
}

.grid-hero-single {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.4rem;
}

.wf-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0 0 0.2rem;
}

.wf-sub {
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--color-text);
  opacity: 0.85;
  margin: 0;
}

.hero-main-title {
  font-size: 2rem;
}

.grid-app {
  display: grid;
  grid-template-columns: 1.05fr 1.35fr;
  gap: 0.55rem;
}

.block-app-main {
  min-height: 100%;
}

.app-copy + .app-copy {
  margin-top: 0.45rem;
}

.stack-app {
  gap: 0.35rem;
}

.app-gallery-panel {
  justify-content: flex-start;
}

.result-gallery {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.4rem;
  align-items: center;
  margin-top: 0.4rem;
}

.app-result-gallery {
  margin-top: 0;
}

.feature-nav-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 999px;
  background: var(--color-background-soft);
  color: var(--color-heading);
  font-size: 1.15rem;
  cursor: pointer;
}

.feature-nav-btn:hover {
  background: var(--color-background-mute);
}

.result-gallery-img {
  width: 100%;
  height: clamp(240px, 34vw, 460px);
  object-fit: contain;
  border-radius: 6px;
  display: block;
  background: var(--color-background-soft);
}

.app-gallery-img {
  height: clamp(280px, 36vw, 520px);
}

.app-gallery-caption {
  margin: 0.35rem 0 0;
  font-size: 0.74rem;
  color: var(--color-text);
  opacity: 0.82;
  text-align: center;
}

.feature-gallery-dotline {
  display: flex;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.35rem;
}

.feature-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-text) 22%, transparent);
}

.feature-dot.active {
  background: color-mix(in srgb, var(--color-heading) 85%, transparent);
}

@media (max-width: 1024px) {
  .thesis-page {
    gap: 1.5rem;
  }

  .hero-main-title {
    font-size: 1.55rem;
  }

  .wf-title {
    font-size: 1.15rem;
  }

  .result-gallery-img,
  .app-gallery-img {
    height: clamp(220px, 42vw, 420px);
  }
}

@media (max-width: 720px) {
  .thesis-page {
    gap: 1.25rem;
  }

  .grid-app {
    grid-template-columns: 1fr;
  }

  .block {
    padding: 0.52rem 0.62rem;
  }

  .hero-main-title {
    font-size: 1.35rem;
    line-height: 1.3;
  }

  .wf-title {
    font-size: 1rem;
    line-height: 1.35;
  }

  .wf-sub {
    font-size: 0.8125rem;
    line-height: 1.5;
  }

  .section-tag {
    font-size: 0.56rem;
    margin-bottom: 0.4rem;
  }

  .feature-nav-btn {
    width: 1.7rem;
    height: 1.7rem;
    font-size: 1rem;
  }

  .result-gallery,
  .app-result-gallery {
    gap: 0.25rem;
  }

  .result-gallery-img,
  .app-gallery-img {
    height: clamp(190px, 56vw, 320px);
  }
}

@media (max-width: 480px) {
  .thesis-page {
    gap: 1rem;
  }

  .hero-main-title {
    font-size: 1.2rem;
    line-height: 1.3;
  }

  .wf-title {
    font-size: 0.94rem;
    line-height: 1.35;
  }

  .wf-sub {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .section-tag {
    font-size: 0.52rem;
  }

  .result-gallery-img,
  .app-gallery-img {
    height: clamp(170px, 62vw, 280px);
  }
}
</style>
