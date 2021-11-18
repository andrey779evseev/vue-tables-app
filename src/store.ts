import {createStore} from 'vuex'

export interface EmployeeType {
  id: number
  name: string
  position: 'admin' | 'guest'
  age: number
}

export interface ServiceCardType {
  id: number
  name: string
  birthday: Date
  photo: string
  phone: number
  position: 'admin' | 'guest'
  education: string
  experience: string,
  university: string
}

export interface State {
  employees: EmployeeType[]
  isSidebarShowed: boolean
  employee: EmployeeType | undefined
  cards: ServiceCardType[]
}

const cards = []
const employees = []
for (let i = 0; i < 37; i++) {
  employees.push({
    id: Math.floor(Math.random() * (10000 - 1) + 1),
    name: 'Andrew',
    position: 'admin',
    age: 50
  })
  cards.push({
    id: Math.floor(Math.random() * (10000 - 1) + 1),
    name: 'andrew',
    birthday: new Date(),
    education: 'gymnasium №3',
    experience: 'little startup',
    phone: 77902942,
    photo: (Math.random() + 1).toString(36).substring(7),
    position: 'admin',
    university: 'technical college of informatics and low'
  })
}

export default createStore<State>({
  state: {
    employees,
    cards,
    isSidebarShowed: false,
    employee: {id: 0, name: '', position: 'admin', age: 0}
  },
  mutations: {
    addCard(state, card: ServiceCardType) {
      state.cards.push(card)
    },
    updateCard(state, card: ServiceCardType) {
      const index = state.cards.findIndex(e => e.id === card.id)
      state.cards[index] = {...card}
    },
    deleteCard(state, index: number) {
      state.cards.splice(index, 1)
    },
    addEmployee(state, employee: EmployeeType) {
      state.employees.push(employee)
    },
    deleteEmployee(state, index: number) {
      state.employees.splice(index, 1)
    },
    updateEmployees(state, employee: EmployeeType) {
      const index = state.employees.findIndex(e => e.id === employee.id)
      state.employees[index].age = employee.age
      state.employees[index].name = employee.name
      state.employees[index].position = employee.position
    },
    toggleIsSidebarShowed(state) {
      state.isSidebarShowed = !state.isSidebarShowed
    },
    updateEmployee(state, employee: EmployeeType) {
      state.employee = employee
    }
  },
  actions: {},
  getters: {
    employees(state): EmployeeType[] {
      return state.employees
    },
    isSidebarShowed(state): boolean {
      return state.isSidebarShowed
    },
    employee(state): EmployeeType {
      return state.employee
    },
    cards(state): ServiceCardType[] {
      return state.cards
    }
  }
})

