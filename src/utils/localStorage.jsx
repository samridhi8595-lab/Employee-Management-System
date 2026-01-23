const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@e.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Prepare the monthly sales report",
        date: "2026-01-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Meeting",
        description: "Attend meeting with client ABC",
        date: "2026-01-05",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Backup",
        description: "Backup project data",
        date: "2026-01-03",
        category: "IT"
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Design",
        description: "Design dashboard UI",
        date: "2026-01-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Fixing",
        description: "Fix login page bugs",
        date: "2026-01-06",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review teammate code",
        date: "2026-01-04",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Marketing Plan",
        description: "Create Q1 marketing plan",
        date: "2026-01-15",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Social Media Post",
        description: "Publish product launch post",
        date: "2026-01-07",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Ad Campaign",
        description: "Run Facebook ad campaign",
        date: "2026-01-02",
        category: "Advertising"
      }
    ]
  },
  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory Check",
        description: "Check warehouse inventory",
        date: "2026-01-11",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Supplier Call",
        description: "Call supplier for restock",
        date: "2026-01-06",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Invoice Verification",
        description: "Verify purchase invoices",
        date: "2026-01-05",
        category: "Finance"
      }
    ]
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Recruitment Drive",
        description: "Conduct interviews",
        date: "2026-01-14",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Employee Onboarding",
        description: "Onboard new hires",
        date: "2026-01-08",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Training Session",
        description: "Conduct training session",
        date: "2026-01-03",
        category: "Training"
      }
    ]
  }
];

  
 const admin=[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage =()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees =JSON.parse(localStorage.getItem('employees'))
  const admin =JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
   
}
 