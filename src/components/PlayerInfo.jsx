import React, { useState } from "react";

const PlayerInfo = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState("initialName");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditedClick = () => {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    setIsEditing((edited) => !edited);
  };

  const handleName = (e) => {
    setPlayerName(e.target.value);
  };

  let editableName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit Name";
  if (isEditing) {
    editableName = (
      <input type="text" value={playerName} onChange={handleName} required />
    );
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditedClick}>{btnCaption}</button>
    </li>
  );
};

export default PlayerInfo;
