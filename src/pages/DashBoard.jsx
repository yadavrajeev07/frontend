import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        {user ? (
          <div>
            <p className="text-lg">
              Welcome, <span className="font-semibold">{user.name}</span>
            </p>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        ) : (
          <p>Please login first!</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
 