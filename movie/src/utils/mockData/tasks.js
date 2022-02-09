export const TASKS = [
    {id: "1", title:'task 1', tag:"frontend", description:'this is description 1', status:'todo'},
    {id: "2", title:'task 2', tag:"backend", description:'this is description 2', status:'completed'},
    {id: "3", title:'task 3', tag:"uiux", description:'this is description 3', status:'review'},
    {id: "4", title:'task 4', tag:"devOps", description:'this is description 4', status:'inProgress'},
    {id: "5", title:'task 5', tag:"backend", description:'this is description 5', status:'inProgress'},
    {id: "6", title:'task 6', tag:"frontend", description:'this is description 6', status:'review'},
    {id: "7", title:'task 7', tag:"devOps", description:'this is description 7', status:'todo'},
    {id: "8", title:'task 8', tag:"uiux", description:'this is description 8', status:'review'},
    {id: "9", title:'task 9', tag:"backend", description:'this is description 9', status:'completed'},
    {id: "10", title:'task 10', tag:"backend", description:'this is description 10', status:'todo'},
    {id: "11", title:'task 11', tag:"devOps", description:'this is description 11', status:'completed'},
    {id: "12", title:'task 12', tag:"frontend", description:'this is description 12', status:'inProgress'},
    {id: "13", title:'task 13', tag:"uiux", description:'this is description 13', status:'inProgress'},
    {id: "14", title:'task 14', tag:"uiux", description:'this is description 14', status:'completed'},
    {id: "15", title:'task 15', tag:"backend", description:'this is description 15', status:'todo'},
];

export const INITIAL_TASK = {
    id: (new Date()).toISOString(),
        title:'',
    description:'',
    tag:'',
    status:'todo'
}

export const OPTIONS = [
    {label:"To do", value:"todo"},
    {label:"In Progress", value:"inProgress"},
    {label:"Review", value:"review"},
    {label:"Completed", value:"completed"},
];

export const COLORS = [
   '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#ff5722',
    '#795548'
];

export const INPUT_VALS = [
    {label:"Title",placeholder:"Enter title",name:"title"},
    {label:"Description",placeholder:"Enter description",name:"description"},
    {label:"Tag",placeholder:"Enter tag",name:"tag"},
];