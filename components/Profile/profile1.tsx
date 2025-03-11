import React from "react";
import ProfileForm from "./profiletemplate";

const ProfileScreen1 = () => {
  const fields = [
    { label: "User Name", placeholder: "Enter your name" },
    { label: "User Contact", placeholder: "Enter your contact number " },
    { label: "Emergency Contact", placeholder: "Enter contact number" },
    { label: "Name of Emergency Contact", placeholder: "Enter name" },
    { label: "Date of Birth", placeholder: "Select date", isDatePicker: true },
    { label: "Age", placeholder: "Enter your age" },
    { label: "Gender", placeholder: "Select gender", isDropdown: true, options: ["Male", "Female", "Other"] },
  ];

  return <ProfileForm title="Profile" step="1 of 3" fields={fields} nextScreen="Profile2" />;
};

export default ProfileScreen1;
