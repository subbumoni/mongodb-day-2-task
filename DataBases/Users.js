// Creating & selecting Database

use("Zen_Class_Programme");

// Creating collections for Zen_Class_Programme

db.createCollection("users");

// Creating Documents for users

db.users.insertMany([
  {
    userId: 1,
    userName: "parthi",
    userEmail: "parthi@gmail.com",
    mentorId: 1,
  },
  {
    userId: 2,
    userName: "muthu",
    userEmail: "muthu@gmail.com",
    mentorId: 2,
  },
  {
    userId: 3,
    userName: "karthi",
    userEmail: "karthi@gmail.com",
    mentorId: 3,
  },
  {
    userId: 4,
    userName: "vicky",
    userEmail: "vicky@gmail.com",
    mentorId: 1,
  },
  {
    userId: 5,
    userName: "suresh",
    userEmail: "suresh@gmail.com",
    mentorId: 2,
  },
  {
    userId: 6,
    userName: "varun",
    userEmail: "varun@gmail.com",
    mentorId: 3,
  },
  {
    userId: 7,
    userName: "balan",
    userEmail: "balan@gmail.com",
    mentorId: 1,
  },
  {
    userId: 8,
    userName: "harish",
    userEmail: "harish@gmail.com",
    mentorId: 1,
  },
  {
    userId: 9,
    userName: "logesh",
    userEmail: "logesh@gmail.com",
    mentorId: 1,
  },
  {
    userId: 10,
    userName: "maaran",
    userEmail: "maaran@gmail.com",
    mentorId: 1,
  },
  {
    userId: 11,
    userName: "kumar",
    userEmail: "kumar@gmail.com",
    mentorId: 1,
  },
  {
    userId: 12,
    userName: "abu",
    userEmail: "abu@gmail.com",
    mentorId: 1,
  },
  {
    userId: 13,
    userName: "gokul",
    userEmail: "gokul@gmail.com",
    mentorId: 1,
  },
  {
    userId: 14,
    userName: "kannan",
    userEmail: "kannan@gmail.com",
    mentorId: 1,
  },
  {
    userId: 15,
    userName: "pariti",
    userEmail: "pariti@gmail.com",
    mentorId: 1,
  },
  {
    userId: 16,
    userName: "kathir",
    userEmail: "kathir@gmail.com",
    mentorId: 1,
  },
  {
    userId: 17,
    userName: "thiyagu",
    userEmail: "thiyagu@gmail.com",
    mentorId: 1,
  },
  {
    userId: 18,
    userName: "loki",
    userEmail: "loki@gmail.com",
    mentorId: 1,
  },
  {
    userId: 19,
    userName: "deva",
    userEmail: "deva@gmail.com",
    mentorId: 1,
  },
  {
    userId: 20,
    userName: "arjun",
    userEmail: "arjun@gmail.com",
    mentorId: 1,
  },
]);
