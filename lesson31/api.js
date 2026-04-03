console.log("#14. JavaScript homework example file");

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getData(segment) {
  try {
    const response = await fetch(`${BASE_URL}${segment}`);

    if (!response.ok) {
      return response.status;
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function postData(segment, data) {
  try {
    const response = await fetch(`${BASE_URL}${segment}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorMessage = "Request failed";
      console.log(errorMessage);
      return errorMessage;
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function putData(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorMessage = "Request failed";
      console.log(errorMessage);
      return errorMessage;
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function patchData(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorMessage = "Request failed";
      console.log(errorMessage);
      return errorMessage;
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function deleteData(id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(`Post with id ${id} has been successfully deleted.`);
      return true;
    }

    console.log(
      `Failed to delete post with id ${id}. Status: ${response.status}`,
    );
    return response.status;
  } catch (error) {
    console.log(`Error during deletion: ${error.message}`);
    return error.message;
  }
}

export { getData, postData, putData, patchData, deleteData };
