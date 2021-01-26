export const GetMessages = (message) => {
  const messages = [];
  if (message.validity.valueMissing) {
    messages.push("Value required");
  }
  if (message.validity.typeMismatch) {
    messages.push(`Invalid ${message.type}`);
  }
  return messages;
};
