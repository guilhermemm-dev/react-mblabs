import TicketsTable from '../src/components/table/TicketsTable';
import SearchBar from '../src/components/SearchBar';
import './App.css';
import { useState } from 'react';
import SelectType from './components/SelectType';
import { Box } from '@mui/material';
function App() {
  const [search, setSearch] = useState('');
  const [ticketType, setTicketType] = useState(1);
  const [ticketOnline, setTicketOnline] = useState(1);

  return (
    <>
      <header>App header teste</header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          gap: '5px',
          marginTop: '20px',
        }}
      >
        <SearchBar handleSearch={setSearch} />
        <SelectType ticketType={setTicketType} />
        <SelectType ticketType={setTicketOnline} />
      </Box>

      <TicketsTable
        search={search}
        select={ticketType}
        online={ticketOnline}
      />
    </>
  );
}

export default App;
