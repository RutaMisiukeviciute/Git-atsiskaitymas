import TabInfo from "./components/tab.js";
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('main').classList.add("displayNone");
    document.querySelector('main').classList.remove("displayFlex");

    const buttonText = button.textContent;
    fetch('./data/data.json').then(res => res.json()).then(data => {
      let selectedTab = data.tabs.find(tab => tab.name === buttonText);
      const tabDiv = new TabInfo(selectedTab);
      document.querySelector('body').append(tabDiv);
    });
  });
});

