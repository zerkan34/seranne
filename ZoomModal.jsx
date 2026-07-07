.modal {
  position: fixed; inset: 0; z-index: 80;
  display: flex; align-items: center; justify-content: center;
  padding: 4vw;
  background: rgba(20, 18, 14, .85);
  backdrop-filter: blur(8px);
  cursor: zoom-out;
}
.modal img {
  max-width: 96vw;
  max-height: 88vh;
  width: auto; height: auto;
  display: block;
  box-shadow: 0 30px 80px rgba(0, 0, 0, .5);
  cursor: default;
}
.close {
  position: fixed; top: 18px; right: 22px;
  color: var(--paper); font-size: 12px;
  letter-spacing: .04em; text-transform: uppercase;
}
.caption {
  position: fixed; bottom: 20px; left: 50%;
  transform: translateX(-50%);
  color: var(--paper); font-size: 12px;
  letter-spacing: .04em; text-transform: uppercase;
  font-feature-settings: 'tnum';
  font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
}
