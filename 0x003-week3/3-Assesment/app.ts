class Item {
    constructor(public body: string, public date: Date, public id: string) {}
}

class ToDoService {
    private undoneListURL: string = 'http://localhost:3000/undoneList';
    private inputElement: HTMLInputElement;
    private dateElement: HTMLInputElement;
    private btnElement: HTMLButtonElement;
    private divElement: HTMLDivElement;

    constructor() {
        this.inputElement = document.getElementById(
            'new-item'
        )! as HTMLInputElement;
        this.dateElement = document.getElementById('date')! as HTMLInputElement;
        this.btnElement = document.getElementById('btn')! as HTMLButtonElement;
        this.divElement = document.getElementById(
            'items-display'
        )! as HTMLDivElement;
    }
    async checkInputsSubmitted(): Promise<void> {
        const newItemInput: string = this.inputElement.value;
        const newDateInput: string = this.dateElement.value;
        if (!newItemInput || !newDateInput) {
            alert('To add a new item Please Fill in all the fields');
            return;
        }
        const newToDoItem = { body: newItemInput, date: newDateInput };
        try {
            const res = await fetch(this.undoneListURL, {
                method: 'POST',
                body: JSON.stringify(newToDoItem),
            });
            this.addNewItem();
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    }
    async addNewItem() {
        this.divElement.innerHTML = '';
        try {
            const response = await fetch(this.undoneListURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const entries: { text: string; date: string }[] =
                await response.json();
            entries.forEach((entry) => {
                const entryDiv = document.createElement('div');
                entryDiv.textContent = `Text: ${entry.text}, Date: ${entry.date}`;
                this.divElement.appendChild(entryDiv);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ToDoService();
});
