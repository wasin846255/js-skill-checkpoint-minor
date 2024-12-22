// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      
      const newUsers = data.map(user => user.name);
      console.log(newUsers);
      
      const longName = newUsers.filter(name => name.length > 17);
      console.log(longName);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }
  
  fetchUser();
  