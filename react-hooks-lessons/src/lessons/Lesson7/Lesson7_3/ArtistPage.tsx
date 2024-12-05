/* eslint-disable @typescript-eslint/no-explicit-any */
import Albums from "./Albums.js";
import Biography from "./Biography.js";
import Panel from "./Panel.js";

export default function ArtistPage({ artist }: any) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Panel>
        <Albums artistId={artist.id} />
      </Panel>
    </>
  );
}

function AlbumsGlimmer() {
  return (
    <div className="bg-slate-300">
      <p>Loading...</p>
    </div>
  );
}
