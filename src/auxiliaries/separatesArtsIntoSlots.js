import styled from "styled-components";
import { uploadNewArt } from "./uploadArt";

export function separatesArtsIntoSlots(arts, e, supabase, setArts, user) {
  const isThereArtForThisSlot = arts.find(
    (element) => element.name.replace("slot", "") === e.id.toString()
  );
  return (
    <Art key={e.id}>
      <input
        onChange={(event) => uploadNewArt(event, e.id, supabase, setArts, user)}
        type="file"
      ></input>
      {isThereArtForThisSlot && (
        <img
          src={
            process.env.REACT_APP_BUCKET +
            user.id +
            "/" +
            isThereArtForThisSlot.name +
            `?t=${isThereArtForThisSlot.updated_at}`
          }
          alt={`Art${e.id}`}
        />
      )}
    </Art>
  );
}

const Art = styled.label`
  height: 250px;
  width: 20%;
  border-radius: 32px;
  background-color: white;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    border-radius: 32px;
  }

  input {
    display: none;
  }
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin: 10px auto;
  }
`;
