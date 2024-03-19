import { storageService } from "./storageService";
import { utilService } from "./utilService";
import axios from "axios";

function createUser(username, email, password, avatar) {
  console.log(username);
  console.log(avatar);

  const newUser = {
    id: utilService.generateId(),
    username,
    password,
    email,
    avatar: avatar === "" ? `https://robohash.org/${username}.png` : avatar,
    isAdmin: username === "admin" ? true : false,
    createdAt: new Date(),
  };
  const totalUsers = storageService.getUsers();
  storageService.saveUsers([...totalUsers, newUser]);
  return newUser;
}

function removeUser(userId) {
  const allUsers = storageService.getUsers();
  const filteredUsers = allUsers.filter((user) => user.id !== userId);
  storageService.saveUsers(filteredUsers);
  return filteredUsers;
}
function updateUser(userId, username, password, email, avatar) {
  const allUsers = storageService.getUsers();
  const user = allUsers.find((user) => user.id === userId);
  const index = allUsers.indexOf(user);
  user.username = username;
  user.password = password;
  user.email = email;
  user.avatar = avatar;
  allUsers.splice(index, 1, user);
  storageService.saveUsers(allUsers);
  return user;
}

function login(username, password) {
  const users = storageService.getUsers();
  const foundedUser = users.find((user) => user.password === password && user.username === username);

  if (!foundedUser) return null;
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
}

function logout() {
  storageService.clearAll();
}

async function fetchAvatar(username = "shoshi") {
  try {
    const URL = `https://yesno.wtf/api`;
    //? GET with fetch
    // const response = await fetch(URL)
    // const data = await response.json()

    //? POST with fetch:
    const fetchDataWithFetch = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { data: "I am a body" },
    });

    const data1 = await fetchDataWithFetch.json();

    //? GET with axios
    // const { data } = await axios.get(URL)

    //? POST with axios:
    const fetchDataWithAxios = await axios.put(`${URL}?username=shoshi&isAdmin=true`, { data: "I Am a body" });
    const { data } = fetchDataWithAxios;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const userService = { createUser, login, logout, fetchAvatar, removeUser, updateUser };
