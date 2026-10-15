import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector('#app')
app.innerHTML = `
  <!-- ================= ACCESSIBILITY: SKIP LINK ================= -->
  <a href="#prologue" class="skip-link">Skip to main content</a>

  <!-- ================= SITE HEADER ================= -->
  <header class="site-header" role="banner">
    <a href="#prologue" class="site-wordmark" aria-label="BLEACH home">
      <span class="wordmark-bleach">BLEACH</span>
      <span class="wordmark-jp">黒崎一護 • 死神代行篇</span>
    </a>

    <div class="header-resonance" aria-label="Reiatsu resonance level">
      <div class="eq-bars" aria-hidden="true">
        <span class="eq-bar eq-bar-1"></span>
        <span class="eq-bar eq-bar-2"></span>
        <span class="eq-bar eq-bar-3"></span>
        <span class="eq-bar eq-bar-4"></span>
        <span class="eq-bar eq-bar-5"></span>
      </div>
      <span class="resonance-label">REIATSU RESONANCE : 88.4 kHz</span>
    </div>

    <div class="header-active-badge" aria-live="polite">
      <span class="badge-num" id="header-act-num">ACT 01</span>
      <span class="badge-sep">/</span>
      <span class="badge-name" id="header-act-name">THE SUBSTITUTE</span>
    </div>

    <nav class="header-nav" aria-label="Main navigation">
      <button 
        id="open-chapters-btn" 
        class="chapter-btn" 
        type="button" 
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="chapter-modal"
        aria-label="Open chapters navigation menu"
      >
        <span class="chapter-dot" aria-hidden="true"></span>
        <span class="chapter-btn-label">CHAPTERS</span>
        <span class="font-mono text-bone-muted" id="header-chapter-count" style="font-size: 0.625rem;">01 / 07</span>
      </button>
    </nav>
  </header>

  <!-- ================= VERTICAL DOCKED NAVIGATION ================= -->
  <aside class="scene-dock" aria-label="Quick scene jumper">
    <span class="writing-vertical font-mono text-bone-muted" style="font-size: 0.625rem; letter-spacing: 0.3em; opacity: 0.5;">SCENE NAVIGATION</span>
    <div class="scene-dock-line" aria-hidden="true"></div>
    <div class="dock-items" role="navigation" aria-label="Chapter quick links">
      <a href="#prologue" class="dock-item active" data-dock="prologue" aria-label="Go to Chapter 01: The Substitute">
        <span class="dock-num">01</span>
        <div class="dock-pip"></div>
      </a>
      <a href="#the-blade" class="dock-item" data-dock="the-blade" aria-label="Go to Chapter 02: The Blade">
        <span class="dock-num">02</span>
        <div class="dock-pip"></div>
      </a>
      <a href="#hollow-within" class="dock-item" data-dock="hollow-within" aria-label="Go to Chapter 03: The Hollow Within">
        <span class="dock-num">03</span>
        <div class="dock-pip"></div>
      </a>
      <a href="#bankai" class="dock-item" data-dock="bankai" aria-label="Go to Chapter 04: Bankai">
        <span class="dock-num">04</span>
        <div class="dock-pip"></div>
      </a>
      <a href="#final-getsuga" class="dock-item" data-dock="final-getsuga" aria-label="Go to Chapter 05: The Final Getsuga">
        <span class="dock-num">05</span>
        <div class="dock-pip"></div>
      </a>
      <a href="#final-form" class="dock-item" data-dock="final-form" aria-label="Go to Chapter 06: The Final Form">
        <span class="dock-num">06</span>
        <div class="dock-pip"></div>
      </a>
      <a href="#epilogue" class="dock-item" data-dock="epilogue" aria-label="Go to Chapter 07: Epilogue">
        <span class="dock-num">07</span>
        <div class="dock-pip"></div>
      </a>
    </div>
    <div class="scene-dock-line" aria-hidden="true"></div>
    <span id="scroll-percentage" class="font-mono text-crimson" style="font-size: 0.625rem;" aria-label="Scroll percentage">00%</span>
  </aside>

  <!-- ================= SCROLL CUE ================= -->
  <div class="scroll-cue" id="scroll-cue" aria-hidden="true">
    <span class="scroll-cue-txt">SCROLL TO AWAKEN</span>
    <div class="scroll-cue-pill">
      <div class="scroll-cue-dot"></div>
    </div>
  </div>

  <!-- ================= MAIN SCROLL CONTAINER ================= -->
  <main id="main-content">
    <!-- ACT 01: THE SUBSTITUTE (HERO POSTER COMPOSITION) -->
    <section id="prologue" class="scene-hero scene-section" data-scene="prologue" aria-labelledby="hero-main-title">
      <div class="scene-kanji-watermark" aria-hidden="true">
        <span>死神代行</span>
      </div>

      <div class="hero-editorial-grid">
        <div class="hero-content">
          <div class="hero-meta-kicker">
            <span class="kicker-line" aria-hidden="true"></span>
            <span class="kicker-title">ACT 01 / THE SUBSTITUTE</span>
            <span class="text-bone-muted" style="opacity: 0.4; font-size: 0.75rem;" aria-hidden="true">|</span>
            <span class="kicker-sub">VOL. 01 — DEATH & STRAWBERRY</span>
          </div>

          <h1 id="hero-main-title" class="hero-title">
            <span class="hero-title-line line-1" style="display: block;">THE HOLLOW</span>
            <span class="hero-title-line line-2 hero-title-highlight" style="display: block;">WITHIN</span>
          </h1>
          <div class="hero-blood-slash" aria-hidden="true"></div>

          <p class="hero-tagline">
            A soul divided. A blade awakened. <br>A destiny rewritten.
          </p>

          <p class="hero-synopsis">
            Beneath the porcelain bone mask lies the primordial instinct of destruction. He who wields the black cleaver must tame the beast residing inside his chest, or drown in absolute shadow.
          </p>

          <div class="hero-actions">
            <a href="#the-blade" class="btn-primary-journey">
              <span>BEGIN THE JOURNEY</span>
              <span aria-hidden="true" style="font-size: 1rem;">→</span>
              <span class="btn-corner-accent" aria-hidden="true"></span>
            </a>
          </div>

          <div class="hero-specs-grid" aria-label="Wielder and blade specifications">
            <div>
              <div class="spec-lbl">WIELDER</div>
              <div class="spec-val">ICHIGO K.</div>
              <div class="spec-jp">黒崎 一護</div>
            </div>
            <div>
              <div class="spec-lbl">ZANPAKUTO</div>
              <div class="spec-val">ZANGETSU</div>
              <div class="spec-jp" style="color: var(--color-bone-muted);">斬月 (常時解放)</div>
            </div>
            <div>
              <div class="spec-lbl">CLASSIFICATION</div>
              <div class="spec-val">HOLLOW HYBRID</div>
              <div class="font-mono text-reiatsu" style="font-size: 0.625rem;">REIATSU S-RANK</div>
            </div>
          </div>
        </div>

        <div class="editorial-poster-card">
          <div class="poster-media-frame">
            <img 
              src="/assets/official/main_01.jpg" 
              alt="Ichigo Kurosaki wielding Tensa Zangetsu over vibrant orange backdrop — Official TYBW Teaser Visual" 
              class="poster-media-img"
              width="1000"
              height="1414"
              loading="eager"
              fetchpriority="high"
            />
            <div class="slit-tl" aria-hidden="true"></div>
            <div class="slit-br" aria-hidden="true"></div>
          </div>
          <div class="poster-caption-bar">
            <div class="caption-left">
              <span class="spec-lbl text-crimson">KEY VISUAL 01 • TEASER POSTER</span>
              <p class="font-mono text-bone-muted text-xs">OFFICIAL ANIME PRODUCTION ARTWORK</p>
            </div>
            <div class="caption-right">
              <span class="spec-lbl">SOURCE DIMS</span>
              <p class="font-mono text-bone text-xs">1000 &times; 1414</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACT 02: THE BLADE (ZANGETSU MODEL & CONSTANT RELEASE) -->
    <section id="the-blade" class="scene-the-blade scene-section" data-scene="the-blade" aria-labelledby="blade-heading">
      <div class="scene-kanji-watermark" aria-hidden="true">
        <span>常時解放</span>
      </div>

      <div class="blade-layout-grid">
        <div class="blade-character-showcase">
          <span class="blade-badge-floating">PRODUCTION MODEL SHEET • CH-01</span>
          <img 
            src="/assets/official/chara_01.png" 
            alt="Official anime production turnaround of Ichigo Kurosaki in Shihakusho with wrapped Zangetsu broadsword" 
            class="blade-model-img"
            width="1050"
            height="1500"
            loading="lazy"
            decoding="async"
          />
          <div class="slit-tl" aria-hidden="true"></div>
          <div class="slit-br" aria-hidden="true"></div>
        </div>

        <div class="chapter-copy-wrap">
          <div class="act-kicker">
            <span class="act-kicker-badge">ACT 02</span>
            <span class="act-kicker-bar" aria-hidden="true"></span>
            <span class="spec-lbl" style="font-size: 0.625rem; letter-spacing: 0.2em;">THE FIRST AWAKENING</span>
          </div>

          <h2 id="blade-heading" class="chapter-heading">
            THE BLADE <br>
            <span class="text-crimson">ZANGETSU</span>
          </h2>

          <blockquote class="chapter-quote">
            "Abandon your fear. Look forward. Move forward. Never stop. Retreat and you will age. Hesitate and you will die."
          </blockquote>

          <p class="chapter-desc">
            Unlike other soul reapers whose Zanpakuto remain sealed within scabbards, Ichigo's blade exists in a state of eternal liberation. A colossal cleaver wrapped in white funeral bandages, radiating obsidian spirit energy that bends the surrounding air.
          </p>

          <div class="chapter-tech-list">
            <div class="tech-item">
              <div class="tech-head">
                <span class="tech-name">01 / SHIKAI : CONSTANT RELEASE</span>
                <span class="tech-badge">ACTIVE</span>
              </div>
              <p class="tech-desc">Forged directly from overflowing spiritual pressure; no sheath can contain its raw density.</p>
            </div>

            <div class="tech-item secondary">
              <div class="tech-head">
                <span class="tech-name">02 / GETSUGA TENSHO : MOON FANG</span>
                <span class="tech-badge">COMPRESSION</span>
              </div>
              <p class="tech-desc">Compresses reiatsu along the razor edge and releases it as a crescent wave capable of cleaving the horizon.</p>
            </div>
          </div>

          <div>
            <a href="#hollow-within" class="btn-primary-journey">
              <span>ACT 03 : THE HOLLOW WITHIN →</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ACT 03: THE HOLLOW WITHIN (AUDITED GENEALOGICAL ORIGIN STILL) -->
    <section id="hollow-within" class="scene-hollow-within scene-section" data-scene="hollow-within" aria-labelledby="hollow-heading">
      <div class="scene-kanji-watermark" aria-hidden="true">
        <span>虚の咆哮</span>
      </div>

      <div class="hollow-layout-grid">
        <div class="chapter-copy-wrap">
          <div class="act-kicker">
            <span class="act-kicker-badge">ACT 03</span>
            <span class="act-kicker-bar" aria-hidden="true"></span>
            <span class="spec-lbl" style="font-size: 0.625rem; letter-spacing: 0.2em;">HEREDITARY GENESIS & INNER WORLD</span>
          </div>

          <h2 id="hollow-heading" class="chapter-heading">
            THE HOLLOW <br>
            <span class="text-crimson">WITHIN</span>
          </h2>

          <blockquote class="chapter-quote">
            "What is the difference between the king and his horse? Instinct. Only those who thirst for battle hold the crown."
          </blockquote>

          <p class="chapter-desc">
            Deep within the submerged, upside-down skyscrapers of Ichigo's soul lurks White—the feral hollow manifestation born of Masaki's tragedy and Aizen's dark experiments. When the bone mask locks onto Ichigo's face, his strength multiplies exponentially, tinged with merciless bloodlust.
          </p>

          <div class="context-clarification-box">
            <span class="font-mono text-crimson font-bold text-xs" style="display: block; margin-bottom: 0.25rem;">NARRATIVE NOTE:</span>
            Before the bone mask ever manifested in Karakura Town, the inner beast entered Ichigo's soul through the infection of his mother Masaki by the experimental Hollow "White" in the rain.
          </div>

          <div class="chapter-tech-list" style="margin-top: 1.5rem;">
            <div class="tech-item">
              <div class="tech-head">
                <span class="tech-name">01 / HOLLOW MASK SYNTHESIS</span>
                <span class="tech-badge">FERAL</span>
              </div>
              <p class="tech-desc">Bone armor manifests over the face; speed, physical resilience, and spiritual density skyrocket instantly.</p>
            </div>

            <div class="tech-item secondary">
              <div class="tech-head">
                <span class="tech-name">02 / KUROI GETSUGA : BLACK FANG</span>
                <span class="tech-badge" style="color: var(--color-crimson);">CRIMSON ARCS</span>
              </div>
              <p class="tech-desc">The Hollow's signature technique adopted by Ichigo—pitch-black reiatsu edged with volatile crimson arcs.</p>
            </div>
          </div>

          <div>
            <a href="#bankai" class="btn-primary-journey">
              <span>ACT 04 : BANKAI →</span>
            </a>
          </div>
        </div>

        <div class="editorial-widescreen-card">
          <div class="widescreen-media-frame">
            <img 
              src="/assets/official/stills/ep12_01.jpg" 
              alt="Masaki Kurosaki afflicted by the Hollow infection from White in Episode 12 'Everything But the Rain', the hereditary source of Ichigo's inner Hollow." 
              class="widescreen-media-img"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
            />
            <div class="slit-tl" aria-hidden="true"></div>
            <div class="slit-br" aria-hidden="true"></div>
          </div>
          <div class="poster-caption-bar">
            <div class="caption-left">
              <span class="spec-lbl text-crimson">GENEALOGICAL ORIGIN • EPISODE 12 BROADCAST STILL</span>
              <p class="font-mono text-bone-muted text-xs">MASAKI AFFLICTED BY "WHITE" (BLEACH TYBW COUR 1)</p>
            </div>
            <div class="caption-right">
              <span class="spec-lbl">RATIO</span>
              <p class="font-mono text-bone text-xs">16:9 HD</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACT 04: BANKAI (CINEMATIC ANAMORPHIC SEQUENCE) -->
    <section id="bankai" class="scene-bankai scene-section" data-scene="bankai" aria-labelledby="bankai-heading">
      <div class="scene-kanji-watermark" aria-hidden="true">
        <span>天鎖斬月</span>
      </div>

      <div class="bankai-cinematic-container">
        <div class="act-kicker">
          <span class="act-kicker-badge">ACT 04</span>
          <span class="act-kicker-bar" aria-hidden="true"></span>
          <span class="spec-lbl" style="font-size: 0.625rem; letter-spacing: 0.25em;">FULL-SCREEN CINEMATIC REVEAL</span>
        </div>

        <div class="bankai-theater-box" id="bankai-theater">
          <div class="bankai-letterbox-top" aria-hidden="true"></div>
          <img 
            src="/assets/official/stills/ep01_01.jpg" 
            alt="Ichigo Kurosaki entering battle with black Bankai spiritual pressure swirling — Official Episode 01 Still" 
            class="bankai-theater-img"
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
          />
          <div class="bankai-letterbox-bottom" aria-hidden="true"></div>

          <div class="bankai-banner-overlay">
            <span class="spec-lbl text-crimson" style="letter-spacing: 0.3em;">BAN—KAI • 卍解</span>
            <div id="bankai-heading" class="bankai-slash-title">TENSA ZANGETSU</div>
            <p class="font-mono text-bone-muted" style="font-size: 0.75rem;">EPISODE 01 BROADCAST FRAME • 1200 &times; 675</p>
          </div>
        </div>

        <div class="bankai-details-row">
          <div>
            <blockquote class="chapter-quote">
              "A Bankai so tiny? No. This is all of your spiritual pressure, compressed into a singular, razor-thin point of pure speed."
            </blockquote>
            <p class="chapter-desc" style="margin-bottom: 0;">
              Unlike the monstrous Bankai of Soul Society captains, Tensa Zangetsu condenses its colossal energy into a pitch-black katana with a broken manji chain. By compressing the totality of his power into a slender blade, Ichigo achieves velocity that defies visual perception.
            </p>
          </div>

          <div class="chapter-tech-list" style="margin-bottom: 0;">
            <div class="tech-item">
              <div class="tech-head">
                <span class="tech-name">01 / ALL-COMPRESSING REIATSU</span>
                <span class="tech-badge">CONDENSED</span>
              </div>
              <p class="tech-desc">The flowing black coat directly reflects the exact reserves of his spirit power.</p>
            </div>

            <div class="tech-item secondary">
              <div class="tech-head">
                <span class="tech-name">02 / HYPERSPEED BLINK (瞬歩無双)</span>
                <span class="tech-badge" style="color: var(--color-reiatsu);">ABSOLUTE SPEED</span>
              </div>
              <p class="tech-desc">Leaves afterimages across the battlefield, intercepting thousand-blade Senbonzakura petals with ease.</p>
            </div>
          </div>
        </div>

        <div>
          <a href="#final-getsuga" class="btn-primary-journey">
            <span>ACT 05 : THE FINAL GETSUGA →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ACT 05: THE FINAL GETSUGA (AUDITED MONOLITH & DISSOLUTION ARCHIVE) -->
    <section id="final-getsuga" class="scene-final-getsuga scene-section" data-scene="final-getsuga" aria-labelledby="getsuga-heading">
      <div class="scene-kanji-watermark" aria-hidden="true">
        <span>最後の月牙</span>
      </div>

      <div class="getsuga-monolith-container">
        <div class="getsuga-archival-card">
          <div class="act-kicker">
            <span class="act-kicker-badge">ACT 05</span>
            <span class="act-kicker-bar" aria-hidden="true"></span>
            <span class="spec-lbl" style="font-size: 0.625rem; letter-spacing: 0.2em;">THE ULTIMATE SACRIFICE</span>
          </div>

          <h2 id="getsuga-heading" class="chapter-heading">
            THE FINAL GETSUGA <br>
            <span class="text-crimson">TRANSCENDENCE</span>
          </h2>

          <blockquote class="chapter-quote">
            "By using this technique, I lose all of my Soul Reaper powers. That is why it is called the 'Final' Getsuga Tensho."
          </blockquote>

          <p class="chapter-desc">
            To surpass Aizen's godlike Hogyoku evolution, Ichigo underwent three months of relentless training in the Dangai precipice world, becoming Getsuga itself. In this transcendent state, long black hair cascades down his shoulders, face wrapped in gray wrappings, drawing down the veil of absolute night.
          </p>

          <div class="archival-disclaimer-pill">
            <span class="text-crimson font-bold">ARCHIVAL CLARIFICATION:</span>
            <span>The iconic Mugetsu form debuted in Episode 309 (Fake Karakura Town). The companion frame displayed here captures its spiritual mirror in TYBW Episode 13: Old Man Zangetsu dissolving into light particles as he surrenders control to Ichigo's true soul.</span>
          </div>

          <div style="margin-top: 2rem;">
            <a href="#final-form" class="btn-primary-journey">
              <span>ACT 06 : THE FINAL FORM →</span>
            </a>
          </div>
        </div>

        <div class="editorial-widescreen-card">
          <div class="widescreen-media-frame">
            <img 
              src="/assets/official/stills/ep13_05.jpg" 
              alt="Old Man Zangetsu dissolving into spirit particles in TYBW Episode 13 'The Blade is Me', representing the spiritual release that echoes the transcendence of Mugetsu." 
              class="widescreen-media-img"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
            />
            <div class="slit-tl" aria-hidden="true"></div>
            <div class="slit-br" aria-hidden="true"></div>
          </div>
          <div class="poster-caption-bar">
            <div class="caption-left">
              <span class="spec-lbl text-crimson">SPIRITUAL TRANSCENDENCE • EPISODE 13 BROADCAST STILL</span>
              <p class="font-mono text-bone-muted text-xs">THE DISSOLUTION OF ZANGETSU'S SPIRIT (TYBW COUR 1)</p>
            </div>
            <div class="caption-right">
              <span class="spec-lbl">RATIO</span>
              <p class="font-mono text-bone text-xs">16:9 HD</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACT 06: THE FINAL FORM (THE BLADE IS ME / DUAL BLADES) -->
    <section id="final-form" class="scene-final-form scene-section" data-scene="final-form" aria-labelledby="final-form-heading">
      <div class="scene-kanji-watermark" aria-hidden="true">
        <span>我が刃なり</span>
      </div>

      <div class="final-form-grid">
        <div class="editorial-poster-card">
          <div class="poster-media-frame">
            <img 
              src="/assets/official/main_04.jpg" 
              alt="The Blade is Me — Official TYBW Key Visual 03 showing Ichigo wielding dual Zangetsu in steam and flames" 
              class="poster-media-img"
              width="1000"
              height="1414"
              loading="lazy"
              decoding="async"
            />
            <div class="slit-tl" aria-hidden="true"></div>
            <div class="slit-br" aria-hidden="true"></div>
          </div>
          <div class="poster-caption-bar">
            <div class="caption-left">
              <span class="spec-lbl text-crimson">KEY VISUAL 03 • THE BLADE IS ME</span>
              <p class="font-mono text-bone-muted text-xs">DUAL ZANGETSU AWAKENED IN SPIRIT FLAMES</p>
            </div>
            <div class="caption-right">
              <span class="spec-lbl">SOURCE DIMS</span>
              <p class="font-mono text-bone text-xs">1000 &times; 1414</p>
            </div>
          </div>
        </div>

        <div class="chapter-copy-wrap">
          <div class="act-kicker">
            <span class="act-kicker-badge">ACT 06</span>
            <span class="act-kicker-bar" aria-hidden="true"></span>
            <span class="spec-lbl" style="font-size: 0.625rem; letter-spacing: 0.2em;">THE THOUSAND-YEAR BLOOD WAR</span>
          </div>

          <h2 id="final-form-heading" class="chapter-heading">
            THE FINAL FORM <br>
            <span class="text-crimson">DUAL BLADES</span>
          </h2>

          <blockquote class="chapter-quote">
            "I'm not asking for your help anymore. Nor will I tell you to get out of my way. Both of you are me. Zangetsu, you are me."
          </blockquote>

          <p class="chapter-desc">
            Forged by Oetsu Nimaiya from the depths of his true heritage, Ichigo accepts both the Old Man (Quincy power) and White (Hollow power) as his true blades. Embracing his complete identity, he manifests the True Shikai dual blades.
          </p>

          <div class="chapter-tech-list">
            <div class="tech-item">
              <div class="tech-head">
                <span class="tech-name">01 / DUAL ZANGETSU HARMONY</span>
                <span class="tech-badge">UNIFIED</span>
              </div>
              <p class="tech-desc">The broad cleaver channels inner hollow savagery; the smaller dagger channels Quincy precision.</p>
            </div>

            <div class="tech-item secondary">
              <div class="tech-head">
                <span class="tech-name">02 / GETSUGA JUJISHO : CROSS FANG</span>
                <span class="tech-badge" style="color: var(--color-crimson);">CROSS RELEASE</span>
              </div>
              <p class="tech-desc">Fuses crescent slashes from both blades into a colossal crossing vortex of spiritual energy.</p>
            </div>
          </div>

          <div class="combat-still-inset">
            <img 
              src="/assets/official/stills/ep21_01.jpg" 
              alt="Ichigo in battle with dual Zangetsu in Royal Guard attire — Official Episode 21 Still" 
              class="combat-still-thumbnail"
              width="120"
              height="68"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span class="spec-lbl text-reiatsu">ACTIVE COMBAT FRAME • EP 21</span>
              <p class="font-mono text-bone" style="font-size: 0.6875rem;">ROYAL GUARD ATTIRE & DUAL BLADE DRAW</p>
            </div>
          </div>

          <div style="margin-top: 1.5rem;">
            <a href="#epilogue" class="btn-primary-journey">
              <span>ACT 07 : EPILOGUE →</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ACT 07: EPILOGUE (THE HORIZON) -->
    <section id="epilogue" class="scene-epilogue scene-section" data-scene="epilogue" aria-labelledby="epilogue-heading">
      <div class="scene-kanji-watermark" aria-hidden="true">
        <span>戦いの果て</span>
      </div>

      <div class="epilogue-grid">
        <div class="chapter-copy-wrap">
          <div class="act-kicker">
            <span class="act-kicker-badge">ACT 07</span>
            <span class="act-kicker-bar" aria-hidden="true"></span>
            <span class="spec-lbl" style="font-size: 0.625rem; letter-spacing: 0.2em;">THE PROTECTOR'S VOW</span>
          </div>

          <h2 id="epilogue-heading" class="chapter-heading">
            EPILOGUE <br>
            <span class="text-crimson">THE HORIZON</span>
          </h2>

          <blockquote class="chapter-quote">
            "I don't fight because I want to win. I fight because I have to protect."
          </blockquote>

          <p class="chapter-desc">
            From an ordinary high schooler who could see spirits in Karakura Town to the protector of three realms. Ichigo never sought glory, godhood, or divine thrones—only the strength to shield those within reach of his blade.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem;">
            <a href="#prologue" id="replay-top-btn" class="btn-primary-journey" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem; text-align: center;">
              <span>↻ REPLAY THE JOURNEY FROM TOP</span>
            </a>
            <span class="font-mono text-bone-muted" style="font-size: 0.6875rem; opacity: 0.7;">THANK YOU FOR WALKING THROUGH THE SEVEN CHRONICLES</span>
          </div>
        </div>

        <div class="editorial-poster-card">
          <div class="poster-media-frame ratio-epilogue">
            <img 
              src="/assets/official/main_07.jpg" 
              alt="Ichigo, Rukia, Renji, and Byakuya descending into twilight — Official TYBW Key Visual 05" 
              class="poster-media-img"
              width="1000"
              height="1413"
              loading="lazy"
              decoding="async"
            />
            <div class="slit-tl" aria-hidden="true"></div>
            <div class="slit-br" aria-hidden="true"></div>
          </div>
          <div class="poster-caption-bar">
            <div class="caption-left">
              <span class="spec-lbl text-crimson">KEY VISUAL 05 • THE DESCENT</span>
              <p class="font-mono text-bone-muted text-xs">THE PROTECTOR'S RESOLVE (SEIREITEI TWILIGHT)</p>
            </div>
            <div class="caption-right">
              <span class="spec-lbl">SOURCE DIMS</span>
              <p class="font-mono text-bone text-xs">1000 &times; 1413</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- POEM INTERLUDE -->
    <section class="scene-quote-interlude" aria-label="Author poem interlude">
      <div style="max-width: 42rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
        <span class="spec-lbl text-crimson" style="letter-spacing: 0.3em;">BLEACH VOL. 08 POEM</span>
        <blockquote class="interlude-poem">
          "If I rust, I can never carve again.<br>
          If I lose my grip, I will cut myself.<br>
          <span class="text-crimson" style="font-weight: 400;">Yes, pride is like a blade.</span>"
        </blockquote>
        <cite class="font-mono text-bone-muted" style="font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;">— TITE KUBO</cite>
      </div>
    </section>
  </main>

  <!-- ================= SITE FOOTER (LEGAL & LICENSING TRANSPARENCY) ================= -->
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <span class="font-display text-bone" style="font-size: 2.25rem; letter-spacing: 0.15em;">BLEACH</span>
          <p class="font-mono text-bone-muted" style="font-size: 0.75rem; margin-top: 0.25rem;">THE HOLLOW WITHIN • AN INTERACTIVE SCROLLYTELLING ARCHIVE</p>
        </div>

        <div style="display: flex; gap: 1rem; align-items: center;">
          <a href="#prologue" class="btn-primary-journey" style="padding: 0.65rem 1.25rem; font-size: 0.6875rem;">
            <span>TOP OF ARCHIVE ↑</span>
          </a>
        </div>
      </div>

      <div class="footer-legal-box">
        <div class="footer-legal-title">COPYRIGHT & LICENSING NOTICE</div>
        <p>
          BLEACH and all related characters, trademarks, promotional key visuals, and production stills are the exclusive property of 
          <strong>© Tite Kubo / Shueisha, TV TOKYO, dentsu, Studio Pierrot</strong>.
        </p>
        <p style="margin-top: 0.5rem;">
          This website is an independent non-commercial fan tribute and technical front-end demonstration showcasing high-performance scrollytelling techniques (GSAP ScrollTrigger, Lenis, and modern responsive typography). 
          <strong>No commercial redistribution rights are claimed or granted.</strong> For official series releases, merchandise, and broadcasts, visit <a href="https://bleach-anime.com" target="_blank" rel="noopener noreferrer" style="color: var(--color-crimson); text-decoration: underline;">bleach-anime.com</a> and official authorized platforms.
        </p>
      </div>

      <div class="footer-bottom">
        <div class="font-mono text-bone-muted">
          <span>© TITE KUBO / SHUEISHA</span>
          <span style="margin: 0 0.5rem;">•</span>
          <span>TV TOKYO • DENTSU • PIERROT</span>
        </div>
        <div class="font-mono text-crimson">
          BLEACH 20TH ANNIVERSARY TRIBUTE
        </div>
      </div>
    </div>
  </footer>

  <!-- ================= CHAPTERS MODAL (ACCESSIBLE DIALOG) ================= -->
  <div 
    id="chapter-modal" 
    class="chapter-modal-overlay" 
    role="dialog" 
    aria-modal="true" 
    aria-labelledby="modal-nav-title" 
    aria-hidden="true"
  >
    <div class="chapter-modal-card">
      <button id="close-chapters-btn" class="modal-close-btn" type="button" aria-label="Close chapters navigation">
        [ CLOSE ✕ ]
      </button>

      <span class="spec-lbl text-crimson" style="letter-spacing: 0.3em;">NAVIGATION MAP</span>
      <h3 id="modal-nav-title" class="font-display text-bone" style="font-size: 2.5rem; margin: 0.5rem 0 1.5rem 0; letter-spacing: -0.02em;">SEVEN ACTS</h3>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;" role="list">
        <a href="#prologue" class="modal-nav-link" role="listitem" style="display: block; padding: 0.85rem 1rem; border: 1px solid var(--color-crimson); background: rgba(27, 28, 34, 0.4); text-decoration: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-mono text-crimson" style="font-size: 0.75rem; font-weight: bold;">01 / PROLOGUE</span>
            <span class="font-mono text-bone-muted" style="font-size: 0.625rem;">THE SUBSTITUTE</span>
          </div>
          <p class="font-display text-bone" style="font-size: 1.15rem; margin-top: 0.2rem; letter-spacing: 0.05em;">THE HOLLOW WITHIN</p>
        </a>

        <a href="#the-blade" class="modal-nav-link" role="listitem" style="display: block; padding: 0.85rem 1rem; border: 1px solid rgba(244, 244, 246, 0.2); background: rgba(27, 28, 34, 0.2); text-decoration: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-mono text-bone-muted" style="font-size: 0.75rem; font-weight: bold;">02 / CHAPTER TWO</span>
            <span class="font-mono text-reiatsu" style="font-size: 0.625rem;">UNLOCKED</span>
          </div>
          <p class="font-display text-bone" style="font-size: 1.15rem; margin-top: 0.2rem; letter-spacing: 0.05em;">THE BLADE : ZANGETSU</p>
        </a>

        <a href="#hollow-within" class="modal-nav-link" role="listitem" style="display: block; padding: 0.85rem 1rem; border: 1px solid rgba(244, 244, 246, 0.2); background: rgba(27, 28, 34, 0.2); text-decoration: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-mono text-bone-muted" style="font-size: 0.75rem; font-weight: bold;">03 / CHAPTER THREE</span>
            <span class="font-mono text-crimson" style="font-size: 0.625rem;">PRIMORDIAL</span>
          </div>
          <p class="font-display text-bone" style="font-size: 1.15rem; margin-top: 0.2rem; letter-spacing: 0.05em;">THE HOLLOW WITHIN</p>
        </a>

        <a href="#bankai" class="modal-nav-link" role="listitem" style="display: block; padding: 0.85rem 1rem; border: 1px solid rgba(244, 244, 246, 0.2); background: rgba(27, 28, 34, 0.2); text-decoration: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-mono text-bone-muted" style="font-size: 0.75rem; font-weight: bold;">04 / CHAPTER FOUR</span>
            <span class="font-mono text-reiatsu" style="font-size: 0.625rem;">HYPERSPEED</span>
          </div>
          <p class="font-display text-bone" style="font-size: 1.15rem; margin-top: 0.2rem; letter-spacing: 0.05em;">BANKAI : TENSA ZANGETSU</p>
        </a>

        <a href="#final-getsuga" class="modal-nav-link" role="listitem" style="display: block; padding: 0.85rem 1rem; border: 1px solid rgba(244, 244, 246, 0.2); background: rgba(27, 28, 34, 0.2); text-decoration: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-mono text-bone-muted" style="font-size: 0.75rem; font-weight: bold;">05 / CHAPTER FIVE</span>
            <span class="font-mono text-crimson" style="font-size: 0.625rem;">SACRIFICE</span>
          </div>
          <p class="font-display text-bone" style="font-size: 1.15rem; margin-top: 0.2rem; letter-spacing: 0.05em;">THE FINAL GETSUGA : MUGETSU</p>
        </a>

        <a href="#final-form" class="modal-nav-link" role="listitem" style="display: block; padding: 0.85rem 1rem; border: 1px solid rgba(244, 244, 246, 0.2); background: rgba(27, 28, 34, 0.2); text-decoration: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-mono text-bone-muted" style="font-size: 0.75rem; font-weight: bold;">06 / CHAPTER SIX</span>
            <span class="font-mono text-reiatsu" style="font-size: 0.625rem;">DUAL BLADES</span>
          </div>
          <p class="font-display text-bone" style="font-size: 1.15rem; margin-top: 0.2rem; letter-spacing: 0.05em;">THE FINAL FORM : THE BLADE IS ME</p>
        </a>

        <a href="#epilogue" class="modal-nav-link" role="listitem" style="display: block; padding: 0.85rem 1rem; border: 1px solid rgba(244, 244, 246, 0.2); background: rgba(27, 28, 34, 0.2); text-decoration: none;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-mono text-bone-muted" style="font-size: 0.75rem; font-weight: bold;">07 / CHAPTER SEVEN</span>
            <span class="font-mono text-crimson" style="font-size: 0.625rem;">DESTINY</span>
          </div>
          <p class="font-display text-bone" style="font-size: 1.15rem; margin-top: 0.2rem; letter-spacing: 0.05em;">EPILOGUE : THE HORIZON</p>
        </a>
      </div>
    </div>
  </div>
`

