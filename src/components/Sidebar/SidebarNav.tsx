import { Stack } from '@chakra-ui/react'
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';
import { RiInputMethodLine, RiGitMergeLine, RiDashboardLine, RiContactsBookLine } from 'react-icons/ri'


export function SidebarNav() {
    return(
        <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink icon={RiContactsBookLine} href="/users">Usuários</NavLink>
        </NavSection>
        <NavSection title="Automação">
          <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
        </NavSection>
      </Stack>
    );
}