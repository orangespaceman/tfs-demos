class Tabs {
  constructor(selector) {
    this.tabsContainer = document.querySelector(selector);
    this.tabButtons = this.tabsContainer.querySelectorAll(".tabs__button");
    this.tabContents = this.tabsContainer.querySelectorAll(".tabs__content");

    this.tabButtons.forEach((tabButton) => {
      tabButton.addEventListener("click", (event) => this.tabClicked(event));
    });
  }

  tabClicked(event) {
    const clickedButton = event.currentTarget;
    const tabId = clickedButton.dataset.tab;
    const detailsElement = this.tabsContainer.querySelector(
      `.tabs__content[data-tab-content="${tabId}"]`
    );

    this.tabButtons.forEach((button) => {
      button.classList.remove("tabs__button--selected");
    });
    this.tabContents.forEach((content) => {
      content.classList.remove("tabs__content--selected");
    });

    clickedButton.classList.add("tabs__button--selected");
    detailsElement.classList.add("tabs__content--selected");
  }
}

// Expose the 'Tabs' class so that it can be imported by other files
export default Tabs;
