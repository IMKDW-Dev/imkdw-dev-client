import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/_shadcn/components/ui/sidebar';

import { useSafeTranslations } from '@imkdw-dev-client/i18n';

interface Props {
  children: ReactNode;
}

export function BasicSidebar({ children }: Props) {
  const t = useSafeTranslations('Sidebar');

  const platformItems = [
    {
      title: t('Sidebar.Platform.Blog.Title'),
      url: '#',
      icon: <Icon icon="meteor-icons:blogger" />,
    },
    {
      title: t('Sidebar.Platform.Brain.Title'),
      url: '#',
      icon: <Icon icon="mdi:head-cog-outline" />,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('Sidebar.Platform.Title')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {children}
      </SidebarContent>
    </Sidebar>
  );
}
