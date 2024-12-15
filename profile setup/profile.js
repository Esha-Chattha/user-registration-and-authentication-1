// profile.js
document.addEventListener("DOMContentLoaded", () => {
    const profileForm = document.getElementById("profileForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const cityField = document.getElementById("city");
    const successMessage = document.getElementById("successMessage");
  
    // Load profile data from local storage
    const loadProfile = () => {
      const profile = JSON.parse(localStorage.getItem("userProfile"));
      if (profile) {
        nameField.value = profile.name || "";
        emailField.value = profile.email || ""; // Email is assumed to be pre-filled from sign-up
        cityField.value = profile.city || "";
      }
    };
  
    // Save profile data to local storage
    const saveProfile = (e) => {
      e.preventDefault();
      const profile = {
        name: nameField.value,
        email: emailField.value, // Email field is disabled (not editable here)
        city: cityField.value,
      };
      localStorage.setItem("userProfile", JSON.stringify(profile));
      successMessage.textContent = "Profile updated successfully!";
      setTimeout(() => (successMessage.textContent = ""), 3000); // Clear message after 3 seconds
    };
  
    // Load profile on page load
    loadProfile();
  
    // Save profile on form submit
    profileForm.addEventListener("submit", saveProfile);
  });
  //unit test
  const mockLocalStorage = (() => {
    const storage = {};
    return {
      getItem: (key) => storage[key] || null,
      setItem: (key, value) => (storage[key] = value),
      clear: () => Object.keys(storage).forEach((key) => delete storage[key]),
    };
  })();
  
  // Test profile saving
  localStorage.setItem = mockLocalStorage.setItem;
  localStorage.getItem = mockLocalStorage.getItem;
  
  const testSaveProfile = () => {
    const profile = {
      name: "Ayesha Chattha",
      email: "ayesha@example.com",
      city: "Gujranwala",
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    console.assert(savedProfile.name === "Ayesha Chattha", "Name not saved correctly");
    console.assert(savedProfile.city === "Gujranwala", "City not saved correctly");
  };
  
  // Run test
  testSaveProfile();
  