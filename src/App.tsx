import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Song from './Song'

function App() {
  const text=`[Ami][Asus2][Ami][Asus2]
  [Ami]Spatřil jsem kometu [Asus2]oblohou letěla[Ami]
  chtěl jsem jí zazpívat [Asus2]ona mi [Ami]zmizela
  [Dmi]zmizela jako laň [G]u lesa v remízku
  [C]v očích mi zbylo jen [E7]pár žlutých penízků.
  
  (tie isté akordy)
  Penízky ukryl jsem do hlíny pod dubem
  až příště přiletí my už tu nebudem
  my už tu nebudem ach pýcho marnivá
  spatřil jsem kometu chtěl jsem jí zazpívat
  
  [Ami]O vodě [Asus2]o trávě [Ami][Dmi]o lese[Dsus2][Dmi]
  [Gadd11]o smrti [G]se kterou [G6]smířit [C]nejde se[E7]
  [Ami]o lásce [Asus2]o zradě [Ami][Dmi]o světě[Dsus2][Dmi]
  [E/E7]a o všech lidech co kdy žili na téhle [Ami]planetě[Dmi][E7][E]
  (...a tak ďalej a tak ďalej :-))
  
  Na hvězdném nádraží cinkají vagóny
  pan Kepler rozepsal nebeské zákony
  hledal až nalezl v hvězdářských triedrech
  tajemství která teď neseme na bedrech
  
  Velká a odvěká tajemství přírody
  že jenom z člověka člověk se narodí
  že kořen s větvemi ve strom se spojuje
  krev našich nadějí vesmírem putuje
  
  Spatřil jsem kometu byla jak reliéf
  zpod rukou umělce který už nežije
  šplhal jsem do nebe chtěl jsem ji osahat
  marnost mě vysvlékla celého donaha
  
  Jak socha Davida z bílého mramoru
  stál jsem a hleděl jsem hleděl jsem nahoru
  až příště přiletí ach pýcho marnivá
  já už tu nebudu ale jiný jí zazpívá
  
  O vodě o trávě o lese
  o smrti se kterou smířit nejde se
  o lásce o zradě o světě
  bude to písnička o nás a kometě`;

  return (
    <>
      <Song text={text}></Song>
    </>
  )
}

export default App
