// test_microservice.js
async function testGetEvaluations() {
  try {
    const response = await fetch('http://localhost:3000/api/evaluations/beginner');
    if (response.ok) {
      const data = await response.json();
      console.log("Evaluations for beginner level:", data);
    } else {
      console.error("HTTP error:", response.status);
    }
  } catch (error) {
    console.error("Error fetching evaluations:", error);
  }
}

testGetEvaluations();