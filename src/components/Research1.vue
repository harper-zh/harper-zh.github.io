<script setup>
import { ref } from 'vue'

// public/ assets: use BASE_URL so Vite does not try to bundle them as module imports
const publicUrl = (path) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`

const heroImages = [

  { file: '305_1.JPG', alt: 'HDR luminance sample 305_1' },
].map(({ file, alt }) => ({ src: publicUrl(`images/${file}`), alt }))

const featureGalleryImages = [
  {
    src: publicUrl('images/r1_01_feature_distributions.png'),
    alt: 'Feature distributions visualization',
  },
  {
    src: publicUrl('images/r1_03_quality_check.png'),
    alt: 'Feature quality check visualization',
  },
]

const featureImageIndex = ref(0)
const showPrevFeature = () => {
  featureImageIndex.value =
    (featureImageIndex.value - 1 + featureGalleryImages.length) % featureGalleryImages.length
}
const showNextFeature = () => {
  featureImageIndex.value = (featureImageIndex.value + 1) % featureGalleryImages.length
}

const sensitivityGalleryImages = [
  { src: publicUrl('images/r1_fig1_boxplot.png'), alt: 'Sensitivity analysis boxplot' },
  { src: publicUrl('images/r1_fig2_dual.png'), alt: 'Sensitivity analysis dual plot' },
]

const predictionGalleryImages = [
  { src: publicUrl('images/r1_C2_scatter_test.png'), alt: 'Optical behavior prediction scatter test' },
  { src: publicUrl('images/r1_E1_heatmap_mean_lum.png'), alt: 'Prediction heatmap mean luminance' },
  { src: publicUrl('images/r1_E1_heatmap_anisotropy.png'), alt: 'Prediction heatmap anisotropy' },
  { src: publicUrl('dist/images/re17.png'), alt: 'Prediction result overview' },
]

const sensitivityImageIndex = ref(0)
const predictionImageIndex = ref(0)

const showPrevSensitivity = () => {
  sensitivityImageIndex.value =
    (sensitivityImageIndex.value - 1 + sensitivityGalleryImages.length) %
    sensitivityGalleryImages.length
}
const showNextSensitivity = () => {
  sensitivityImageIndex.value = (sensitivityImageIndex.value + 1) % sensitivityGalleryImages.length
}

const showPrevPrediction = () => {
  predictionImageIndex.value =
    (predictionImageIndex.value - 1 + predictionGalleryImages.length) %
    predictionGalleryImages.length
}
const showNextPrediction = () => {
  predictionImageIndex.value = (predictionImageIndex.value + 1) % predictionGalleryImages.length
}

const appGalleryImages = [
  {
    src: publicUrl('images/r1_scenario.png'),
    alt: 'Daylight design decision framework flowchart',
    caption: 'Facade design scenario: summer glare control and winter daylight transmission preservation',
  },

  {
    src: publicUrl('images/r1_visual.png'),
    alt: 'Summer dynamic performance comparison',
    caption: 'Summer and winter visual comparison between optimized and linear samples',
  },

]
const appImageIndex = ref(0)
const showPrevApp = () => {
  appImageIndex.value = (appImageIndex.value - 1 + appGalleryImages.length) % appGalleryImages.length
}
const showNextApp = () => {
  appImageIndex.value = (appImageIndex.value + 1) % appGalleryImages.length
}
</script>

<template>
  <div class="thesis-page">


    <!-- ① HERO -->
    <section class="section-outer" aria-labelledby="thesis-hero">
      <div class="section-body">
        <!-- <h2 id="thesis-hero" class="section-tag">① Hero</h2> -->
        <div class="grid-hero">
          <div class="block block-tall hero-title-block">
            <p class="wf-title hero-main-title"> Light Redistribution of 3D-Printed Translucent Façades: <br />Automated Experiment and Machine Learning</p>

            <p class="wf-sub">Master Thesis ·
          Southeast University 2026<br />Supervised by Prof. Hao Hua
        </p>
          </div>
          <div class="block block-tall block-media">

            <div class="hero-img-row" role="group" aria-label="Hero images">
              <img
                v-for="(img, i) in heroImages"
                :key="i"
                :src="img.src"
                :alt="img.alt"
                loading="eager"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <!-- ② CONTEXT & MOTIVATION -->
    <section class="section-outer" aria-labelledby="thesis-problem">
      <div class="section-body">
        <h2 id="thesis-problem" class="section-tag">why this matters</h2>
        <div class="grid-problem">
          <div class="block block-short">
            <p class="wf-title">Daylight Modulation Interface</p>
            <p class="wf-sub">Facades mediate indoor daylight quality</p>
            <div class="img-slot" aria-label="Image placeholder" />
          </div>
          <div class="block block-short">
            <p class="wf-title">Material Optical Behavior</p>
            <p class="wf-sub">3D-printed thermoplastic facade (3DPTF)'s angular dependent optical behavior</p>
            <div class="img-slot" aria-label="Image placeholder" />
          </div>
          <div class="block block-short">
            <p class="wf-title">Design Decision Support</p>
            <p class="wf-sub">Geometry–light mapping guides facade design choices</p>
            <div class="img-slot" aria-label="Image placeholder" />
          </div>
        </div>
      </div>
    </section>

    <!-- ③ RESEARCH CHAIN -->
    <section class="section-outer" aria-labelledby="thesis-chain">
      <div class="section-body">
        <h2 id="thesis-chain" class="section-tag">Research Proposal</h2>
        <div class="block block-chain">
          <img
            class="chain-image"
            :src="publicUrl('images/r1_proposal.png')"
            alt="Research chain proposal diagram"
          />
        </div>
      </div>
    </section>

    <!-- ④ EXPERIMENTAL SYSTEM -->
    <section class="section-outer" aria-labelledby="thesis-lab">
      <div class="section-body">
        <h2 id="thesis-lab" class="section-tag">① ② Experimental system — pipeline </h2>
        <div class="exp-grid">
          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num phase-num-amber">① Design &amp; Fabrication</div>
              <div class="phase-title">From parameters to physical samples</div>
            </div>
            <div class="phase-body">
              <div class="exp-photo-row" style="margin-bottom:10px;">
                <div class="exp-photo-item">
                  <img
                    class="exp-photo"
                    :src="publicUrl('dist/images/re12.png')"
                    alt="Printed sample parameter study"
                  />
                  <div class="step">

                    <div class="step-content">
                      <div class="step-label">Parameter space definition</div>
                      <div class="step-desc">Sine path: frequency parameter n, phase parameter p</div>
                    </div>
                  </div>
                </div>
                <div class="exp-photo-item">
                  <img
                    class="exp-photo"
                    :src="publicUrl('dist/images/DSC02175.JPG')"
                    alt="FGF 3D printing setup"
                  />
                  <div class="step">

                    <div class="step-content">
                      <div class="step-label">FGF 3D printing</div>
                      <div class="step-desc">Fused Granulate Fabrication, PCTG material</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num phase-num-blue">② Experiment &amp; Data Collection</div>
              <div class="phase-title">Robotic HDR luminance capture</div>
            </div>
            <div class="phase-body">
              <div class="exp-photo-row" style="margin-bottom:10px;">
                <div class="exp-photo-item">
                  <img
                    class="exp-photo"
                    :src="publicUrl('dist/images/re13.png')"
                    alt="KUKA arm and rotating light source setup"
                  />
                  <div class="steps">
                    <div class="step">

                      <div class="step-content">
                        <div class="step-label">Automated robotic measurement</div>
                        <div class="step-desc">Robot motion simulates the relative positions of sunlight, facade, and viewing angle.</div>
                      </div>
                    </div>
                    <!-- <div class="step">
                      <div class="step-num num-blue">5</div>
                      <div class="step-content">
                        <div class="step-label">Multi-angle incident light</div>
                        <div class="step-desc">Azimuth × altitude grid — simulates sun positions across seasons</div>
                      </div>
                    </div> -->
                  </div>
                </div>
                <div class="exp-photo-item">
                  <img
                    class="exp-photo"
                    :src="publicUrl('dist/images/re14.png')"
                    alt="Luminance experiment setup detail"
                  />
                  <div class="step">

                    <div class="step-content">
                      <div class="step-label">HDR luminance image capture</div>
                      <div class="step-desc">Multi-exposure bracketing → hdrgen synthesis → calibrated luminance maps</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- ⑤ Feature Extraction -->
    <section class="section-outer" aria-labelledby="thesis-feature">
      <div class="section-body">
        <h2 id="thesis-feature" class="section-tag">③ Feature Extraction</h2>
        <div class="grid-feature">
          <div class="block block-feature">
            
            <div class="grid-feature-types">
              <div class="block block-feature-type">
                <p class="wf-title">FFT Frequency Features</p>
                <p class="wf-sub">Low-/high-frequency energy ratio, dominant direction, anisotropy index describe smoothness, scattering intensity, and directional preference.</p>
              </div>
              <div class="block block-feature-type">
                <p class="wf-title">GLCM Texture Features</p>
                <p class="wf-sub">Contrast, correlation, entropy quantify local luminance variation, directional continuity, and spatial complexity.</p>
              </div>
              <div class="block block-feature-type">
                <p class="wf-title">Brightness Statistics</p>
                <p class="wf-sub">Mean, standard deviation, kurtosis measure transmission level, uniformity, and concentration of bright regions.</p>
              </div>
            </div>
            <div class="feature-gallery">
              <button class="feature-nav-btn" type="button" @click="showPrevFeature" aria-label="Previous feature image">
                ‹
              </button>
              <img
                class="feature-img"
                :src="featureGalleryImages[featureImageIndex].src"
                :alt="featureGalleryImages[featureImageIndex].alt"
              />
              <button class="feature-nav-btn" type="button" @click="showNextFeature" aria-label="Next feature image">
                ›
              </button>
            </div>
            <div class="feature-gallery-dotline" aria-hidden="true">
              <span
                v-for="(_, i) in featureGalleryImages"
                :key="i"
                class="feature-dot"
                :class="{ active: i === featureImageIndex }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑤ ML PIPELINE -->
    <section class="section-outer" aria-labelledby="thesis-ml">
      <div class="section-body">
        <h2 id="thesis-ml" class="section-tag">④ ML pipeline — three-stage model</h2>
        <div class="grid-ml">
          <div class="block block-ml">
            <p class="wf-title">Geometry parameters → optical profile</p>
            <p class="wf-sub">Gaussian Process Regression (GPR)</p>
            <div class="img-slot img-slot-sm" aria-label="Image placeholder" />
          </div>
          <div class="block block-ml">
            <p class="wf-title">Geometry parameters + angular parameters → optical features</p>
            <p class="wf-sub"> Multi-Layer Perceptron (MLP)</p>
            <div class="img-slot img-slot-sm" aria-label="Image placeholder" />
          </div>
          <div class="block block-ml">
            <p class="wf-title">Geometry parameters + angular parameters → luminance image</p>
            <p class="wf-sub"> CAE + MLP</p>
            <div class="img-slot img-slot-sm" aria-label="Image placeholder" />
          </div>
        </div>

      </div>
    </section>

    <!-- ⑥ KEY RESULTS -->
    <section class="section-outer" aria-labelledby="thesis-results">
      <div class="section-body">
        <h2 id="thesis-results" class="section-tag">⑤ Key results — what the model learned</h2>
        <div class="grid-results-top">
          <div class="block block-result">
            <p class="wf-title">Sensitivity analysis</p>

            <p class="wf-sub">3 behavioral types visualized · Scatter plot / HDR thumbnails</p>
            <div class="result-gallery">
              <button class="feature-nav-btn" type="button" @click="showPrevSensitivity" aria-label="Previous sensitivity figure">
                ‹
              </button>
              <img
                class="result-gallery-img"
                :src="sensitivityGalleryImages[sensitivityImageIndex].src"
                :alt="sensitivityGalleryImages[sensitivityImageIndex].alt"
              />
              <button class="feature-nav-btn" type="button" @click="showNextSensitivity" aria-label="Next sensitivity figure">
                ›
              </button>
            </div>
            <div class="feature-gallery-dotline" aria-hidden="true">
              <span
                v-for="(_, i) in sensitivityGalleryImages"
                :key="`s-${i}`"
                class="feature-dot"
                :class="{ active: i === sensitivityImageIndex }"
              />
            </div>
          </div>
          <div class="block block-result">
            <p class="wf-title">Optical behavior prediction</p>
            <div class="result-gallery">
              <button class="feature-nav-btn" type="button" @click="showPrevPrediction" aria-label="Previous prediction figure">
                ‹
              </button>
              <img
                class="result-gallery-img"
                :src="predictionGalleryImages[predictionImageIndex].src"
                :alt="predictionGalleryImages[predictionImageIndex].alt"
              />
              <button class="feature-nav-btn" type="button" @click="showNextPrediction" aria-label="Next prediction figure">
                ›
              </button>
            </div>
            <div class="feature-gallery-dotline" aria-hidden="true">
              <span
                v-for="(_, i) in predictionGalleryImages"
                :key="`p-${i}`"
                class="feature-dot"
                :class="{ active: i === predictionImageIndex }"
              />
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ⑦ APPLICATION -->
    <section class="section-outer" aria-labelledby="thesis-app">
      <div class="section-body">
        <h2 id="thesis-app" class="section-tag">⑥ Application — Nanjing facade glare control</h2>
        <div class="grid-app">
          <div class="block block-app-main">
            <p class="wf-title">West-facing facade design</p>

            <div class="app-flow-list">
              <div class="app-flow-item">
                <p class="app-flow-title">1) Design framework </p>
                <p class="app-flow-desc">Climate data input → parameter optimization → dynamic validation (data-driven closed loop).</p>
              </div>
              <div class="app-flow-item">
                <p class="app-flow-title">2) Parameter optimization</p>
                <p class="app-flow-desc">Heatmap ranks geometry space (n, p) and highlights global optimum (n=5, p=1.2).</p>
              </div>
              <div class="app-flow-item">
                <p class="app-flow-title">3) Seasonal performance check</p>
                <p class="app-flow-desc">Summer/winter feature curves verify anisotropy and mean luminance improvement.</p>
              </div>
              <div class="app-flow-item">
                <p class="app-flow-title">4) Visual scene comparison</p>
                <p class="app-flow-desc">HDR scenes show softened summer glare and preserved winter daylight transmission.</p>
              </div>
            </div>
          </div>
          <div class="block stack-app app-gallery-panel">
            <div class="result-gallery app-result-gallery">
              <button class="feature-nav-btn" type="button" @click="showPrevApp" aria-label="Previous application figure">
                ‹
              </button>
              <img
                class="result-gallery-img app-gallery-img"
                :src="appGalleryImages[appImageIndex].src"
                :alt="appGalleryImages[appImageIndex].alt"
              />
              <button class="feature-nav-btn" type="button" @click="showNextApp" aria-label="Next application figure">
                ›
              </button>
            </div>
            <p class="app-gallery-caption">{{ appGalleryImages[appImageIndex].caption }}</p>
            <div class="feature-gallery-dotline" aria-hidden="true">
              <span
                v-for="(_, i) in appGalleryImages"
                :key="`a-${i}`"
                class="feature-dot"
                :class="{ active: i === appImageIndex }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑧ ABOUT + LINKS -->
    <!-- <section class="section-outer" aria-labelledby="thesis-about">
      <div class="section-body">
        <h2 id="thesis-about" class="section-tag">⑧ About + links</h2>
        <div class="grid-about">
          <div class="block block-about">
            <p class="wf-title">Harper Yuan Zhang</p>
            <p class="wf-sub">MArch · Southeast Univ.<br />Lab of Arch. Algorithms</p>
          </div>
          <div class="block block-about">
            <p class="wf-title">Links</p>
            <p class="wf-sub">Paper (eCAADe 2025) · GitHub · Personal site</p>
          </div>
          <div class="block block-about">
            <p class="wf-title">Contact</p>
            <p class="wf-sub">Email · LinkedIn · Open for opportunities</p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.thesis-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.thesis-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  opacity: 0.65;
  margin: 0 0 0.25rem;
}

.thesis-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
  font-size: 0.65rem;
  color: var(--color-text);
  opacity: 0.75;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
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

.wf-caption {
  font-size: 0.7rem;
  margin: 0.25rem 0 0.5rem;
  opacity: 0.7;
}

.block {
  background: var(--color-background-mute);
  border: none;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content:center;
  text-align: left;
  min-height: 0;
}

.block-tall {
  min-height: 5.5rem;
}

.block-short {
  min-height: 4rem;
}

.block-media {
  position: relative;
  padding: 0.25rem 0.15rem 0.15rem;
  min-height: 0;
}

.hero-img-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5.5rem, 1fr));
  gap: 0.4rem;
  margin-top: 0.2rem;
  min-width: 0;
  width: 100%;
  max-width: 100%;
}

/* 仅用列宽限制宽度，高度随源图比例（width/height 不变形） */
.hero-img-row img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.img-slot {
  margin-top: 0.5rem;
  min-height: 3rem;
  border: none;
  border-radius: 4px;
  background: var(--color-background);
  flex: 1;
}

.img-slot-wide {
  min-height: 4rem;
}

.img-slot-sm {
  min-height: 2.25rem;
  margin-top: 0.4rem;
}

.img-slot-app,
.img-slot-before,
.img-slot-after {
  min-height: 3.5rem;
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

.hero-main-title {
  font-size: 2rem;

}



.hero-title-block .wf-sub {
  text-align: left;
  width: 100%;
}

.grid-problem {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
}

.block-chain {
  min-height: 3.25rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.75rem;
}

.chain-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.chain-text {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--color-heading);
  margin: 0;
}

.chain-highlight {
  color: #378add;
  font-weight: 600;
}

.bar {
  border: none;
  border-radius: 6px;
  background: var(--color-background-mute);
  padding: 0.45rem 0.6rem;
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--color-text);
  margin: 0;
}

.bar-sub {
  min-height: 1.75rem;
  display: flex;
  align-items: center;
}

.bar-meta {
  margin-top: 0.4rem;
  text-align: center;
}

.bar-compact {
  font-size: 0.7rem;
  margin-bottom: 0.25rem;
}

.grid-lab {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.4rem;
  margin-bottom: 0.25rem;
}

.grid-lab-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
}

.block-lab-main {
  min-height: 5rem;
}

.block-lab-tile {
  min-height: 5rem;
}

.exp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  align-items: start;
}

.phase-card {
  border-radius: 6px;
  background: var(--color-background);
  overflow: hidden;
}

.phase-header {
  padding: 10px 14px 8px;
}

.phase-num {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  margin-bottom: 2px;
}

.phase-num-amber { color: #854f0b; }
.phase-num-blue { color: #0c447c; }

.phase-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-heading);
}

.phase-body { padding: 10px 14px 12px; }

.steps {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.step-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  flex-shrink: 0;
  margin-top: 1px;
}

.step-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-heading);
  line-height: 1.3;
}

.step-desc {
  font-size: 11px;
  color: var(--color-text);
  opacity: 0.85;
  margin-top: 2px;
  line-height: 1.4;
}

.num-amber { background: #faeeda; color: #633806; }
.num-blue { background: #e6f1fb; color: #0c447c; }

.step-arrow {
  font-size: 11px;
  color: var(--color-text);
  opacity: 0.75;
  padding-left: 30px;
  margin: -2px 0;
}

.img-ph {
  background: var(--color-background-soft);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: var(--color-text);
  opacity: 0.85;
  text-align: center;
  line-height: 1.5;
  padding: 0 8px;
}

.exp-photo-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
}

.exp-photo-item {
  width: calc(50% - 15px);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.exp-photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  height: auto;
  display: block;
  border-radius: 6px;
  object-fit: cover;
}

.stats {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.stat {
  background: var(--color-background-soft);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 11px;
  color: var(--color-text);
  opacity: 0.85;
}

.stat strong {
  font-weight: 600;
  color: var(--color-heading);
  opacity: 1;
}

.connector {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--color-text);
  opacity: 0.75;
  padding: 0;
}

.three-col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.grid-feature {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
}

.block-feature {
  gap: 0.8rem;
}

.grid-feature-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
}

.block-feature-type {
  min-height: 6rem;
  gap: 0.2rem;
  padding-top: 0.55rem;
  padding-bottom: 0.55rem;
}

.feature-gallery {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.4rem;
  align-items: center;
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

.feature-img {
  width: 100%;
  height: clamp(220px, 30vw, 420px);
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

.grid-ml {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
  margin-bottom: 0.25rem;
}

.block-ml {
  min-height: 4.5rem;
  padding-top: 0.5rem;
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

.result-gallery-img {
  width: 100%;
  height: clamp(240px, 34vw, 460px);
  object-fit: contain;
  border-radius: 6px;
  display: block;
  background: var(--color-background-soft);
}

.grid-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
  text-align: center;
}

.block-stat {
  min-height: 2.75rem;
  justify-content: center;
  align-items: center;
}

.block-stat-highlight {
  background: color-mix(in srgb, #378add 12%, var(--color-background-mute));
}

.stat-number {
  font-size: 1.15rem;
  font-weight: 600;
  color: #378add;
  margin: 0 0 0.15rem;
}

.block-stat:not(.block-stat-highlight) .stat-number {
  color: var(--color-heading);
}

.grid-app {
  display: grid;
  grid-template-columns: 1.05fr 1.35fr;
  gap: 0.55rem;
}

.block-app-main {
  min-height: 100%;
}

.stack-app {
  gap: 0.35rem;
}

.app-flow-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.45rem;
}

.app-flow-item {
  background: var(--color-background-soft);
  border-radius: 6px;
  padding: 0.45rem 0.55rem;
}

.app-flow-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0 0 0.15rem;
}

.app-flow-desc {
  font-size: 0.74rem;
  line-height: 1.42;
  color: var(--color-text);
  opacity: 0.86;
  margin: 0;
}

.app-gallery-panel {
  justify-content: flex-start;
}

.app-result-gallery {
  margin-top: 0;
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

.grid-about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
}

.block-about {
  min-height: 3.5rem;
}

@media (max-width: 720px) {
  .grid-hero,
  .grid-problem,
  .grid-lab,
  .grid-lab-right,
  .exp-grid,
  .three-col,
  .grid-feature-types,
  .grid-ml,
  .grid-results-top,
  .grid-stats,
  .grid-app,
  .grid-about {
    grid-template-columns: 1fr;
  }

  .exp-photo {
    width: 100%;
  }

  .exp-photo-item {
    width: 100%;
  }

  .block-lab-tile {
    min-height: 4rem;
  }
}
</style>
