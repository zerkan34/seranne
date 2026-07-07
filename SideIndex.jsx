.piece {
  padding: clamp(60px, 9vw, 120px) 0;
}
.wrap {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
}
.lab {
  font-size: 11px; color: var(--mute);
  letter-spacing: .04em; text-transform: uppercase;
  display: flex; justify-content: space-between; align-items: baseline;
  gap: 18px; padding: 14px 22px;
  margin-bottom: 24px;
  background: var(--slab); backdrop-filter: blur(12px);
  border: 1px solid var(--slab-edge);
  border-radius: 2px;
  font-variant-numeric: tabular-nums;
}
.lab b {
  color: var(--ink); font-weight: 500;
  letter-spacing: -.005em; text-transform: none; font-size: 13px;
}

.card {
  padding: clamp(36px, 5vw, 64px);
  background: var(--slab);
  backdrop-filter: blur(18px) saturate(1.05);
  border: 1px solid var(--slab-edge);
  border-radius: 2px;
  box-shadow: 0 30px 80px -40px rgba(26, 25, 22, .32);
  will-change: transform, opacity, filter;
}
.h3 {
  font-weight: 500; font-size: clamp(30px, 4.2vw, 48px);
  line-height: 1.04; letter-spacing: -.03em; color: var(--ink);
}
.h3 em { font-style: italic; font-weight: 400; color: var(--ink-soft); }

.desc {
  margin-top: 18px; font-size: 15px; line-height: 1.7;
  color: var(--ink); font-weight: 300; max-width: 46ch;
}

.specs {
  margin-top: 36px; padding-top: 24px;
  border-top: 1px solid var(--rule);
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px 28px;
}
.specRow {
  display: grid; grid-template-columns: auto 1fr; gap: 28px;
  font-size: 13px; color: var(--ink); font-weight: 300;
}
.specRow dt {
  color: var(--mute); font-size: 11px;
  letter-spacing: .02em; text-transform: uppercase;
}
.specRow dd { font-feature-settings: 'tnum'; }

.req {
  display: inline-flex; align-items: center; gap: 12px;
  margin-top: 36px; font-size: 13px; color: var(--ink);
  font-weight: 400; padding: 14px 22px;
  border: 1px solid var(--ink); border-radius: 999px;
  transition: background .3s, color .3s;
}
.req:hover { background: var(--ink); color: var(--paper); }
.arrow { display: inline-block; }

.imgWrap, .bleed {
  margin-top: 32px;
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid var(--slab-edge);
  box-shadow: 0 30px 80px -40px rgba(26, 25, 22, .4);
}
.bleed {
  margin-top: 48px;
  border-radius: 0;
  border: none;
  margin-left: calc(-1 * (100vw - 100%) / 2);
  margin-right: calc(-1 * (100vw - 100%) / 2);
  max-width: none;
}
.img { overflow: hidden; }
.img img { width: 100%; display: block; will-change: transform; }
.bleed .img img { width: 100vw; }

@media (max-width: 760px) {
  .wrap { padding: 0 16px; }
  .card { padding: 28px; }
  .specs { grid-template-columns: 1fr; }
  .specRow { grid-template-columns: auto 1fr; gap: 0 16px; }
  .bleed { margin-left: -16px; margin-right: -16px; }
}
