import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";

const ProfilePage = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const auth = await isAuthenticated();
  const user = await getUser();

  if (!auth) {
    redirect("/api/auth/login");
  } else {
    return (
      <div>
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to your profile</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
              {user?.picture && (
                <Image
                  width={80}
                  height={80}
                  src={user.picture}
                  alt="Profile"
                  className=" rounded-full object-cover"
                />
              )}
              <div>
                <h2 className="text-xl font-semibold">
                  {user?.given_name} {user?.family_name}
                </h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfilePage;
