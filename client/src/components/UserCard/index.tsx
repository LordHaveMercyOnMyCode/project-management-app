import { User } from "@/lib/store/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded border p-4 shadow">
      <div className="h-10 w-10">
        {user.profilePictureUrl && (
          <Image
            src={`/${user.profilePictureUrl}`}
            alt="profile picture"
            width={32}
            height={32}
            className="h-full w-full rounded-full object-cover"
          />
        )}
      </div>
      <div>
        <h3>{user.username}</h3>
        <p>ID: {user.userId}</p>
      </div>
    </div>
  );
};

export default UserCard;
