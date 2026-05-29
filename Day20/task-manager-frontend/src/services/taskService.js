const API = import.meta.env.VITE_API_URL;

export const getTasks = async (token) => {
  const res = await fetch(`${API}/api/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const createTask = async (task, token) => {
  const res = await fetch(`${API}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });

  return res.json();
};

export const deleteTask = async (id, token) => {
  await fetch(`${API}/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateTask = async (id, task, token) => {
  const res = await fetch(`${API}/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });

  return res.json();
};