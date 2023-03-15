import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import TimeLine from '../src/components/TimeLine'
import Header from "../src/components/Header";
import { useState } from "react";

function HomePage() {
   const [valorDoFiltro, setValorDoFiltro] = useState("");

   return (
      <>
         <CSSReset />
         <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1
         }}>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />            
            <Header />
            <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
               Conteúdo
            </TimeLine>
         </div>
      </>
   );
}

export default HomePage