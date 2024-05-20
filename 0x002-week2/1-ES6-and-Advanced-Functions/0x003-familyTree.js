let theJonathans = {
    children: [
        {
            name: 'Elias',
        },
        {
            name: 'Sarah',
            children: [
                {
                    name: 'Max',
                    children: [
                        {
                            name: 'Lily',
                        },
                    ],
                },
                {
                    name: 'Zoe',
                },
                {
                    name: 'Theo',
                },
            ],
        },
        {
            name: 'Maria',
            children: [
                {
                    name: 'Daniel',
                },
            ],
        },
        {
            name: 'David',
        },
    ],
};

function getTheJonathans() {
    let allTheJonathans = [];

    function getNames(descendants) {
        if (!descendants) {
            return;
        }
        if (descendants.children) {
            for (let descendant of descendants.children) {
                allTheJonathans.push(descendant.name);
                getNames(descendant);
            }
        }
    }
    getNames(theJonathans);
    return allTheJonathans;
}

console.log(getTheJonathans(theJonathans));