// --------------------------------------------------------------------------
// 1. Smooth Scrolling Engine Initialization (Lenis + GSAP Ticker)
// --------------------------------------------------------------------------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis = null
if (!prefersReducedMotion) {
  lenis = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}

// --------------------------------------------------------------------------
// 2. Active Scene HUD & Navigation Synchronization
// --------------------------------------------------------------------------
const chapterMetadata = {
  'prologue': { num: 'ACT 01', name: 'THE SUBSTITUTE', count: '01 / 07' },
  'the-blade': { num: 'ACT 02', name: 'THE BLADE', count: '02 / 07' },
  'hollow-within': { num: 'ACT 03', name: 'THE HOLLOW WITHIN', count: '03 / 07' },
  'bankai': { num: 'ACT 04', name: 'BANKAI : TENSA ZANGETSU', count: '04 / 07' },
  'final-getsuga': { num: 'ACT 05', name: 'THE FINAL GETSUGA', count: '05 / 07' },
  'final-form': { num: 'ACT 06', name: 'THE BLADE IS ME', count: '06 / 07' },
  'epilogue': { num: 'ACT 07', name: 'EPILOGUE : THE HORIZON', count: '07 / 07' },
}

const scenes = document.querySelectorAll('.scene-section')
const dockItems = document.querySelectorAll('.dock-item[data-dock]')
const headerActNum = document.querySelector('#header-act-num')
const headerActName = document.querySelector('#header-act-name')
const headerChapterCount = document.querySelector('#header-chapter-count')
const percentageEl = document.querySelector('#scroll-percentage')
const scrollCue = document.querySelector('#scroll-cue')

