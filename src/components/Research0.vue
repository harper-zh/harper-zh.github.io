<script setup>
import { ref } from 'vue'

const publicUrl = (path) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`

const heroImages = [

  { file: 're_hero.jpg', alt: 'TES hero img' },
].map(({ file, alt }) => ({ src: publicUrl(`images/${file}`), alt }))

const contributionSections = [
  {
    title: 'Parametric TES Design Tools',
    summary:
      'Developed parametric floor framework definitions and structural integration scripts in Python to improve geometry control and assembly-sequence readability.',
    images: [{ src: publicUrl('images/re01.png'), alt: 'Parametric timber-earth slab design workflow' }],
  },
  {
    title: 'Digital Twin & Robotic Simulation',
    summary:
      'Built simulation-ready construction environments in Rhino and mapped robotic motion logic through COMPAS and ROS-based workflows for process validation before fabrication.',
    images: [
      { src: publicUrl('images/re02.png'), alt: 'RobotStudio simulation environment' },
      { src: publicUrl('images/re03.png'), alt: 'Rhino robotic assembly visualization' },
    ],
  },
  {
    title: 'On-Site Fabrication & Validation',
    summary:
      'Contributed to real-world robotic assembly and verification of two full-scale timber floor slabs, closing the loop between computational planning and built outcomes.',
    images: [
      { src: publicUrl('images/re04.png'), alt: 'Picking lamella process' },
      { src: publicUrl('images/re05.png'), alt: 'Placing lamella process' },
      { src: publicUrl('images/re06.png'), alt: 'Demonstrator assembly stage' },
      { src: publicUrl('images/re07.png'), alt: 'Final demonstrator' },
      { src: publicUrl('images/re08.jpg'), alt: 'Built detail documentation' },
    ],
  },
]

const contributionImageIndexes = ref([0, 0, 0])

const showPrevContribution = (sectionIndex) => {
  const section = contributionSections[sectionIndex]
  contributionImageIndexes.value[sectionIndex] =
    (contributionImageIndexes.value[sectionIndex] - 1 + section.images.length) %
    section.images.length
}

const showNextContribution = (sectionIndex) => {
  const section = contributionSections[sectionIndex]
  contributionImageIndexes.value[sectionIndex] =
    (contributionImageIndexes.value[sectionIndex] + 1) % section.images.length
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
  <div class="flex flex-col gap-12 research0-page">
    <div class="flex flex-col gap-8 research0-content">
      <section class="section-outer" aria-labelledby="tes-hero">
        <div class="section-body">
          <div class="grid-hero">
            <div class="block block-tall hero-title-block">
              <p id="tes-hero" class="wf-title hero-main-title">TIMBER-EARTH-SLAB: Robotic Assembly & Computational Tools</p>
              <p class="wf-sub">Research Intern at Professorship of Digital Fabrication, TU Munich</p>
              <p class="wf-sub">Supervisor: Prof. Kathrin Dörfler<br />Collaborators: Janna Vollrath, Dominik Merk</p>
            </div>
            <div class="block block-tall block-media" aria-label="hero_img placeholder">
              <div class="hero-img-row" role="group" aria-label="Hero images">
                  <img
                    v-for="(img, i) in heroImages"
                    :key="i"
                    :src="img.src"
                    :alt="img.alt"
                    loading="eager"
                  />
                </div>
              <p class="hero-photo-credit">Photo credit: Janna Vollrath</p>
            </div>
          </div>
        </div>
      </section>
      <div class="flex flex-col gap-12">

        <section class="section-outer" aria-labelledby="tes-focus">
          <div class="section-body">
            <h2 id="tes-focus" class="section-tag">Research Focus</h2>
            <div class="grid-problem">
              <div class="block block-short">
                <p class="wf-title">Hybrid TES Material System</p>
                <p class="wf-sub">Timber-earth slabs combine timber tensile strength with earth-based thermal mass to form a high-performance hybrid floor system.</p>
              </div>
              <div class="block block-short">
                <p class="wf-title">Multi-Performance Targets</p>
                <p class="wf-sub">The research prioritizes thermal activation potential, fire resistance, and acoustic insulation while keeping structural efficiency.</p>
              </div>
              <div class="block block-short">
                <p class="wf-title">Digital-to-Robotic Workflow</p>
                <p class="wf-sub">A computational design pipeline is developed alongside robotic fabrication methods to support TES construction from model to build.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="section-outer" aria-labelledby="tes-contributions">
          <div class="section-body">
            <h2 id="tes-contributions" class="section-tag">Contributions</h2>
            <div class="grid-results-top">
              <div
                v-for="(section, sectionIndex) in contributionSections"
                :key="section.title"
                class="block block-result"
              >
                <p class="wf-title">{{ section.title }}</p>
                <p class="wf-sub">{{ section.summary }}</p>
                <div
                  class="result-gallery"
                  @touchstart="onSwipeStart"
                  @touchend="onSwipeEnd($event, () => showNextContribution(sectionIndex), () => showPrevContribution(sectionIndex))"
                >
                  <button
                    class="feature-nav-btn"
                    type="button"
                    @click="showPrevContribution(sectionIndex)"
                    aria-label="Previous contribution figure"
                  >
                    ‹
                  </button>
                  <img
                    class="result-gallery-img"
                    :src="section.images[contributionImageIndexes[sectionIndex]].src"
                    :alt="section.images[contributionImageIndexes[sectionIndex]].alt"
                  />
                  <button
                    class="feature-nav-btn"
                    type="button"
                    @click="showNextContribution(sectionIndex)"
                    aria-label="Next contribution figure"
                  >
                    ›
                  </button>
                </div>
                <div class="feature-gallery-dotline" aria-hidden="true">
                  <span
                    v-for="(_, i) in section.images"
                    :key="`${sectionIndex}-${i}`"
                    class="feature-dot"
                    :class="{ active: i === contributionImageIndexes[sectionIndex] }"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
.research0-page {
  padding-bottom: 1rem;
}

.section-outer {
  display: block;
}

.section-body {
  flex: 1;
  min-width: 0;
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

.block-media {
  position: relative;
  padding: 0.25rem 0.15rem 0.15rem;
  min-height: 0;
}

.grid-hero {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.4rem;
}

.hero-title-block {
  align-items: stretch;
  justify-content: center;
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

.hero-title-block .wf-sub {
  text-align: left;
  width: 100%;
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

.grid-problem {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
}

.block-short {
  min-height: 4rem;
}

.hero-img-row {
  width: 100%;
  height: 100%;
}

.hero-img-row img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.hero-photo-credit {
  margin: 0.35rem 0 0;
  font-size: 0.72rem;
  color: var(--color-text);
  opacity: 0.72;
}

.grid-results-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
}

.block-result {
  min-height: 5rem;
}

.result-gallery {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.4rem;
  align-items: center;
  margin-top: 0.4rem;
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

@media (max-width: 720px) {
  .research0-page {
    gap: 2rem !important;
  }

  .research0-content {
    gap: 1.5rem !important;
  }

  .grid-hero {
    grid-template-columns: 1fr;
  }

  .grid-problem {
    grid-template-columns: 1fr;
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

  .result-gallery {
    gap: 0.25rem;
  }

  .result-gallery-img {
    height: clamp(200px, 52vw, 360px);
  }

  .feature-nav-btn {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .block {
    padding: 0.52rem 0.6rem;
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

  .result-gallery-img {
    height: clamp(180px, 58vw, 300px);
  }
}
</style>
