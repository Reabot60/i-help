document.getElementById('createAccountBtn').addEventListener('click', function () {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate inputs
    if (!fullName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Save account details to localStorage (simulating a simple database)
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
  
    // Show success container
    document.querySelector('.account-container').classList.add('hidden');
    document.querySelector('.success-container').classList.remove('hidden');
  
    // Display success message
    alert(`login succesful..${fullName}`);
  });
  