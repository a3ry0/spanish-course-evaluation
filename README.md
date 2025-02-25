# Spanish Evaluation Microservice

This repository contains the code for a course evaluation microservice a Spanish learning program. 
Microservice A is a course evaluation service that loads a list of previous student evaluations for each course level category. The evaluations are displayed as a scrollable pop-up tab on the corresponding course page.

# How to REQUEST Data from the Microservice

To request evaluation data for a given course level, make an HTTP GET request to the following endpoint: GET http://localhost:3000/api/evaluations/:level
Replace `:level` with one of the course levels: `beginner`, `intermediate`, or `advanced`.

**Example Request Code (using fetch):**

```javascript
// Example: Request evaluations for the "beginner" level
fetch('http://localhost:3000/api/evaluations/beginner')
  .then(response => response.json())
  .then(data => {
    console.log('Received evaluations:', data);
    // Process the data as needed
  })
  .catch(error => console.error('Error:', error));
```
1. Initiate Request: Use the fetch function to send an HTTP GET request to the endpoint.
2. Check Response: Validate that the response status is OK (status code 200).
3. Parse Data: Convert the response into JSON format.
4. Process Data: Use the received JSON data as needed by displaying it in a pop-up.
5. Error Handling: Catch and log any errors that occur during the process.

# How to RECEIVE Data from the Microservice
When you make a GET request to the microservice endpoint, it responds with a JSON payload. The JSON data contains an array of evaluation objects. 
For example, a response for the beginner level may look like this:


[
  {
    "student": "Ollie",
    "evaluation": "Great course for beginners!"
  },
  {
    "student": "Alyssa",
    "evaluation": "Helped me get started with Spanish."
  }
]

```javascript
async function getEvaluationData(level) {
  try {
    const response = await fetch(`http://localhost:3000/api/evaluations/${level}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Received evaluation data:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Example usage:
getEvaluationData('beginner').then(evaluations => {
  // Implement your logic to display evaluations in your UI.
  console.log('Evaluations:', evaluations);
});
```
1. Async Function: Define an asynchronous function to manage the data request.
2. Fetch Request: Use await with fetch to send an HTTP GET request to the proper endpoint.
3. Response Check: Verify that the response is successful.
4. JSON Conversion: Parse the JSON data from the response.
5. Data Handling: Log or process the JSON data.
6. Error Handling: Catch and manage any errors during the request.


![UML class](https://github.com/user-attachments/assets/f974b539-a8ff-42c0-81e8-a255ab9f730b)
