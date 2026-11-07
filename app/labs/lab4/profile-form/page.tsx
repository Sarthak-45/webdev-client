"use client";
import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";
export default function ProfileFormPage() {
  return (
    <div id="wd-profile-form-page" className="flex flex-wrap gap-6 p-4">
      <div className="min-w-72">
        <ProfileForm />
      </div>
      <div className="min-w-72">
        <ContextProfileForm />
      </div>
      <div className="min-w-72">
        <ZustandProfileForm />
      </div>
    </div>
  );
}
