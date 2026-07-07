.section { padding: clamp(60px, 9vw, 120px) 0; }
.wrap { max-width: 880px; margin: 0 auto; padding: 0 32px; }

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
  backdrop-filter: blur(18px);
  border: 1px solid var(--slab-edge);
  border-radius: 2px;
}
.h3 {
  font-weight: 500;
  font-size: clamp(30px, 4.2vw, 48px);
  line-height: 1.04;
  letter-spacing: -.03em;
  color: var(--ink);
}
.h3 em { font-style: italic; font-weight: 400; color: var(--ink-soft); }

.list {
  list-style: none; margin-top: 32px; padding: 0;
  display: grid; gap: 28px;
}
.list li {
  display: grid; grid-template-columns: 60px 1fr;
  gap: 24px; align-items: start;
}
.num {
  font-size: 14px;
  color: var(--mute);
  font-variant-numeric: tabular-nums;
  padding-top: 4px;
  border-top: 1px solid var(--ink);
  padding-bottom: 2px;
  display: inline-block;
  min-width: 40px;
}
.list h4 {
  font-weight: 500; font-size: 18px; letter-spacing: -.01em;
}
.list p {
  margin-top: 6px; font-size: 14px; line-height: 1.65;
  color: var(--ink-soft); font-weight: 300; max-width: 46ch;
}

@media (max-width: 760px) {
  .wrap { padding: 0 16px; }
  .card { padding: 28px; }
  .list li { grid-template-columns: 48px 1fr; gap: 16px; }
}
