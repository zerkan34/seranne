.idx {
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  z-index: 30;
  display: flex; flex-direction: column;
  justify-content: space-between;
  padding: 24px 24px;
  pointer-events: none;
  font-size: 10px;
  letter-spacing: .04em;
  color: var(--ink-soft);
  font-variant-numeric: tabular-nums;
  mix-blend-mode: multiply;
}
.top, .bot {
  pointer-events: auto;
  display: flex; flex-direction: column;
  gap: 6px;
  backdrop-filter: blur(2px);
}
.top b {
  display: block;
  color: var(--ink);
  font-weight: 500;
  letter-spacing: -.005em;
  font-size: 13px;
}
.mute { color: var(--ink-soft); opacity: .8; }
.counter { display: inline-flex; align-items: baseline; gap: 4px; }
.now, .label { color: var(--ink); font-weight: 500; display: inline-block; }

@media (max-width: 760px) {
  .idx {
    position: fixed; top: 0; left: 0; right: 0;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    background: rgba(244, 240, 230, .86);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--slab-edge);
    mix-blend-mode: normal;
  }
  .top { flex-direction: row; align-items: baseline; gap: 10px; }
  .top b { font-size: 13px; }
  .bot { flex-direction: row; gap: 10px; font-size: 11px; }
}
