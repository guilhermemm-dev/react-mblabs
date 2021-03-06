import './App.css';
import { useState } from 'react';
import { Box } from '@mui/material';
import SearchSelect from './components/SearchSelect';
import TicketsTable from '../src/components/TicketsTable';
import SearchBar from '../src/components/SearchBar';

function App() {
  const [search, setSearch] = useState('');
  const [ticketType, setTicketType] = useState('Todos');
  const [ticketOnline, setTicketOnline] = useState('Todos');

  const TicketType = {
    todos: {
      id: 'TicketType',
      nome: 'Todos',
      value: 'Todos',
    },
    empresarial: {
      id: 'Empresarial',
      nome: 'Empresarial',
      value: true,
    },
    academico: {
      id: 'Acadêmico',
      nome: 'Acadêmico',
      value: false,
    },
  };

  const TicketOnline = {
    todos: {
      id: 'TicketOnline',
      nome: 'Todos',
      value: 'Todos',
    },
    online: { id: 'Online', nome: 'Online', value: true },
    presencial: {
      id: 'Presencial',
      nome: 'Presencial',
      value: false,
    },
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          gap: '5px',
          marginTop: '30px',
        }}
      >
        <SearchBar handleSearch={setSearch} />
        <SearchSelect
          ticketType={ticketType}
          setTicketType={setTicketType}
          values={[
            TicketType.todos,
            TicketType.empresarial,
            TicketType.academico,
          ]}
        />
        <SearchSelect
          ticketType={ticketOnline}
          setTicketType={setTicketOnline}
          values={[
            TicketOnline.todos,
            TicketOnline.online,
            TicketOnline.presencial,
          ]}
        />
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