let currentActiveScene = 'prologue'

function setActiveScene(sceneId) {
  if (currentActiveScene === sceneId) return
  currentActiveScene = sceneId

  dockItems.forEach((item) => {
    if (item.getAttribute('data-dock') === sceneId) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

  const meta = chapterMetadata[sceneId]
  if (meta) {
    if (prefersReducedMotion) {
      if (headerActNum) headerActNum.textContent = meta.num
      if (headerActName) headerActName.textContent = meta.name
      if (headerChapterCount) headerChapterCount.textContent = meta.count
    } else {
      gsap.to([headerActNum, headerActName], {
        opacity: 0,
        y: -4,
        duration: 0.18,
        ease: 'power1.in',
        onComplete: () => {
          if (headerActNum) headerActNum.textContent = meta.num
          if (headerActName) headerActName.textContent = meta.name
          if (headerChapterCount) headerChapterCount.textContent = meta.count
          gsap.to([headerActNum, headerActName], {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
          })
        },
      })
    }
  }
}

scenes.forEach((scene) => {
  ScrollTrigger.create({
    trigger: scene,
    start: 'top 50%',
    end: 'bottom 50%',
    onToggle: (self) => {
      if (self.isActive) {
        setActiveScene(scene.getAttribute('data-scene'))
      }
    },
  })
})

// Global scroll progress indicator & scroll-cue hide
let lastReportedProgress = -1
ScrollTrigger.create({
  trigger: document.body,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    const progress = Math.round(self.progress * 100)
    if (progress !== lastReportedProgress) {
      lastReportedProgress = progress
      if (percentageEl) {
        percentageEl.textContent = `${String(progress).padStart(2, '0')}%`
      }
      if (scrollCue) {
        scrollCue.style.opacity = progress > 3 ? '0' : '1'
      }
    }
  },
})

// --------------------------------------------------------------------------
// 3. Cinematic GSAP Animations (Scrub & Reveals for all chapters)
// --------------------------------------------------------------------------
if (!prefersReducedMotion) {
  // A. Hero Entrance Sequence & Parallax
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Staggered title lines entrance
  heroTl
    .fromTo(
      '.hero-meta-kicker',
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
    )
    .fromTo(
      '.hero-title-line.line-1',
      { opacity: 0, y: 35, skewX: -4 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.75 },
      '-=0.3'
    )
    .fromTo(
      '.hero-title-line.line-2',
      { opacity: 0, y: 35, skewX: -4 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.75 },
      '-=0.55'
    )
    .fromTo(
      '.hero-blood-slash',
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
      '-=0.4'
    )
    .fromTo(
      '.hero-tagline',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.35'
    )
    .fromTo(
      '.hero-synopsis',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      '.hero-actions',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5 },
      '-=0.35'
    )
    .fromTo(
      '.hero-specs-grid > div',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      '-=0.3'
    )
    .fromTo(
      '#prologue .editorial-poster-card',
      { opacity: 0, clipPath: 'inset(8% 0% 8% 0%)', scale: 0.96 },
      { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.1, ease: 'power2.out' },
      0.3
    )

  const isMobile = window.matchMedia('(max-width: 768px)').matches

  // Subtle hero poster and content parallax tied to scroll progress (desktop only to prevent mobile lag)
  if (!isMobile) {
    gsap.to('#prologue .editorial-poster-card', {
      yPercent: 8,
      scale: 1.02,
      ease: 'none',
      scrollTrigger: {
        trigger: '#prologue',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    })

    gsap.to('#prologue .hero-content', {
      yPercent: -6,
      opacity: 0.35,
      ease: 'none',
      scrollTrigger: {
        trigger: '#prologue',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    })
  }

  // B. Staggered reveals for Chapters (02, 03, 06)
  const standardChapters = ['the-blade', 'hollow-within', 'final-form']
  standardChapters.forEach((secId) => {
    const sec = document.getElementById(secId)
    if (!sec) return

    const kicker = sec.querySelector('.act-kicker')
    const heading = sec.querySelector('.chapter-heading')
    const quote = sec.querySelector('.chapter-quote')
    const desc = sec.querySelector('.chapter-desc')
    const contextBox = sec.querySelector('.context-clarification-box')
    const techItems = sec.querySelectorAll('.tech-item')
    const combatInset = sec.querySelector('.combat-still-inset')
    const actionBtn = sec.querySelector('.btn-primary-journey')
    const mediaCard = sec.querySelector('.editorial-poster-card, .editorial-widescreen-card, .blade-character-showcase')
    const kanji = sec.querySelector('.scene-kanji-watermark')

    const triggerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sec,
        start: 'top 85%',
        toggleActions: 'play reverse play reverse',
      },
      defaults: { ease: 'power2.out', duration: 0.65 },
    })

    if (kicker) triggerTl.fromTo(kicker, { opacity: 0, y: 15 }, { opacity: 1, y: 0 })
    if (heading) triggerTl.fromTo(heading, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, '-=0.45')
    if (quote) triggerTl.fromTo(quote, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.45')
    if (desc) triggerTl.fromTo(desc, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.45')
    if (contextBox) triggerTl.fromTo(contextBox, { opacity: 0, x: -15 }, { opacity: 1, x: 0 }, '-=0.4')
    if (techItems.length > 0) {
      triggerTl.fromTo(techItems, { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.12 }, '-=0.35')
    }
    if (combatInset) triggerTl.fromTo(combatInset, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.3')
    if (actionBtn) triggerTl.fromTo(actionBtn, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1 }, '-=0.3')

    // Media reveal inside its chapter container
    if (mediaCard) {
      triggerTl.fromTo(
        mediaCard,
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power2.out' },
        0.1
      )

      // Subtle scroll-linked scale/movement tied strictly to section boundaries (desktop only)
      if (!isMobile) {
        gsap.to(mediaCard, {
          yPercent: secId === 'the-blade' ? 4 : 5,
          scale: 1.015,
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      }
    }

    if (kanji) {
      gsap.fromTo(
        kanji,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 0.04,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
          },
        }
      )
    }
  })

  // C. SIGNATURE MOMENTS

  // Signature Moment 1: Chapter 04 — Bankai (Dramatic reveal, scale-up & visual impact)
  const bankaiSec = document.querySelector('#bankai')
  const bankaiTheater = document.querySelector('#bankai-theater')
  if (bankaiSec && bankaiTheater) {
    const bankaiImg = bankaiTheater.querySelector('.bankai-theater-img')
    const bankaiBanner = bankaiTheater.querySelector('.bankai-banner-overlay')
    const bankaiKicker = bankaiSec.querySelector('.act-kicker')
    const bankaiDetails = bankaiSec.querySelector('.bankai-details-row')
    const bankaiBtn = bankaiSec.querySelector('.btn-primary-journey')

    const bankaiTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#bankai',
        start: 'top 85%',
        toggleActions: 'play reverse play reverse',
      },
      defaults: { ease: 'power3.out' },
    })

    bankaiTl
      .fromTo(bankaiKicker, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(
        bankaiTheater,
        { opacity: 0, scale: 0.92, boxShadow: '0 0 0 rgba(229, 9, 20, 0)' },
        { opacity: 1, scale: 1, boxShadow: '0 0 45px rgba(229, 9, 20, 0.25)', duration: 0.85, ease: 'power2.out' },
        '-=0.25'
      )
      .fromTo(
        bankaiImg,
        { scale: 1.15, filter: 'contrast(150%) brightness(60%)' },
        { scale: 1, filter: 'contrast(125%) brightness(95%)', duration: 1.0, ease: 'power2.out' },
        '-=0.85'
      )
      .fromTo(
        bankaiBanner,
        { opacity: 0, x: -30, filter: 'blur(6px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.65 },
        '-=0.45'
      )
      .fromTo(
        bankaiDetails,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(bankaiBtn, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3')

    // Scrub impact across section scroll (desktop only)
    if (!isMobile) {
      gsap.to(bankaiImg, {
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: '#bankai',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    }
  }

  // Signature Moment 2: Chapter 05 — Mugetsu (Slower, restrained transitions & gradual fading)
  const getsugaSec = document.querySelector('#final-getsuga')
  if (getsugaSec) {
    const card = getsugaSec.querySelector('.getsuga-archival-card')
    const media = getsugaSec.querySelector('.editorial-widescreen-card')
    const mediaImg = getsugaSec.querySelector('.widescreen-media-img')

    const getsugaTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#final-getsuga',
        start: 'top 85%',
        toggleActions: 'play reverse play reverse',
      },
      defaults: { ease: 'power2.inOut', duration: 1.0 },
    })

    getsugaTl
      .fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
      .fromTo(
        media,
        { opacity: 0, scale: 0.97, filter: 'brightness(70%)' },
        { opacity: 1, scale: 1, filter: 'brightness(92%)', duration: 1.2 },
        '-=0.7'
      )

    // Gentle spiritual fade scrub (desktop only)
    if (!isMobile) {
      gsap.to(mediaImg, {
        scale: 1.03,
        opacity: 0.88,
        ease: 'none',
        scrollTrigger: {
          trigger: '#final-getsuga',
          start: 'center center',
          end: 'bottom top',
          scrub: 0.8,
        },
      })
    }
  }

  // Signature Moment 3: Chapter 07 — Epilogue (Calm artwork reveal & slow final typography entrance)
  const epilogueSec = document.querySelector('#epilogue')
  if (epilogueSec) {
    const epilogueCard = epilogueSec.querySelector('.editorial-poster-card')
    const epilogueCopy = epilogueSec.querySelector('.chapter-copy-wrap')
    const replayBtn = epilogueSec.querySelector('#replay-top-btn')

    const epilogueTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#epilogue',
        start: 'top 85%',
        toggleActions: 'play reverse play reverse',
      },
      defaults: { ease: 'power2.out', duration: 1.1 },
    })

    epilogueTl
      .fromTo(
        epilogueCard,
        { opacity: 0, y: 25, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1.3 }
      )
      .fromTo(
        epilogueCopy,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.0 },
        '-=0.9'
      )
      .fromTo(replayBtn, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
  }

  // Interlude poem reveal
  const interludeSec = document.querySelector('.scene-quote-interlude')
  if (interludeSec) {
    gsap.fromTo(
      interludeSec.querySelector('div'),
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: interludeSec,
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      }
    )
  }

  // Dynamic Reishi HUD Indicator: Bar oscillation dynamically linked to scroll velocity
  const eqBars = document.querySelectorAll('.eq-bar')
  if (eqBars.length > 0) {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const velocity = Math.min(Math.abs(self.getVelocity() / 250), 3.5)
        eqBars.forEach((bar, i) => {
          const heightMultiplier = 1 + velocity * (0.4 + i * 0.15)
          gsap.to(bar, {
            scaleY: Math.max(0.6, heightMultiplier),
            duration: 0.15,
            ease: 'power1.out',
            overwrite: 'auto',
          })
        })
      },
    })
  }
}

