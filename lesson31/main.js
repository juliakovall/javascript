import { getData, postData, putData, patchData, deleteData } from "./api.js";

getData("/posts");

postData("/posts", {
  title: "My post",
  body: "Hello world",
  userId: 1,
});

putData(1, {
  id: 1,
  title: "Updated post",
  body: "Updated text",
  userId: 1,
});

patchData(1, {
  title: "Patched title",
});

deleteData(1);
