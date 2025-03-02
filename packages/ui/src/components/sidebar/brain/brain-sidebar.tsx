import { Icon } from '@iconify/react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/_shadcn/components/ui/sidebar';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/_shadcn/components/ui/collapsible';

import { useSafeTranslations, Link } from '@imkdw-dev-client/i18n';
import { BasicSidebar } from '../basic';

export function BrainSidebar() {
  const t = useSafeTranslations('Sidebar');

  const categories = [
    {
      title: '메이플스토리',
      items: ['아크메이지', '나이트로드', '듀얼블레이더', '팔라딘', '비숍'],
    },
    {
      title: '리그오브레전드',
      items: ['아리', '티모', '야스오', '카타리나', '리신'],
    },
    {
      title: '오버워치',
      items: ['메르시', '겐지', '트레이서', '위도우메이커', '한조'],
    },
    {
      title: '배틀그라운드',
      items: ['카구라', '사나', '모모', '나연', '지효'],
    },
    {
      title: '던전앤파이터',
      items: ['웨펀마스터', '소울브링어', '레인저', '버서커', '크루세이더'],
    },
    {
      title: '디아블로',
      items: ['바바리안', '소서리스', '네크로맨서', '아마존', '팔라딘'],
    },
    {
      title: '포켓몬스터',
      items: ['피카츄', '이상해씨', '파이리', '꼬부기', '뮤츠'],
    },
    {
      title: '서든어택',
      items: ['스나이퍼', '돌격병', '의무병', '공병', '지원병'],
    },
    {
      title: '카트라이더',
      items: ['배찌', '다오', '디지니', '모스', '에띠'],
    },
    {
      title: '스타크래프트',
      items: ['마린', '질럿', '저글링', '하이드라', '드라군'],
    },
    {
      title: '테일즈런너',
      items: ['루시', '마로', '케피', '로로', '베로니카'],
    },
    {
      title: '프리스타일',
      items: ['빅조', '디제이맥스', '리우', '제이', '미카'],
    },
    {
      title: '크레이지아케이드',
      items: ['배찌', '우니', '케피', '다오', '마리드'],
    },
    {
      title: '마구마구',
      items: ['강속구', '슬라이더', '커브', '포크볼', '체인지업'],
    },
    {
      title: '피파온라인',
      items: ['손흥민', '메시', '호날두', '음바페', '홀란드'],
    },
    {
      title: '엘소드',
      items: ['엘스', '아이샤', '레이븐', '이브', '아라'],
    },
    {
      title: '블레이드앤소울',
      items: ['검사', '역사', '기공사', '소환사', '주술사'],
    },
    {
      title: '아키에이지',
      items: ['전사', '궁수', '마법사', '치유사', '도적'],
    },
    {
      title: '테라',
      items: ['창기사', '광전사', '마법사', '사제', '궁수'],
    },
    {
      title: '라그나로크',
      items: ['소드맨', '머천트', '아콜라이트', '매지션', '아처'],
    },
  ];

  return (
    <BasicSidebar>
      <SidebarGroup>
        <SidebarGroupLabel>Categories</SidebarGroupLabel>
        <SidebarGroupAction title="Add Project">
          <Icon icon="lucide:plus" /> <span className="sr-only">Add Project</span>
        </SidebarGroupAction>
        <SidebarGroupContent>
          <SidebarMenu>
            {categories.map((category) => (
              <Collapsible key={category.title} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="cursor-pointer">
                      <Icon icon="lucide:folder" />
                      <span>{category.title}</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2">
                    <SidebarMenuSub className="flex-col gap-3">
                      {category.items.map((item) => (
                        <SidebarMenuSubItem key={item}>
                          <Link href={`#${item.toLowerCase()}`} className="flex">
                            <Icon icon="lucide:file" className="mr-2 h-4 w-4" />
                            {item}
                          </Link>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </BasicSidebar>
  );
}