// --------------------------------------------------------------------------
// 4. Accessible Modal Chapters Dialog Interactivity
// --------------------------------------------------------------------------
const chapterModal = document.querySelector('#chapter-modal')
const openModalBtn = document.querySelector('#open-chapters-btn')
const closeModalBtn = document.querySelector('#close-chapters-btn')
const modalLinks = document.querySelectorAll('.modal-nav-link')

function openModal() {
  chapterModal.classList.add('is-open')
  chapterModal.setAttribute('aria-hidden', 'false')
  if (openModalBtn) openModalBtn.setAttribute('aria-expanded', 'true')
  if (closeModalBtn) closeModalBtn.focus()
}

function closeModal() {
  chapterModal.classList.remove('is-open')
  chapterModal.setAttribute('aria-hidden', 'true')
  if (openModalBtn) {
    openModalBtn.setAttribute('aria-expanded', 'false')
    openModalBtn.focus()
  }
}

if (openModalBtn) openModalBtn.addEventListener('click', openModal)
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal)
modalLinks.forEach((link) => link.addEventListener('click', closeModal))

chapterModal.addEventListener('click', (e) => {
  if (e.target === chapterModal) closeModal()
})

// Keyboard trap & Escape key listener
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chapterModal.classList.contains('is-open')) {
    closeModal()
  }
})

// Smooth scroll handler for all anchor links (with header offset)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href')
    const targetEl = document.querySelector(targetId)
    if (targetEl) {
      e.preventDefault()
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -70 })
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})
