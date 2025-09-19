class Tabs {
    constructor(selector) {
        this.tabsContainer = document.querySelector(selector);
        this.tabButtons = this.tabsContainer.querySelectorAll('.tab-button');
        this.tabContents = this.tabsContainer.querySelectorAll('.tab-content');

        this.tabButtons.forEach(tabButton => {
            tabButton.addEventListener('click', (event) => this.tabClicked(event));
        });
    }

    tabClicked(event) {
        const clickedButton = event.currentTarget;
        const tabId = clickedButton.dataset.tab;
        const detailsElement = this.tabsContainer.querySelector(`.tab-content[data-tab-content="${tabId}"]`);

        this.tabButtons.forEach(button => {
            button.classList.remove('currently-selected-tab');
        });
        this.tabContents.forEach(content => {
            content.classList.remove('currently-selected-tab');
        });

        clickedButton.classList.add('currently-selected-tab');
        detailsElement.classList.add('currently-selected-tab');
    }
}

// Expose the 'Tabs' class so that it can be imported by other files
export default Tabs;