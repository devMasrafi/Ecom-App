import Image from "next/image";
import user from "/public/images/user.svg";

const Profile = () => {
  return (
    <main className="py-20">
      <section className="container mx-auto">
        <h2 className="text-6xl font-bold py-3">Profile</h2>
        <section>
          <div className="space-y-3 bg-blue-200 w-[30%] p-3 rounded-lg">
            <h2 className="font-bold text-xl">Personal Information</h2>
            <div className="w-[100px] h-[100px] bg-[#181818] rounded-lg">
              <Image
                src={user}
                alt="profile image missing"
                height={100}
                width={100}
                className="rounded"
              />
            </div>
            <p className="text-[181818] text-base font-normal">Display Name</p>
            <p className="text-[181818] text-base font-normal">
              example@gmail.com
            </p>
            <p className="text-[181818] text-base font-normal">01111111111</p>
            <div>
              <button className="px-3 py-2 bg-blue-700 text-white rounded-lg cursor-pointer ">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="space-y-3 bg-blue-200 w-[30%] p-3 rounded-lg">

          </div>
        </section>
      </section>
    </main>
  );
};

export default Profile;
