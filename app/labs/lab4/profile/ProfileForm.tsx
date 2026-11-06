"use client";
import { useState } from "react";
import { emptyProfile, validateProfile, type Profile, type ProfileErrors } from "./profile";
import ProfileFields from "./ProfileFields";
import ProfileAlert from "./ProfileAlert";
export default function ProfileForm() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateProfile(profile);
    setErrors(errs);
    setSubmitted(true);
  };
  return (
    <div id="wd-profile-form">
      <h2>Profile</h2>
      <ProfileAlert id="wd-profile-alert" submitted={submitted} errors={errors} />
      <form onSubmit={save} className="max-w-sm">
        <ProfileFields
          prefix="wd-profile"
          profile={profile}
          errors={errors}
          setProfile={setProfile}
        />
        <br />
        <button
          type="submit"
          id="wd-profile-save"
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        >
          Save
        </button>
      </form>
      <pre className="mt-4 text-xs">{JSON.stringify(profile, null, 2)}</pre>
      <hr />
    </div>
  );
}
