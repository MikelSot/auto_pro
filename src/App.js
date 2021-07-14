import React, {useEffect, useState} from 'react';
import './index.scss';
import {ClientContext} from "./utils/contexts";
import Rute from "./utils/Rute";
import {isClientLogEdApi} from "./api/loginApi";

function App() {
  const [client, setClient] = useState(null);
  const [loadClient, setLoadClient] = useState(false);
  const [refreshLogin, setRefreshLogin] = useState(false);

    useEffect(()=>{
      setClient(isClientLogEdApi())
      setRefreshLogin(false)
      setLoadClient(true)
  }, [refreshLogin])

  if (!loadClient) return null;

  return (
      <ClientContext.Provider value={client}>
          {
              // client ? (
                            <>
                                <Rute client={client} setRefreshLogin={setRefreshLogin}/>
                            </>
                        // )
                  // : (
                  //     <Rute setRefreshLogin={setRefreshLogin}/>
                  // )
          }

      </ClientContext.Provider>
  );
}

export default App;


