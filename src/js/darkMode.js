export const modeRefs = {
  toggle: document.querySelector('.mode-btn'),
  toggleMobile: document.querySelector('.mode-btn-mobile'),
  circle: document.querySelector('.btn-circle'),
  circleMobile: document.querySelector('.btn-circle-mobile'),
  bg: document.querySelectorAll('.mode-bg'),
  text: document.querySelectorAll('.mode-text'),
  title: document.querySelectorAll('.mode-title'),
  semiTrText: document.querySelectorAll('.mode-semi-tr'),
  icon: document.querySelector('.mode-icon'),
  input: document.querySelectorAll('.mode-input'),
  footer: document.querySelector('.mode-footer'),
};

export const colors = {
  white: '#fff',
  black: '#141414',
  green: '#1e2827',
  semiTr: 'rgba(20, 20, 20, .5)',
  bgColor: '#fbfbfb',
  gray: '#ffffff80',
};

let toggled = false;

export function toggleMode() {
  modeRefs.toggle?.classList.toggle('toggled-btn');
  modeRefs.circle?.classList.toggle('toggled-circle');
  modeRefs.toggleMobile?.classList.toggle('toggled-btn');
  modeRefs.circleMobile?.classList.toggle('toggled-circle');

  if (!toggled) {
    modeRefs.bg.forEach(item => {
      // @ts-ignore
      item.style.backgroundColor = colors.black;
    });
    modeRefs.text.forEach(item => {
      // @ts-ignore
      item.style.color = colors.white;
    });
    modeRefs.title.forEach(item => {
      // @ts-ignore
      item.style.color = colors.white;
    });
    modeRefs.semiTrText.forEach(item => {
      // @ts-ignore
      item.style.color = colors.white;
    });
    modeRefs.input.forEach(item => {
      // @ts-ignore
      item.style.color = colors.white;
      // @ts-ignore
      item.style.backgroundColor = colors.gray;
      // @ts-ignore
      item.style.borderColor = colors.white;
    });
    // @ts-ignore
    modeRefs.footer.style.backgroundColor = colors.black;
    // @ts-ignore
    modeRefs.icon.style.stroke = colors.white;

    toggled = true;
  } else {
    modeRefs.bg.forEach(item => {
      // @ts-ignore
      item.style.backgroundColor = colors.bgColor;
    });
    modeRefs.text.forEach(item => {
      // @ts-ignore
      item.style.color = colors.black;
    });
    modeRefs.title.forEach(item => {
      // @ts-ignore
      item.style.color = colors.green;
    });
    modeRefs.semiTrText.forEach(item => {
      // @ts-ignore
      item.style.color = colors.semiTr;
    });
    modeRefs.input.forEach(item => {
      // @ts-ignore
      item.style.color = colors.black;
      // @ts-ignore
      item.style.backgroundColor = 'transparent';
      // @ts-ignore
      item.style.borderColor = colors.semiTr;
    });
    // @ts-ignore
    modeRefs.footer.style.backgroundColor = colors.green;
    // @ts-ignore
    modeRefs.icon.style.stroke = colors.black;

    toggled = false;
  }
}