import React from "react";

function Team() {
  const TeamImgs = [
    {
      img: "./images/team1.png",
      teamName: "John Doe",
      teamRole: "Data Engineer",
      teamPhone: "+123456789",
      teamEmail: "example@gmail.com",
    },
    {
      img: "./images/team2.png",
      teamName: "John Doe",
      teamRole: "Data Engineer",
      teamPhone: "+123456789",
      teamEmail: "example@gmail.com",
    },
    {
      img: "./images/team3.png",
      teamName: "John Doe",
      teamRole: "Data Engineer",
      teamPhone: "+123456789",
      teamEmail: "example@gmail.com",
    },
    {
      img: "./images/team2.png",
      teamName: "John Doe",
      teamRole: "Data Engineer",
      teamPhone: "+123456789",
      teamEmail: "example@gmail.com",
    },
  ];
  return (
    <div className="py-20 bg-[#F4F0EC] px-10 mt-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <h3 className="text-3xl font-medium text-center">What the People Thinks About Us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TeamImgs.map((team) => (
            <div className="max-w-[350px] w-full mx-auto overflow-hidden relative rounded-md bg-white p-4 space-y-4">
              <img
                src={team.img}
                alt="img"
                className="w-full h-[400px] object-cover"
              />

              <>
                <h3 className="text-xl font-medium">{team.teamName}</h3>
                <span>{team.teamRole}</span>
              </>

              <>
                <span>{team.teamPhone}</span>
                <h5>{team.teamEmail}</h5>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
