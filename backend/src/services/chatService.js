const users = [];

const addUser = (socketId, username) => {
  if (!users.some(user => user.id === socketId)) {
    users.push({ id: socketId, username });
  }
};

const removeUser = (socketId) => {
  const index = users.findIndex(user => user.id === socketId);
  if (index !== -1) {
    users.splice(index, 1);
  }
};

const getUsers = () => {
  return users;
};

const sendMessageToAll = (messageData) => {
  return messageData;
};

module.exports = { addUser, removeUser, getUsers, sendMessageToAll };