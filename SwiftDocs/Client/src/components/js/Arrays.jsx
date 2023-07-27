const SideBar = [
    {
        btn: (
            <button className="h-10 w-12 flex items-center justify-center">
                <svg
                    viewBox="0 0 24 24"
                    className="h-5"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </button>
        ),
    },
    {
        btn: (
            <button className="h-10 w-12   flex items-center justify-center">
                <svg
                    viewBox="0 0 24 24"
                    className="h-5"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            </button>
        ),
    },
    {
        btn: (
            <button className="h-10 w-12   flex items-center justify-center">
                <svg
                    viewBox="0 0 24 24"
                    className="h-5"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    <line x1="12" y1="11" x2="12" y2="17"></line>
                    <line x1="9" y1="14" x2="15" y2="14"></line>
                </svg>
            </button>
        ),
    },
    {
        btn: (
            <button className="h-10 w-12  flex items-center justify-center">
                <svg
                    viewBox="0 0 24 24"
                    className="h-5"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            </button>
        ),
    },
];

const FirstNavBar = [
    {
        title: "Company"
    },
    {
        title: "Users"
    },
    {
        title: "Expense Centres"
    },
    {
        title:"Currency Exchange"

    },
];

const UsersSidebarArray = [
    {
        name : "Nacereddine Chouich",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Arioua Imen",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Said Chouich",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Lorem ipsum dolor sit ",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Nacereddine Chouich",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Nacereddine Chouich",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Nacereddine Chouich",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Nacereddine Chouich",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
    {
        name : "Nacereddine Chouich",
        Status: "Full stack dev",
        departement: "IT",
        Activities: {
            title: "activiti1",
            date: { date: new Date().getFullYear() },
            Description: "Description",
            Flux: "Flux",
            fillname: 'pdf'
        }
    },
]

const SecondeNavBarArray = [
    {
        title : "Activities",
        path: "Full stack dev",

    },
    {
        title : "Account",
        path: "Full stack dev",

    },
    {
        title : "Activitie3",
        path: "Full stack dev",

    },
    {
        title : "Activitie4",
        path: "Full stack dev",

    },
    {
        title : "Activitie5",
        path: "Full stack dev",

    },
    {
        title : "Activitie6",
        path: "Full stack dev",

    }
]

export { SideBar, FirstNavBar, UsersSidebarArray, SecondeNavBarArray };