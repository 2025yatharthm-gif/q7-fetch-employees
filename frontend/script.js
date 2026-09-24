document.getElementById('getEmployeesBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:5000/employees');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Failed to fetch employees');
    }
});
