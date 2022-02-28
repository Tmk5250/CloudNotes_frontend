//Connecting to backend

//Fetching notes from backend
const host = "localhost";
const authToken = localStorage.getItem("token") ;
export const getNotes = async () => {
  let url = `http://${host}/api/myNotes`;
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authToken: authToken,
    },
  });
  // const json = await response.json();
  return response.json();
};

// Adding Notes to database i.e to backend

export const addNotes = async (title, description, tag) => {
  // Example POST method implementation:
  let url = `http://${host}/api/note`;
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authToken: authToken,
    },
    body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
  });
  return response.json();
};

// Deleting Notes from database i.e from backend
export const deleteNotes = async (id) => {
  // Example POST method implementation:
  let url = `http://${host}/api/note/${id}`;
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authToken: authToken,
    },
  });
  return response.json();
};

// Updating Notes from database i.e from backend
export const updateNotes = async (id, title, description, tag) => {
  // Example POST method implementation:
  let url = `http://${host}/api/note/${id}`;
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authToken: authToken,
    },
    body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
  });
  return response.json();
};

// SignUp endpoint
export const signUp = async (name, email, password) => {
  // Example POST method implementation:
  let url = `http://${host}/api/signUp`;
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }), // body data type must match "Content-Type" header
  });
  return response.json();
};

// Login endpoint
export const login = async (email, password) => {
  // Example POST method implementation:
  let url = `http://${host}/api/login`;
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
  });
  return response.json();
};

//Get user endpoint
export const getUser = async ()=>{
  let url = `http://${host}/api/getUser`;
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      authToken: authToken,
    },
  });
  return response.json();
}
