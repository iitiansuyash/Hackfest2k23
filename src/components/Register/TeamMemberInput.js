import React, { useState } from "react";
const TeamMemberInput = ({ data, setData }) => {
  const [members, setMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState("");
  const addinput = async () => {
    const new_member = document.getElementById("new_member").value;
    const new_members_array = [...members, new_member];
    setMembers(new_members_array);
    setData({ ...data, team_members: new_members_array });
    setNewMemberName("");
  };
  return (
    <div>
      <div className="members">
        <ul>
          {members.map((member, i) => {
            return <li key={i}>{member}</li>;
          })}
        </ul>
      </div>
      <div className="member_adder">
        <input
          id="new_member"
          type="text"
          placeholder="member name"
          value={newMemberName}
          onChange={(e) => {
            setNewMemberName(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addinput();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TeamMemberInput;
